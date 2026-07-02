import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Shield, GraduationCap, ClipboardCheck, Phone, Mail, MapPin, ArrowUpRight, Menu, X } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import protectionImg from "@/assets/protection.jpg";
import trainingImg from "@/assets/training.jpg";
import consultingImg from "@/assets/consulting.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:url", content: "https://m8vienna.lovable.app/" },
      {
        property: "og:image",
        content: "https://m8vienna.lovable.app/og-hero.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://m8vienna.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "M8 International Protection",
          description:
            "Personenschutz, Sicherheitstraining und Sicherheitsberatung in Wien und weltweit.",
          url: "https://m8vienna.lovable.app/",
          telephone: "+43 1 999 88 88",
          email: "office@m8-protection.at",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Wien",
            addressCountry: "AT",
          },
          areaServed: "Worldwide",
          foundingDate: "2007",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Sicherheitsleistungen",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Personenschutz",
                  description:
                    "Diskreter Nahschutz, Begleitschutz, Residenz- und Objektschutz, VIP-Objektüberwachung.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sicherheitstraining",
                  description:
                    "Executive Protection Kurse, Selbstverteidigung, Fahrsicherheit und Krisentraining.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sicherheitsberatung",
                  description:
                    "Risiko- und Bedrohungsanalyse, Sicherheitskonzepte und Reisesicherheit.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
});

const services = [
  {
    id: "01",
    icon: Shield,
    title: "Personenschutz",
    kicker: "Protection",
    image: protectionImg,
    text: "Diskreter Schutz für Persönlichkeiten aus Wirtschaft, Politik, Kultur und Diplomatie. Vom einzelnen Begleitschutz bis zur permanenten Sicherheitseskorte – national und international.",
    points: ["Nahschutz & Begleitschutz", "Residenz- und Objektschutz", "Sichere Fahrdienste", "Reisebegleitung weltweit"],
  },
  {
    id: "02",
    icon: GraduationCap,
    title: "Sicherheitstraining",
    kicker: "Training",
    image: trainingImg,
    text: "Praxisnahe Ausbildung für Sicherheitspersonal, Executive Protection Teams und Firmenmitarbeiter. Von Grundlagen der Eigensicherung bis zu spezialisierten Einsatzszenarien.",
    points: ["Executive Protection Kurse", "Selbstverteidigung & Deeskalation", "Fahrsicherheits­training", "Krisen- und Szenariotraining"],
  },
  {
    id: "03",
    icon: ClipboardCheck,
    title: "Sicherheitsberatung",
    kicker: "Consulting",
    image: consultingImg,
    text: "Analyse, Konzeption und Umsetzung individueller Sicherheitsarchitekturen für Unternehmen, Familien und öffentliche Institutionen – vertraulich und maßgeschneidert.",
    points: ["Risiko- und Bedrohungsanalyse", "Sicherheits­konzepte", "Objekt- und Standortprüfung", "Reisesicherheit & Vorabklärung"],
  },
];

function AnimatedCounter({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
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
  switch (label) {
    case "18+":
      return <AnimatedCounter value={18} suffix="+" />;
    case "40+":
      return <AnimatedCounter value={40} suffix="+" />;
    case "100%":
      return <AnimatedCounter value={100} suffix="%" />;
    default:
      return <span>{label}</span>;
  }
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 min-w-0" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="M8 International Protection Logo" className="h-8 w-8 sm:h-9 sm:w-9 shrink-0" width={36} height={36} />
            <div className="leading-tight min-w-0">
              <div className="font-display text-lg sm:text-xl text-foreground">M8</div>
              <div className="text-[8px] sm:text-[9px] tracking-[0.28em] sm:tracking-[0.34em] uppercase text-muted-foreground truncate">International Protection</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.24em] uppercase">
            <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">Leistungen</a>
            <a href="#philosophie" className="text-muted-foreground hover:text-gold transition-colors">Philosophie</a>
            <a href="#kontakt" className="text-muted-foreground hover:text-gold transition-colors">Kontakt</a>
          </nav>
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-[11px] tracking-[0.28em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-colors shrink-0"
          >
            Anfrage
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 text-foreground shrink-0"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="px-5 py-6 flex flex-col gap-5 text-xs tracking-[0.24em] uppercase">
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-gold transition-colors">Leistungen</a>
              <a href="#philosophie" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-gold transition-colors">Philosophie</a>
              <a href="#kontakt" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-gold transition-colors">Kontakt</a>
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 border border-gold/60 px-5 py-3 text-[11px] tracking-[0.28em] uppercase text-gold"
              >
                Anfrage
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] mt-16 sm:mt-20 flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Personenschutzoffizier vor einem Wiener Palais bei Nacht"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 pt-16 sm:pt-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Seit 2007 · Wien · Weltweit</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-foreground">
              
              <br />
              <span className="italic text-gold">International</span>
              <br />
              Protection
            </h1>
            <p className="mt-8 sm:mt-10 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Mit M8 International Protection sind Sie auf der sicheren Seite!
            </p>
            <div className="mt-10 sm:mt-12 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 bg-gold px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[0.3em] uppercase text-primary-foreground hover:bg-gold-soft transition-colors"
              >
                Vertrauliche Anfrage
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 border border-border px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[0.3em] uppercase text-foreground hover:border-gold hover:text-gold transition-colors"
              >
                Leistungen
              </a>
            </div>
          </div>
        </div>
        

        {/* corner marks */}
        <div className="absolute top-8 right-6 lg:right-10 z-10 hidden md:flex flex-col items-end gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">48.2082° N</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">16.3738° E</span>
          <span className="mt-2 h-8 w-px bg-gold/50" />
        </div>
      </section>


      {/* QUOTE */}
      <section className="py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <span className="font-display text-[24rem] leading-none text-gold">M8</span>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="eyebrow mb-8">— Selbstverständnis</p>
          <blockquote className="font-display text-3xl md:text-5xl leading-tight text-foreground">
            „Der beste Einsatz ist jener, den der Klient nie bemerkt –
            <span className="italic text-gold"> weil alles nach Plan verläuft.</span>“
          </blockquote>
          <div className="mt-10 text-xs tracking-[0.32em] uppercase text-muted-foreground">
            M8 International Protection · Wien
          </div>
        </div>
      </section>

      {/* SERVICES */}
<section id="services" className="py-24 border-t border-border">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    
    <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
      <div>
        <p className="eyebrow">— Kompetenzfelder</p>
        <h2 className="mt-6 font-display text-4xl lg:text-6xl max-w-2xl leading-tight">
          Drei Disziplinen. Ein Anspruch.
        </h2>
      </div>

      <p className="text-muted-foreground max-w-sm">
        Unser Kerngeschäft gliedert sich in drei eng verwobene Bereiche – jeder für sich auf
        höchstem professionellem Niveau.
      </p>
    </div>

    {/* GRID START */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {services.map((s) => {
        const Icon = s.icon;

        return (
          <article
            key={s.id}
            className="group border border-border rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300 bg-background"
          >
            
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={s.image}
                alt={`${s.title} – M8 International Protection Wien`}
                loading="lazy"
                className="w-full aspect-[5/4] object-cover grayscale group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

              <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-gold bg-background/70 backdrop-blur px-3 py-1.5">
                {s.kicker}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-gold">{s.id} /</span>
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
              </div>

              <h3 className="font-display text-xl mb-3">
                {s.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
                {s.text}
              </p>

              <ul className="space-y-2 border-t border-border pt-4">
                {s.points.slice(0, 3).map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <span className="text-gold">◆</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

            </div>
          </article>
        );
      })}

    </div>
    {/* GRID END */}

  </div>
</section>


      {/* MARQUEE / STATS */}
      <section className="border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["18+", "Jahre Erfahrung"],
            ["40+", "Einsatzländer"],
            ["100%", "Verschwiegenheit"],
            ["24/7", "Einsatzbereitschaft"],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col">
              <span className="font-display text-4xl text-gold">
                <StatValue label={n} />
              </span>
              <span className="mt-2 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">{l}</span>
            </div>
          ))}
        </div>
      </section>

      

      {/* CONTACT */}
      <section id="kontakt" className="py-24 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">— Kontakt</p>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl leading-tight">
              Vertraulich.<br />
              <span className="italic text-gold">Persönlich.</span><br />
              Sofort.
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md">
              Jede Anfrage wird ausschließlich von der Geschäftsleitung entgegen­genommen und
              vertraulich behandelt. Wir antworten in der Regel innerhalb weniger Stunden.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <div className="border-t border-border pt-6 flex items-start gap-6">
              <Phone className="h-5 w-5 text-gold mt-1" strokeWidth={1.25} />
              <div>
                <div className="eyebrow mb-2">Telefon · 24/7</div>
                <a href="tel:+4319998888" className="font-display text-2xl text-foreground hover:text-gold transition-colors">
                  +43 1 999 88 88
                </a>
              </div>
            </div>
            <div className="border-t border-border pt-6 flex items-start gap-6">
              <Mail className="h-5 w-5 text-gold mt-1" strokeWidth={1.25} />
              <div>
                <div className="eyebrow mb-2">E-Mail</div>
                <a href="mailto:office@m8-protection.at" className="font-display text-2xl text-foreground hover:text-gold transition-colors">
                  office@m8-protection.at
                </a>
              </div>
            </div>
            <div className="border-t border-border pt-6 flex items-start gap-6">
              <MapPin className="h-5 w-5 text-gold mt-1" strokeWidth={1.25} />
              <div>
                <div className="eyebrow mb-2">Hauptsitz</div>
                <p className="font-display text-2xl text-foreground">
                  Wien, Österreich
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Termine ausschließlich nach vorheriger Vereinbarung.
                </p>
              </div>
            </div>

            <a
              href="mailto:office@m8-protection.at"
              className="mt-4 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs tracking-[0.3em] uppercase text-primary-foreground hover:bg-gold-soft transition-colors"
            >
              Anfrage senden
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="M8 International Protection Logo" className="h-7 w-7 opacity-80" width={28} height={28} />
            <div>
              <div className="font-display text-lg leading-none">M8 International Protection</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                Wien · Est. 2007
              </div>
            </div>
          </div>
          <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} M8 International Protection — Alle Rechte vorbehalten
          </div>
        </div>
      </footer>
    </div>
  );
}
