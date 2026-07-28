/**
 * Scroll-driven "six steps" path + reveal-on-scroll animations.
 * Ported from the design prototype. Respects prefers-reduced-motion.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function runReveal() {
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-ring],[data-dot]'));
  if (!targets.length) return;

  if (reduce) {
    targets.forEach((el) => (el.style.animationPlayState = 'running'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          (en.target as HTMLElement).style.animationPlayState = 'running';
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0, rootMargin: '0px 0px -6% 0px' }
  );
  targets.forEach((el) => io.observe(el));

  // Fail-open: never leave a target invisible if the observer misses it.
  const sweep = setInterval(() => {
    let remaining = 0;
    targets.forEach((el) => {
      if (el.style.animationPlayState !== 'running') {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.94 && r.bottom > 0) el.style.animationPlayState = 'running';
        else remaining++;
      }
    });
    if (!remaining) clearInterval(sweep);
  }, 400);
}

function runSteps() {
  const wrap = document.querySelector<HTMLElement>('[data-steps]');
  const path = document.querySelector<SVGPathElement>('[data-steppath]');
  if (!wrap || !path) return;
  const L = path.getTotalLength();
  if (!L) return;

  const dots = Array.from(wrap.querySelectorAll<SVGCircleElement>('[data-step]'));
  const labels = Array.from(wrap.querySelectorAll<HTMLElement>('[data-steplabel]'));
  const marker = wrap.querySelector<SVGGElement>('[data-marker]');

  if (reduce) {
    path.style.strokeDashoffset = '0';
    dots.forEach((d) => {
      d.style.opacity = '1';
      d.style.transform = 'scale(1)';
    });
    labels.forEach((l) => {
      l.style.opacity = '1';
      l.style.transform = 'none';
    });
    return;
  }

  path.style.strokeDasharray = String(L);
  path.style.strokeDashoffset = String(L);

  const N = 400;
  const samples: DOMPoint[] = [];
  for (let i = 0; i <= N; i++) samples.push(path.getPointAtLength((L * i) / N));
  const fracs = dots.map((d) => {
    const cx = +(d.getAttribute('cx') ?? 0);
    const cy = +(d.getAttribute('cy') ?? 0);
    let best = 0;
    let bestD = Infinity;
    samples.forEach((p, i) => {
      const dd = (p.x - cx) ** 2 + (p.y - cy) ** 2;
      if (dd < bestD) {
        bestD = dd;
        best = i;
      }
    });
    return best / N;
  });

  let raf: number | null = null;
  const draw = () => {
    raf = null;
    const r = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    let p = (vh * 0.82 - r.top) / (r.height + vh * 0.28);
    p = Math.max(0, Math.min(1, p));
    path.style.strokeDashoffset = String(L * (1 - p));
    dots.forEach((d, i) => {
      const on = p >= fracs[i] - 0.012;
      d.style.opacity = on ? '1' : '0';
      d.style.transform = on ? 'scale(1)' : 'scale(.3)';
      const lb = labels[i];
      if (lb) {
        lb.style.opacity = on ? '1' : '0';
        lb.style.transform = on ? 'translateY(0)' : 'translateY(16px)';
      }
    });
    if (marker) {
      const pt = path.getPointAtLength(L * p);
      marker.style.transform = `translate(${pt.x}px,${pt.y}px)`;
      marker.style.opacity = p > 0.004 && p < 0.997 ? '1' : '0';
    }
  };
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(draw);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  draw();
}

function init() {
  runReveal();
  runSteps();
}

if (document.readyState !== 'loading') init();
else document.addEventListener('DOMContentLoaded', init);
