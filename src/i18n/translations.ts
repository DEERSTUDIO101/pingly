export type Lang = "de" | "en";

type Stat = {
  num: string;
  label: string;
};

type FooterLink = {
  label: string;
  href: string;
};

type Translation = {
  nav: {
    features: string;
    security: string;
    how: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    sub: string;
    btn1: string;
    btn2: string;
  };
  badges: {
    e2e: string;
    open: string;
    ads: string;
  };
  stats: Record<string, Stat>;
  features: {
    label: string;
    title: string;
    sub: string;
    cards: Array<{
      title: string;
      desc: string;
    }>;
  };
  how: {
    label: string;
    title: string;
    steps: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  security: {
    label: string;
    title: string;
    sub: string;
    pills: string[];
    items: Array<{
      label: string;
      ok: boolean;
    }>;
  };
  cta: {
    label: string;
    title1: string;
    title2: string;
    sub: string;
    android: string;
    github: string;
  };
  phone: {
    status: string;
    chatName: string;
    online: string;
    messages: Array<{
      text: string;
      own?: boolean;
    }>;
    composer: string;
  };
  footer: {
    tagline: string;
    product: string;
    company: string;
    legal: string;
    links: {
      product: FooterLink[];
      company: FooterLink[];
      legal: FooterLink[];
    };
    copy: string;
    tagline2: string;
  };
};

export const translations: Record<Lang, Translation> = {
  de: {
    nav: {
      features: "Features",
      security: "Sicherheit",
      how: "So funktioniert’s",
      cta: "App holen",
    },
    hero: {
      eyebrow: "Private Messaging",
      title1: "Schreib frei.",
      title2: "Bleib privat.",
      sub: "Pingly ist ein schneller Messenger für Menschen, die Nähe wollen — ohne Tracking, Werbung oder Datenhunger im Hintergrund.",
      btn1: "Jetzt starten",
      btn2: "Features ansehen",
    },
    badges: {
      e2e: "Ende-zu-Ende verschlüsselt",
      open: "Open Source geplant",
      ads: "Keine Werbung",
    },
    stats: {
      messages: { num: "0", label: "Tracker" },
      setup: { num: "2 min", label: "Setup" },
      privacy: { num: "100%", label: "Privat" },
    },
    features: {
      label: "Was drinsteckt",
      title: "Alles Wichtige.\nNichts Lautes.",
      sub: "Pingly konzentriert sich auf Gespräche: schlicht, schnell und angenehm unaufgeregt.",
      cards: [
        { title: "Private Chats", desc: "Nachrichten bleiben zwischen dir und deinem Gegenüber — verschlüsselt und ohne Werbeprofile." },
        { title: "Keine Ablenkung", desc: "Keine Reels, keine algorithmischen Feeds, keine roten Alarmglocken für jede Kleinigkeit." },
        { title: "Schnelle Anrufe", desc: "Starte Sprach- und Videoanrufe direkt aus dem Chat, ohne dich durch Menüs zu wühlen." },
        { title: "Gruppen mit Ruhe", desc: "Organisiere Gruppen, mute Gespräche und behalte trotzdem den Überblick." },
        { title: "Verschwindende Nachrichten", desc: "Lege fest, wann Nachrichten automatisch verschwinden — für Gespräche, die nicht ewig kleben müssen." },
        { title: "Sichere Geräte", desc: "Neue Logins und Geräteschlüssel bleiben sichtbar, damit du die Kontrolle behältst." },
      ],
    },
    how: {
      label: "Ablauf",
      title: "In vier Schritten verbunden.",
      steps: [
        { num: "01", title: "Profil erstellen", desc: "Wähle einen Namen, bestätige dein Gerät und leg direkt los." },
        { num: "02", title: "Kontakt finden", desc: "Verbinde dich über Nutzername, QR-Code oder Einladungslink." },
        { num: "03", title: "Schlüssel prüfen", desc: "Optionaler Sicherheitscheck für Gespräche, die wirklich privat bleiben sollen." },
        { num: "04", title: "Loschatten", desc: "Schreib, telefoniere und teile Momente — ohne Datenballast." },
      ],
    },
    security: {
      label: "Sicherheit",
      title: "Privatsphäre ist kein\nPremium-Feature.",
      sub: "Pingly ist so gedacht, dass sensible Daten gar nicht erst unnötig entstehen.",
      pills: ["E2E-Verschlüsselung", "Minimale Metadaten", "Transparente Logins"],
      items: [
        { label: "message_body_server_readable", ok: false },
        { label: "device_key_verified", ok: true },
        { label: "ad_profile_created", ok: false },
        { label: "encrypted_backup_ready", ok: true },
      ],
    },
    cta: {
      label: "Download",
      title1: "Bereit für",
      title2: "ruhigere Chats?",
      sub: "Starte mit Pingly und bring deine Gespräche wieder dahin, wo sie hingehören: zu dir.",
      android: "Android",
      github: "GitHub ansehen",
    },
    phone: {
      status: "verschlüsselt",
      chatName: "Mina",
      online: "gerade online",
      messages: [
        { text: "Bist du später da?" },
        { text: "Ja — schick mir einfach den Ort.", own: true },
        { text: "Perfekt. Keine Gruppe nötig 😌" },
      ],
      composer: "Nachricht schreiben…",
    },
    footer: {
      tagline: "Ein Messenger-Konzept für private, ruhige und schnelle Kommunikation.",
      product: "Produkt",
      company: "Company",
      legal: "Legal",
      links: {
        product: [
          { label: "Features", href: "/#features" },
          { label: "Sicherheit", href: "/#security" },
          { label: "Download", href: "/#download" },
        ],
        company: [
          { label: "Über uns", href: "/legal.html#developer" },
          { label: "Blog", href: "#" },
          { label: "Kontakt", href: "/legal.html#imprint" },
        ],
        legal: [
          { label: "Datenschutz", href: "/legal.html#privacy" },
          { label: "Impressum", href: "/legal.html#imprint" },
          { label: "AGB", href: "/legal.html#terms" },
        ],
      },
      copy: "2026 Pingly. Alle Rechte vorbehalten.",
      tagline2: "privacy first · people first",
    },
  },
  en: {
    nav: {
      features: "Features",
      security: "Security",
      how: "How it works",
      cta: "Get app",
    },
    hero: {
      eyebrow: "Private Messaging",
      title1: "Chat freely.",
      title2: "Stay private.",
      sub: "Pingly is a fast messenger for people who want closeness — without tracking, ads, or hungry data collection in the background.",
      btn1: "Get started",
      btn2: "Explore features",
    },
    badges: {
      e2e: "End-to-end encrypted",
      open: "Open source planned",
      ads: "No ads",
    },
    stats: {
      messages: { num: "0", label: "Trackers" },
      setup: { num: "2 min", label: "Setup" },
      privacy: { num: "100%", label: "Private" },
    },
    features: {
      label: "What’s inside",
      title: "Everything useful.\nNothing noisy.",
      sub: "Pingly focuses on conversation: simple, fast, and pleasantly calm.",
      cards: [
        { title: "Private Chats", desc: "Messages stay between you and the person you’re talking to — encrypted and free from ad profiles." },
        { title: "No Distractions", desc: "No reels, no algorithmic feeds, no red alarm bells for every tiny interaction." },
        { title: "Fast Calls", desc: "Start voice and video calls straight from the chat without digging through menus." },
        { title: "Calm Groups", desc: "Organize groups, mute conversations, and keep the overview without chaos." },
        { title: "Disappearing Messages", desc: "Decide when messages vanish automatically for conversations that don’t need to stick forever." },
        { title: "Trusted Devices", desc: "New logins and device keys stay visible so you remain in control." },
      ],
    },
    how: {
      label: "Flow",
      title: "Connected in four steps.",
      steps: [
        { num: "01", title: "Create profile", desc: "Pick a name, verify your device, and start right away." },
        { num: "02", title: "Find contact", desc: "Connect with a username, QR code, or invite link." },
        { num: "03", title: "Check keys", desc: "Optional safety check for conversations that need to stay truly private." },
        { num: "04", title: "Start chatting", desc: "Message, call, and share moments — without data baggage." },
      ],
    },
    security: {
      label: "Security",
      title: "Privacy is not a\npremium feature.",
      sub: "Pingly is designed so sensitive data does not need to be created in the first place.",
      pills: ["E2E encryption", "Minimal metadata", "Transparent logins"],
      items: [
        { label: "message_body_server_readable", ok: false },
        { label: "device_key_verified", ok: true },
        { label: "ad_profile_created", ok: false },
        { label: "encrypted_backup_ready", ok: true },
      ],
    },
    cta: {
      label: "Download",
      title1: "Ready for",
      title2: "calmer chats?",
      sub: "Start with Pingly and bring your conversations back where they belong: to you.",
      android: "Android",
      github: "View GitHub",
    },
    phone: {
      status: "encrypted",
      chatName: "Mina",
      online: "online now",
      messages: [
        { text: "Are you around later?" },
        { text: "Yes — just send me the place.", own: true },
        { text: "Perfect. No group needed 😌" },
      ],
      composer: "Write a message…",
    },
    footer: {
      tagline: "A messenger concept for private, calm, and fast communication.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      links: {
        product: [
          { label: "Features", href: "/#features" },
          { label: "Security", href: "/#security" },
          { label: "Download", href: "/#download" },
        ],
        company: [
          { label: "About", href: "/legal.html#developer" },
          { label: "Blog", href: "#" },
          { label: "Contact", href: "/legal.html#imprint" },
        ],
        legal: [
          { label: "Privacy", href: "/legal.html#privacy" },
          { label: "Imprint", href: "/legal.html#imprint" },
          { label: "Terms", href: "/legal.html#terms" },
        ],
      },
      copy: "2026 Pingly. All rights reserved.",
      tagline2: "privacy first · people first",
    },
  },
};
