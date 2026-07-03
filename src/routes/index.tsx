import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Shield, GraduationCap, ClipboardCheck, Monitor, Phone, Mail, MapPin, ArrowRight, Menu, X } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import protectionImg from "@/assets/protection.jpg";
import trainingImg from "@/assets/training.jpg";
import consultingImg from "@/assets/consulting.jpg";
import monitoringImg from "@/assets/monitoring.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "M8 International Protection – Sicherheit auf höchstem Niveau · Wien" },
      {
        name: "description",
        content:
          "M8 International Protection – Personenschutz, Objektschutz, Sicherheitstraining, Beratung und VIP-Objektüberwachung. Wien. National & international.",
      },
      { property: "og:title", content: "M8 International Protection" },
      {
        property: "og:description",
        content:
          "Diskrete Sicherheitsdienstleistungen aus Wien: Protection, Training, Consulting, VIP-Objektüberwachung.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://m8vienna.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://m8vienna.lovable.app/" }],
  }),
});

type Lang = "de" | "en";

const t = {
  de: {
    nav: { services: "Leistungen", about: "Über uns", contact: "Kontakt", cta: "Anfrage" },
    hero: {
      eyebrow: "Sicherheitsdienstleistungen · Wien",
      title: "Sicherheit auf höchstem Niveau.",
      lead:
        "Wir punkten mit Zuverlässigkeit, Kompetenz und Diskretion – mit maßgeschneiderten Sicherheitskonzepten für nationale und internationale Kunden.",
      primary: "Anfrage senden",
      secondary: "Leistungen ansehen",
    },
    services: {
      eyebrow: "Kerngeschäft",
      title: "Vier Disziplinen. Ein Anspruch.",
      lead:
        "Unser Kerngeschäft gliedert sich in vier eng verwobene Bereiche – jeder für sich auf höchstem professionellem Niveau.",
      more: "Mehr erfahren",
      items: [
        {
          id: "01",
          title: "Protection",
          text:
            "Personen-, Objekt- und Veranstaltungsschutz. Diskret, exklusiv und unaufdringlich – Ihre Sicherheit ist unser Auftrag.",
          points: ["Personenschutz", "Objektschutz", "Veranstaltungsschutz", "Begleitung national & international"],
        },
        {
          id: "02",
          title: "Training",
          text:
            "Praxisorientierte Ausbildung nach internationalen Top-Standards. Lehrgänge nach ISO 17024, Einzelkurse und individuelle Firmenschulungen.",
          points: ["Aufzugswart", "Bedrohungsmanagement", "Deeskalation", "Firmenspezifische Trainings"],
        },
        {
          id: "03",
          title: "Consulting",
          text:
            "Analyse, Konzeption und Umsetzung individueller Sicherheitsarchitekturen – mit internationalen Partnern.",
          points: ["Abhörschutz", "Betriebsmittel", "Qualitätsmanagement", "Risiko- & Bedrohungsanalyse"],
        },
        {
          id: "04",
          title: "VIP-Objektüberwachung",
          text:
            "Rund-um-die-Uhr Fernüberwachung Ihres Objekts aus unserer Leitstelle. Live-Monitoring über zertifizierte Kamerasysteme mit sofortiger Reaktion im Ereignisfall.",
          points: ["24/7 Live-Monitoring", "Zentrale Leitstelle", "Sofortige Alarmverifikation", "Koordination mit Einsatzkräften"],
        },
      ],
    },
    about: {
      eyebrow: "Über uns",
      title: "Ein diskreter Partner für sensible Aufgaben.",
      body:
        "M8 International Protection ist ein in Wien ansässiges Unternehmen mit langjähriger Erfahrung im Bereich Executive Protection und Sicherheitsdienstleistungen. Wir arbeiten für Persönlichkeiten und Unternehmen aus Wirtschaft, Politik, Kultur und Diplomatie – national und international. Unser Anspruch: Verlässliche Ergebnisse ohne Show.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Vertraulich. Persönlich. Schnell.",
      body:
        "Jede Anfrage wird ausschließlich von der Geschäftsleitung entgegen­genommen und vertraulich behandelt. Wir antworten in der Regel innerhalb weniger Stunden.",
      phone: "Telefon · 24/7",
      email: "E-Mail",
      address: "Hauptsitz",
      city: "Wien, Österreich",
      note: "Termine ausschließlich nach vorheriger Vereinbarung.",
      cta: "Anfrage senden",
    },
    stats: [
      ["18+", "Jahre Erfahrung"],
      ["40+", "Einsatzländer"],
      ["100%", "Verschwiegenheit"],
      ["24/7", "Einsatzbereitschaft"],
    ] as [string, string][],
    footer: "Alle Rechte vorbehalten",
  },
  en: {
    nav: { services: "Services", about: "About", contact: "Contact", cta: "Enquire" },
    hero: {
      eyebrow: "Security services · Vienna",
      title: "Security at the highest level.",
      lead:
        "Reliability, expertise and discretion – tailored security concepts for national and international clients.",
      primary: "Send enquiry",
      secondary: "See services",
    },
    services: {
      eyebrow: "Core business",
      title: "Four disciplines. One standard.",
      lead:
        "Our work is divided into four closely interwoven areas – each executed at the highest professional level.",
      more: "Learn more",
      items: [
        {
          id: "01",
          title: "Protection",
          text:
            "Close protection, property and event security. Discreet, exclusive and unobtrusive – your safety is our mission.",
          points: ["Close protection", "Property security", "Event security", "National & international escort"],
        },
        {
          id: "02",
          title: "Training",
          text:
            "Practice-oriented training to international top standards. ISO 17024 certifications, single courses and tailored corporate programs.",
          points: ["Lift attendant", "Threat management", "De-escalation", "Corporate programs"],
        },
        {
          id: "03",
          title: "Consulting",
          text:
            "Analysis, planning and implementation of individual security architectures – with international partners.",
          points: ["Eavesdropping protection", "Equipment advisory", "Quality management", "Risk & threat analysis"],
        },
        {
          id: "04",
          title: "VIP Remote Monitoring",
          text:
            "Round-the-clock remote surveillance of your property from our control room. Live monitoring via certified camera systems with immediate response.",
          points: ["24/7 live monitoring", "Central control room", "Instant alarm verification", "Coordination with authorities"],
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A discreet partner for sensitive assignments.",
      body:
        "M8 International Protection is a Vienna-based company with many years of experience in executive protection and security services. We work for individuals and organizations from business, politics, culture and diplomacy – nationally and internationally. Our standard: reliable results without the show.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Confidential. Personal. Prompt.",
      body:
        "Every enquiry is handled exclusively by the management and treated with the utmost confidentiality. We usually respond within a few hours.",
      phone: "Phone · 24/7",
      email: "Email",
      address: "Headquarters",
      city: "Vienna, Austria",
      note: "Meetings by prior appointment only.",
      cta: "Send enquiry",
    },
    stats: [
      ["18+", "Years of experience"],
      ["40+", "Countries of operation"],
      ["100%", "Confidentiality"],
      ["24/7", "Availability"],
    ] as [string, string][],
    footer: "All rights reserved",
  },
};

function AnimatedCounter({ value, suffix = "", duration = 1800 }: { value: number; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    started.current = false;
    setDisplay(0);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function StatValue({ label }: { label: string }) {
  const m = label.match(/^(\d+)(.*)$/);
  if (!m) return <span>{label}</span>;
  return <AnimatedCounter value={parseInt(m[1], 10)} suffix={m[2]} />;
}

function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const [menuOpen, setMenuOpen] = useState(false);
  const c = t[lang];
  const serviceImages = [protectionImg, trainingImg, consultingImg, monitoringImg];
  const serviceIcons = [Shield, GraduationCap, ClipboardCheck, Monitor];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 min-w-0" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="M8 International Protection" className="h-8 w-8 shrink-0" width={32} height={32} />
            <div className="leading-tight min-w-0">
              <div className="font-medium text-sm tracking-tight">M8 International Protection</div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground truncate">
                {lang === "de" ? "Wien · Seit 2007" : "Vienna · Since 2007"}
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">{c.nav.services}</a>
            <a href="#about" className="hover:text-foreground transition-colors">{c.nav.about}</a>
            <a href="#kontakt" className="hover:text-foreground transition-colors">{c.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium">
              <button
                type="button"
                onClick={() => setLang("de")}
                className={`px-2 py-1 uppercase tracking-wider transition-colors ${lang === "de" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-pressed={lang === "de"}
              >
                DE
              </button>
              <span className="text-muted-foreground/40">/</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-1 uppercase tracking-wider transition-colors ${lang === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
            <a
              href="#kontakt"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-[12px] font-medium hover:opacity-90 transition-opacity"
            >
              {c.nav.cta}
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 text-foreground shrink-0"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="px-5 py-5 flex flex-col gap-4 text-sm">
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-foreground">{c.nav.services}</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-foreground">{c.nav.about}</a>
              <a href="#kontakt" onClick={() => setMenuOpen(false)} className="text-foreground">{c.nav.contact}</a>
              <div className="flex items-center gap-1 pt-2 text-[11px] font-medium">
                <button
                  type="button"
                  onClick={() => setLang("de")}
                  className={`px-2 py-1 uppercase tracking-wider ${lang === "de" ? "text-foreground" : "text-muted-foreground"}`}
                >
                  DE
                </button>
                <span className="text-muted-foreground/40">/</span>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-2 py-1 uppercase tracking-wider ${lang === "en" ? "text-foreground" : "text-muted-foreground"}`}
                >
                  EN
                </button>
              </div>
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-3 text-[12px] font-medium"
              >
                {c.nav.cta}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative mt-16 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">{c.hero.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              {c.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {c.hero.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-[13px] font-medium hover:opacity-90 transition-opacity"
              >
                {c.hero.primary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-[13px] font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {c.hero.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {c.stats.map(([n, l]) => (
            <div key={l} className="flex flex-col">
              <span className="font-display text-3xl sm:text-4xl text-foreground tracking-tight">
                <StatValue label={n} />
              </span>
              <span className="mt-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow">{c.services.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                {c.services.title}
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-[15px] leading-relaxed">
              {c.services.lead}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {c.services.items.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <article
                  key={s.id}
                  className="group border border-border bg-card overflow-hidden flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={serviceImages[i]}
                      alt={s.title}
                      loading="lazy"
                      width={1200}
                      height={960}
                      className="w-full aspect-[16/10] object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                      <span className="font-mono text-[11px] tracking-wider">{s.id}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl mb-3 tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-[14px] leading-relaxed mb-6">
                      {s.text}
                    </p>
                    <ul className="mt-auto grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[13px] text-foreground/80">
                          <span className="mt-1.5 h-1 w-1 bg-foreground/60 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-28 border-t border-border bg-card/40">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="eyebrow">{c.about.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            {c.about.title}
          </h2>
          <p className="mt-8 text-muted-foreground text-[15px] sm:text-base leading-relaxed max-w-2xl">
            {c.about.body}
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow">{c.contact.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              {c.contact.title}
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md text-[15px] leading-relaxed">
              {c.contact.body}
            </p>
            <a
              href="mailto:office@m8-protection.at"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              {c.contact.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-6">
            <div className="border-t border-border pt-6 flex items-start gap-5">
              <Phone className="h-5 w-5 text-muted-foreground mt-1" strokeWidth={1.5} />
              <div>
                <div className="eyebrow mb-2">{c.contact.phone}</div>
                <a href="tel:+4319998888" className="font-display text-xl text-foreground hover:text-primary transition-colors">
                  +43 1 999 88 88
                </a>
              </div>
            </div>
            <div className="border-t border-border pt-6 flex items-start gap-5">
              <Mail className="h-5 w-5 text-muted-foreground mt-1" strokeWidth={1.5} />
              <div>
                <div className="eyebrow mb-2">{c.contact.email}</div>
                <a href="mailto:office@m8-protection.at" className="font-display text-xl text-foreground hover:text-primary transition-colors">
                  office@m8-protection.at
                </a>
              </div>
            </div>
            <div className="border-t border-border pt-6 flex items-start gap-5">
              <MapPin className="h-5 w-5 text-muted-foreground mt-1" strokeWidth={1.5} />
              <div>
                <div className="eyebrow mb-2">{c.contact.address}</div>
                <p className="font-display text-xl text-foreground">{c.contact.city}</p>
                <p className="text-[13px] text-muted-foreground mt-2">{c.contact.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="M8 International Protection" className="h-6 w-6 opacity-80" width={24} height={24} />
            <div className="text-[12px] text-muted-foreground">
              M8 International Protection · {lang === "de" ? "Wien" : "Vienna"} · Est. 2007
            </div>
          </div>
          <div className="text-[11px] tracking-wider uppercase text-muted-foreground">
            © {new Date().getFullYear()} — {c.footer}
          </div>
        </div>
      </footer>
    </div>
  );
}
