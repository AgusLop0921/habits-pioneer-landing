export type Locale = 'es' | 'en' | 'pt';

export const LOCALES: Locale[] = ['es', 'en', 'pt'];

// BCP-47 tags used for <html lang> and hreflang.
export const HTML_LANG: Record<Locale, string> = {
  es: 'es-AR',
  en: 'en',
  pt: 'pt-BR',
};

export interface Strings {
  navCoach: string; navHabits: string; navSleep: string; navPrivacy: string; navCta: string;
  heroKicker: string; heroTitle: string; heroSub: string; heroNote: string;
  storeApplePre: string; storeGooglePre: string;
  trust1: string; trust1b: string; trust2: string; trust2b: string;
  trust3: string; trust3b: string; trust4: string; trust4b: string;
  daysWord: string;
  phasesTitle: string;
  phase1: string; phase1v: string; phase1s: string;
  phase2: string; phase2v: string; phase2s: string;
  phase3: string; phase3v: string; phase3s: string;
  challengeTitle: string; challengeBody: string; challengeQuote: string;
  stepsKicker: string; stepsTitle: string; stepsSub: string;
  step1: string; step2: string; step3: string; step4: string; step5: string; step6: string;
  coachKicker: string; coachTitle: string; coachBody: string;
  coach1: string; coach2: string; coach3: string; coachPrivacy: string;
  habitsKicker: string; habitsTitle: string; habitsSub: string;
  freq1: string; freq1b: string; freq2: string; freq2b: string; freq3: string; freq3b: string;
  reduceTag: string; reduceTitle: string; reduceBody: string; reduceStat: string; reduceStatSub: string;
  sleepKicker: string; sleepTitle: string; sleepBody: string;
  sleep1: string; sleep1b: string; sleep2: string; sleep2b: string; sleep3: string; sleep3b: string;
  statsKicker: string; statsTitle: string; statsBody: string;
  stats1: string; stats2: string; stats3: string;
  ringsTitle: string; ringsBody: string; chartTitle: string; chartBody: string;
  xpValue: string; xpBody: string;
  galleryTitle: string; gallerySub: string; gal1: string; gal2: string; gal3: string;
  privKicker: string; privTitle: string; privBody: string;
  priv1: string; priv1b: string; priv2: string; priv2b: string; priv3: string; priv3b: string;
  finalTitle: string; finalSub: string; finalNote: string;
  footerRights: string; footerLang: string;
  // meta (added for SEO — not in prototype)
  metaTitle: string; metaDescription: string; ogImageAlt: string;
}

export const STR: Record<Locale, Strings> = {
  en: {
    navCoach: 'AI Coach', navHabits: 'Habits', navSleep: 'Sleep', navPrivacy: 'Privacy', navCta: 'Download',
    heroKicker: 'Habits · Tasks · Sleep · Journal',
    heroTitle: 'Build the version of you that you want to be.',
    heroSub: 'One habit at a time, with a coach that actually gets your life. Calm, guilt-free, and it works offline.',
    heroNote: 'Free to start · iOS and Android · English, Español, Português',
    storeApplePre: 'Download on the', storeGooglePre: 'Get it on',
    trust1: 'Offline-first', trust1b: 'Works with no connection',
    trust2: 'Account optional', trust2b: 'Use it without one, or sign in to sync',
    daysWord: 'days',
    phasesTitle: 'A gradual plan, in 3 phases',
    phase1: 'Phase 1', phase1v: '50 a week', phase1s: 'You log, and you learn your baseline',
    phase2: 'Phase 2', phase2v: '25 a week', phase2s: 'Half of it, with the coach alongside',
    phase3: 'Phase 3', phase3v: '0 a week', phase3s: 'Your goal, no rush',
    challengeTitle: 'The coach builds the challenge for you',
    challengeBody: 'Tell it what you want to cut back on and it sets concrete deadlines: 14, 21, 30, 45, 66 or 90 days. Finish one and it offers the next — a little lower — or helps you adopt it for good.',
    challengeQuote: '“You made it through the 2 weeks. You did it 6 times in total.” — 21 more days, or already adopted?',
    trust3: '3 languages', trust3b: 'EN · ES · PT',
    trust4: 'All in one', trust4b: 'Habits, tasks, sleep, journal',
    stepsKicker: 'How it works', stepsTitle: 'Six steps to a habit that sticks',
    stepsSub: 'The app walks you through each one — and the coach fills in the blanks when you get stuck.',
    step1: 'Know what you want to change', step2: 'Set a goal you can reach', step3: "Decide how you'll measure it",
    step4: 'Put it into your day', step5: 'Give it a deadline', step6: 'Repeat it — and keep the streak',
    coachKicker: 'The difference', coachTitle: 'A coach that asks before it assumes',
    coachBody: "Tell it what's going on and it suggests real, doable habits — never generic advice. It builds gradual plans for you and explains exactly how to use them.",
    coach1: 'Personal habit suggestions, adapted to your schedule',
    coach2: 'Custom step-down plans to cut back on something',
    coach3: 'Always one tap away, whenever you need a nudge',
    coachPrivacy: 'Nothing is stored. Every conversation starts clean.',
    habitsKicker: 'Habits', habitsTitle: 'Daily, weekly, monthly — and the ones you want to quit',
    habitsSub: 'Simple check-offs or counters, emoji, tags, flexible reminders, pause for holidays, archive without losing history.',
    freq1: 'Daily', freq1b: 'Check it off every day, or count it: 8 glasses of water, tap to add one.',
    freq2: 'Weekly', freq2b: 'A goal per week. Gym 3×/week fills up 1/3 → 2/3 → 3/3 at your own pace.',
    freq3: 'Monthly', freq3b: 'For the ones that only need to happen once in a while, like reviewing your finances.',
    reduceTag: 'Reduction habits', reduceTitle: 'Drop the bad, not just add the good',
    reduceBody: 'Log each cigarette, each drink. The card shows how many you have left this week before your limit — and a 3-phase plan lowers the target until you reach your goal.',
    reduceStat: '12 of 50 · 38 left', reduceStatSub: 'This week · phase 1 of 3',
    sleepKicker: 'Sleep', sleepTitle: 'A whole module for resting better',
    sleepBody: 'Log your nights, check your sleep hygiene, and wind down with a guided session whose palette shifts with the hour — sunset, night, midnight.',
    sleep1: 'Night log', sleep1b: 'Hours, quality, wake-ups and notes',
    sleep2: '15 hygiene habits', sleep2b: 'Evidence-based, grouped by moment',
    sleep3: 'Guided wind-down', sleep3b: 'A calm screen to slow you down',
    statsKicker: 'Progress', statsTitle: 'Streaks that motivate, never guilt you',
    statsBody: 'Separate rings for daily and period habits, perfect days, an activity heatmap and gentle alerts when a streak is at risk.',
    stats1: 'Current and best streak for every habit',
    stats2: '10 XP per habit, 10 levels from Rookie to Supreme',
    stats3: 'Weekly and monthly stats, plus a full calendar',
    ringsTitle: 'Two rings, two rhythms', ringsBody: "One for today's habits, one for your weekly and monthly ones — so a slow week never erases a good day.",
    chartTitle: 'Your week at a glance', chartBody: 'Completion per day, 7D / 31D / 26W / 12M.',
    xpValue: 'Level 6', xpBody: 'Explorer · 680 XP. Ten levels, one habit at a time.',
    galleryTitle: 'Take a look inside', gallerySub: 'Real screens from the app.',
    gal1: 'Home', gal2: 'Stats', gal3: 'Sleep',
    privKicker: 'Privacy', privTitle: 'Your progress belongs to you',
    privBody: 'The app is offline-first: everything lives on your device. Sync only if you want it.',
    priv1: 'No account by default', priv1b: 'Use the whole app without signing up for anything.',
    priv2: 'Optional sync', priv2b: 'Sign in with Google or Apple to back up and switch phones.',
    priv3: 'Encrypted backups', priv3b: 'Local backups with the key in your system keychain. Delete everything whenever you want.',
    finalTitle: 'Better habits, every day.', finalSub: 'Add the good, drop the bad. All in one calm app.',
    finalNote: 'iOS 16+ and Android 10+ · Free to start',
    footerRights: '© 2026 Habits Pioneer', footerLang: 'Language',
    metaTitle: 'Habits Pioneer — Better habits, every day, with an AI coach',
    metaDescription: 'Build good habits, quit the bad ones and rest better. An AI coach that adapts to your life, reduction habits, a sleep module, tasks and a journal — all in one calm, offline-first app for iOS and Android.',
    ogImageAlt: 'Habits Pioneer app on a phone, showing the home screen with habits and progress.',
  },
  es: {
    navCoach: 'Coach IA', navHabits: 'Hábitos', navSleep: 'Sueño', navPrivacy: 'Privacidad', navCta: 'Descargar',
    heroKicker: 'Hábitos · Tareas · Sueño · Diario',
    heroTitle: 'Construí la versión de vos que querés ser.',
    heroSub: 'Un hábito por vez, con un coach que entiende tu vida. Calma, sin culpa, y funciona sin conexión.',
    heroNote: 'Empezá gratis · iOS y Android · Español, English, Português',
    storeApplePre: 'Descargalo en el', storeGooglePre: 'Disponible en',
    trust1: 'Offline-first', trust1b: 'Funciona sin conexión',
    trust2: 'Cuenta opcional', trust2b: 'Usala sin cuenta, o logueate para sincronizar',
    daysWord: 'días',
    phasesTitle: 'Un plan gradual, en 3 fases',
    phase1: 'Fase 1', phase1v: '50 por semana', phase1s: 'Registrás y conocés tu base real',
    phase2: 'Fase 2', phase2v: '25 por semana', phase2s: 'La mitad, con el coach al lado',
    phase3: 'Fase 3', phase3v: '0 por semana', phase3s: 'Tu meta, sin apuro',
    challengeTitle: 'El coach te arma el desafío',
    challengeBody: 'Le contás qué querés reducir y te pone plazos concretos: 14, 21, 30, 45, 66 o 90 días. Cuando cumplís uno, te propone el siguiente — un poco más abajo — o te ayuda a adoptarlo para siempre.',
    challengeQuote: '«Cumpliste las 2 semanas. Lo hiciste 6 veces en total.» ¿Seguís 21 días más, o ya lo adoptaste?',
    trust3: '3 idiomas', trust3b: 'ES · EN · PT',
    trust4: 'Todo en una', trust4b: 'Hábitos, tareas, sueño y diario',
    stepsKicker: 'Cómo funciona', stepsTitle: 'Seis pasos para un hábito que dura',
    stepsSub: 'La app te acompaña en cada uno — y el coach completa lo que te falta cuando te trabás.',
    step1: 'Entendé qué querés cambiar', step2: 'Poné una meta alcanzable', step3: 'Definí cómo vas a medirlo',
    step4: 'Sumalo a tu día', step5: 'Ponele un plazo', step6: 'Repetilo — y cuidá la racha',
    coachKicker: 'El diferencial', coachTitle: 'Un coach que pregunta antes de asumir',
    coachBody: 'Contale tu situación y te sugiere hábitos concretos y realistas — nunca consejos genéricos. Te arma planes graduales a medida y te explica cómo usarlos.',
    coach1: 'Hábitos sugeridos según tus horarios de verdad',
    coach2: 'Planes de reducción graduales hechos para vos',
    coach3: 'Siempre a un toque, cuando necesites un empujón',
    coachPrivacy: 'No guarda nada. Cada conversación arranca limpia.',
    habitsKicker: 'Hábitos', habitsTitle: 'Diarios, semanales, mensuales — y los que querés dejar',
    habitsSub: 'Simples o con contador, emoji, etiquetas, recordatorios flexibles, pausa por vacaciones y archivo sin perder el historial.',
    freq1: 'Diarios', freq1b: 'Se marcan todos los días, o se cuentan: 8 vasos de agua, tocás para sumar uno.',
    freq2: 'Semanales', freq2b: 'Una meta por semana. Gym 3×/semana va sumando 1/3 → 2/3 → 3/3 a tu ritmo.',
    freq3: 'Mensuales', freq3b: 'Para lo que pasa cada tanto, como revisar las finanzas del mes.',
    reduceTag: 'Hábitos de reducción', reduceTitle: 'Dejá lo malo, no solo sumes lo bueno',
    reduceBody: 'Registrás cada cigarrillo, cada trago. La tarjeta te muestra cuántos te quedan esta semana antes del límite — y un plan de 3 fases baja el objetivo hasta tu meta.',
    reduceStat: '12 de 50 · quedan 38', reduceStatSub: 'Esta semana · fase 1 de 3',
    sleepKicker: 'Sueño', sleepTitle: 'Un módulo entero para descansar mejor',
    sleepBody: 'Registrá tus noches, revisá tu higiene del sueño y bajá revoluciones con una sesión guiada cuya paleta cambia con la hora: atardecer, noche, medianoche.',
    sleep1: 'Registro por noche', sleep1b: 'Horas, calidad, despertares y notas',
    sleep2: '15 hábitos de higiene', sleep2b: 'Basados en evidencia, por momento',
    sleep3: 'Sesión guiada', sleep3b: 'Una pantalla calma para bajar el ritmo',
    statsKicker: 'Progreso', statsTitle: 'Rachas que motivan, nunca culpan',
    statsBody: 'Anillos separados para diarios y de período, días perfectos, mapa de calor y alertas suaves cuando una racha está en riesgo.',
    stats1: 'Racha actual y mejor racha de cada hábito',
    stats2: '10 XP por hábito y 10 niveles, de Novato a Supremo',
    stats3: 'Estadísticas semanales, mensuales y calendario completo',
    ringsTitle: 'Dos anillos, dos ritmos', ringsBody: 'Uno para los hábitos de hoy y otro para los semanales y mensuales — una semana floja no borra un buen día.',
    chartTitle: 'Tu semana de un vistazo', chartBody: 'Cumplimiento por día: 7D / 31D / 26S / 12M.',
    xpValue: 'Nivel 6', xpBody: 'Explorador · 680 XP. Diez niveles, un hábito por vez.',
    galleryTitle: 'Mirá cómo se ve', gallerySub: 'Pantallas reales de la app.',
    gal1: 'Inicio', gal2: 'Stats', gal3: 'Sueño',
    privKicker: 'Privacidad', privTitle: 'Tu progreso es tuyo',
    privBody: 'La app es offline-first: todo vive en tu dispositivo. Sincronizás solo si querés.',
    priv1: 'Sin cuenta por defecto', priv1b: 'Usá toda la app sin registrarte en ningún lado.',
    priv2: 'Sync opcional', priv2b: 'Entrá con Google o Apple para respaldar y cambiar de teléfono.',
    priv3: 'Respaldos cifrados', priv3b: 'Backups locales con la clave en el llavero del sistema. Borrás todo cuando quieras.',
    finalTitle: 'Mejores hábitos, cada día.', finalSub: 'Sumá lo bueno, dejá lo malo. Todo en una app calma.',
    finalNote: 'iOS 16+ y Android 10+ · Empezá gratis',
    footerRights: '© 2026 Habits Pioneer', footerLang: 'Idioma',
    metaTitle: 'Habits Pioneer — Mejores hábitos, cada día, con un coach de IA',
    metaDescription: 'Construí buenos hábitos, dejá los malos y descansá mejor. Un coach de IA que se adapta a tu vida, hábitos de reducción, un módulo de sueño, tareas y un diario — todo en una app calma y offline-first para iOS y Android.',
    ogImageAlt: 'La app Habits Pioneer en un teléfono, mostrando la pantalla de inicio con hábitos y progreso.',
  },
  pt: {
    navCoach: 'Coach IA', navHabits: 'Hábitos', navSleep: 'Sono', navPrivacy: 'Privacidade', navCta: 'Baixar',
    heroKicker: 'Hábitos · Tarefas · Sono · Diário',
    heroTitle: 'Construa a versão de você que você quer ser.',
    heroSub: 'Um hábito por vez, com um coach que entende a sua vida. Calmo, sem culpa, e funciona offline.',
    heroNote: 'Comece grátis · iOS e Android · Português, Español, English',
    storeApplePre: 'Baixe na', storeGooglePre: 'Disponível no',
    trust1: 'Offline-first', trust1b: 'Funciona sem conexão',
    trust2: 'Conta opcional', trust2b: 'Use sem conta, ou entre para sincronizar',
    daysWord: 'dias',
    phasesTitle: 'Um plano gradual, em 3 fases',
    phase1: 'Fase 1', phase1v: '50 por semana', phase1s: 'Você registra e conhece sua base',
    phase2: 'Fase 2', phase2v: '25 por semana', phase2s: 'Metade, com o coach do lado',
    phase3: 'Fase 3', phase3v: '0 por semana', phase3s: 'Sua meta, sem pressa',
    challengeTitle: 'O coach monta o desafio para você',
    challengeBody: 'Conte o que quer reduzir e ele define prazos concretos: 14, 21, 30, 45, 66 ou 90 dias. Ao concluir um, ele propõe o próximo — um pouco menor — ou ajuda você a adotá-lo de vez.',
    challengeQuote: '“Você cumpriu as 2 semanas. Fez isso 6 vezes no total.” — Mais 21 dias, ou já adotou?',
    trust3: '3 idiomas', trust3b: 'PT · ES · EN',
    trust4: 'Tudo em um', trust4b: 'Hábitos, tarefas, sono e diário',
    stepsKicker: 'Como funciona', stepsTitle: 'Seis passos para criar hábitos',
    stepsSub: 'O app acompanha você em cada um — e o coach preenche o que faltar quando você travar.',
    step1: 'Entenda o que você quer', step2: 'Estabeleça metas alcançáveis', step3: 'Encontre como medir seu progresso',
    step4: 'Inclua na sua agenda diária', step5: 'Defina um tempo para a meta', step6: 'Repita isso todos os dias',
    coachKicker: 'O diferencial', coachTitle: 'Um coach que pergunta antes de supor',
    coachBody: 'Conte sua situação e ele sugere hábitos concretos e realistas — nunca conselhos genéricos. Monta planos graduais sob medida e explica como usá-los.',
    coach1: 'Hábitos sugeridos de acordo com a sua rotina real',
    coach2: 'Planos de redução graduais feitos para você',
    coach3: 'Sempre a um toque, quando precisar de um empurrão',
    coachPrivacy: 'Nada é guardado. Cada conversa começa do zero.',
    habitsKicker: 'Hábitos', habitsTitle: 'Diários, semanais, mensais — e os que você quer largar',
    habitsSub: 'Simples ou com contador, emoji, etiquetas, lembretes flexíveis, pausa nas férias e arquivo sem perder o histórico.',
    freq1: 'Diários', freq1b: 'Marque todo dia, ou conte: 8 copos de água, toque para somar um.',
    freq2: 'Semanais', freq2b: 'Uma meta por semana. Academia 3×/semana vai de 1/3 → 2/3 → 3/3 no seu ritmo.',
    freq3: 'Mensais', freq3b: 'Para o que acontece de vez em quando, como revisar as finanças do mês.',
    reduceTag: 'Hábitos de redução', reduceTitle: 'Largue o ruim, não só some o bom',
    reduceBody: 'Registre cada cigarro, cada drink. O card mostra quantos restam nesta semana antes do limite — e um plano de 3 fases baixa a meta até onde você quer chegar.',
    reduceStat: '12 de 50 · faltam 38', reduceStatSub: 'Esta semana · fase 1 de 3',
    sleepKicker: 'Sono', sleepTitle: 'Um módulo inteiro para descansar melhor',
    sleepBody: 'Registre suas noites, revise sua higiene do sono e desacelere com uma sessão guiada cuja paleta muda com a hora: pôr do sol, noite, madrugada.',
    sleep1: 'Registro por noite', sleep1b: 'Horas, qualidade, despertares e notas',
    sleep2: '15 hábitos de higiene', sleep2b: 'Baseados em evidência, por momento',
    sleep3: 'Sessão guiada', sleep3b: 'Uma tela calma para desacelerar',
    statsKicker: 'Progresso', statsTitle: 'Sequências que motivam, nunca culpam',
    statsBody: 'Anéis separados para diários e de período, dias perfeitos, mapa de calor e alertas gentis quando a sequência está em risco.',
    stats1: 'Sequência atual e melhor sequência de cada hábito',
    stats2: '10 XP por hábito e 10 níveis, de Novato a Supremo',
    stats3: 'Estatísticas semanais, mensais e calendário completo',
    ringsTitle: 'Dois anéis, dois ritmos', ringsBody: 'Um para os hábitos de hoje e outro para os semanais e mensais — uma semana fraca não apaga um bom dia.',
    chartTitle: 'Sua semana num relance', chartBody: 'Cumprimento por dia: 7D / 31D / 26S / 12M.',
    xpValue: 'Nível 6', xpBody: 'Explorador · 680 XP. Dez níveis, um hábito por vez.',
    galleryTitle: 'Veja por dentro', gallerySub: 'Telas reais do app.',
    gal1: 'Início', gal2: 'Stats', gal3: 'Sono',
    privKicker: 'Privacidade', privTitle: 'Seu progresso é seu',
    privBody: 'O app é offline-first: tudo vive no seu dispositivo. Sincronize só se quiser.',
    priv1: 'Sem conta por padrão', priv1b: 'Use o app inteiro sem se cadastrar em lugar nenhum.',
    priv2: 'Sync opcional', priv2b: 'Entre com Google ou Apple para backup e trocar de celular.',
    priv3: 'Backups criptografados', priv3b: 'Backups locais com a chave no chaveiro do sistema. Apague tudo quando quiser.',
    finalTitle: 'Melhores hábitos, todo dia.', finalSub: 'Some o bom, largue o ruim. Tudo em um app calmo.',
    finalNote: 'iOS 16+ e Android 10+ · Comece grátis',
    footerRights: '© 2026 Habits Pioneer', footerLang: 'Idioma',
    metaTitle: 'Habits Pioneer — Melhores hábitos, todo dia, com um coach de IA',
    metaDescription: 'Construa bons hábitos, largue os ruins e descanse melhor. Um coach de IA que se adapta à sua vida, hábitos de redução, um módulo de sono, tarefas e um diário — tudo em um app calmo e offline-first para iOS e Android.',
    ogImageAlt: 'O app Habits Pioneer em um celular, mostrando a tela inicial com hábitos e progresso.',
  },
};

// path prefix per locale ('' for the default es at root)
export const localePrefix: Record<Locale, string> = { es: '', en: '/en', pt: '/pt' };
