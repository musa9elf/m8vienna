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
                    "Diskreter Nahschutz, Begleitschutz, Residenz- und Objektschutz.",
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
      <header className="fixed top-0 inset-x-0 z-50 bg-background border-b border-foreground">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <a href="#top" className="flex items-center gap-3 min-w-0" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="M8 International Protection Logo" className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 invert" width={40} height={40} />
            <div className="leading-tight min-w-0">
              <div className="font-display text-lg sm:text-xl tracking-tight">M8</div>
              <div className="text-[8px] sm:text-[9px] tracking-[0.28em] sm:tracking-[0.34em] uppercase text-muted-foreground truncate">International Protection</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.24em] uppercase">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Leistungen</a>
            <a href="#philosophie" className="text-muted-foreground hover:text-foreground transition-colors">Philosophie</a>
            <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">Kontakt</a>
          </nav>
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center gap-2 bg-foreground px-6 py-3 text-[11px] tracking-[0.28em] uppercase text-primary-foreground hover:bg-muted-foreground transition-colors shrink-0"
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
          <div className="md:hidden border-t border-foreground bg-background">
            <nav className="px-5 py-6 flex flex-col gap-5 text-xs tracking-[0.24em] uppercase">
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-muted-foreground transition-colors">Leistungen</a>
              <a href="#philosophie" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-muted-foreground transition-colors">Philosophie</a>
              <a href="#kontakt" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-muted-foreground transition-colors">Kontakt</a>
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-foreground px-5 py-3 text-[11px] tracking-[0.28em] uppercase text-primary-foreground"
              >
                Anfrage
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen mt-16 sm:mt-20 grid lg:grid-cols-2 border-b border-foreground">
        <div className="relative flex flex-col justify-end px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <span className="h-px w-10 bg-foreground" />
              <span className="eyebrow">Seit 2007 · Wien · Weltweit</span>
            </div>
            <h1 className="display-massive text-foreground">
              Sicherheit
            </h1>
            <p className="mt-8 sm:mt-12 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
              M8 International Protection ist die diskrete Adresse für Personen­schutz,
              Sicherheits­training und Sicherheits­beratung. Für nationale und internationale
              Klienten, die kompromisslose Qualität, Verschwiegenheit und Verlässlichkeit erwarten.
            </p>
            <div className="mt-10 sm:mt-14 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 bg-foreground px-7 sm:px-9 py-4 text-[11px] sm:text-xs tracking-[0.3em] uppercase text-primary-foreground hover:bg-muted-foreground transition-colors"
              >
                Vertrauliche Anfrage
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 border border-foreground px-7 sm:px-9 py-4 text-[11px] sm:text-xs tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Leistungen
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[50vh] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-foreground">
          <img
            src={heroImg}
            alt="Personenschutzoffizier vor einem Wiener Palais bei Nacht"
            className="w-full h-full object-cover object-center grayscale"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 z-10 hidden lg:block">
            <div className="border border-foreground bg-background/90 p-6 sm:p-8">
              <p className="font-display text-2xl sm:text-3xl leading-tight">
                Auf höchstem Niveau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / STATS */}
      <section className="border-b border-foreground">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            ["18+", "Jahre Erfahrung"],
            ["40+", "Einsatzländer"],
            ["100%", "Verschwiegenheit"],
            ["24/7", "Einsatzbereitschaft"],
          ].map(([n, l], i) => (
            <div
              key={l}
              className={`flex flex-col justify-between p-6 sm:p-10 min-h-[180px] ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground" : ""}`}
            >
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground">
                <StatValue label={n} />
              </span>
              <span className="mt-4 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section id="philosophie" className="py-24 sm:py-32 border-b border-foreground">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">— Philosophie</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.9]">
              Präsenz, die man spürt. Sichtbar nur, wenn nötig.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              Echte Sicherheit ist unauffällig. Sie beginnt lange vor dem ersten Kontakt und bleibt
              auch dann bestehen, wenn niemand hinsieht. Unsere Arbeit lebt von akribischer
              Vorbereitung, klarer Kommunikation und der stillen Kompetenz erfahrener Spezialisten.
            </p>
            <p>
              Wir arbeiten für Persönlichkeiten, Familien, Unternehmen und Institutionen, die
              Diskretion nicht als Zusatz, sondern als Grundvoraussetzung verstehen. Jeder Auftrag
              wird individuell geplant – kein Fall gleicht dem anderen.
            </p>
            <div className="pt-8 border-t border-foreground grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="eyebrow mb-2">Werte</div>
                <p className="text-foreground font-display text-lg">Verlässlichkeit · Empathie · Kompetenz · Flexibilität</p>
              </div>
              <div>
                <div className="eyebrow mb-2">Standard</div>
                <p className="text-foreground font-display text-lg">Höchste Vertraulichkeit auf jeder Ebene.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 sm:py-32 border-b border-foreground">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 sm:mb-24">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">— Kompetenzfelder</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[0.9]">
                Drei Disziplinen.<br />Ein Anspruch.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="text-muted-foreground max-w-sm">
                Unser Kerngeschäft gliedert sich in drei eng verwobene Bereiche – jeder für sich auf
                höchstem professionellem Niveau.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground border border-foreground">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.id}
                  className="bg-background group"
                >
                  <div className="relative overflow-hidden aspect-[4/3] border-b border-foreground">
                    <img
                      src={s.image}
                      alt={`${s.title} – M8 International Protection Wien`}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase bg-background text-foreground px-3 py-1.5 border border-foreground">
                      {s.kicker}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-muted-foreground">{s.id} /</span>
                      <Icon className="h-5 w-5 text-foreground" strokeWidth={1.25} />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl mb-4">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{s.text}</p>
                    <ul className="space-y-3 border-t border-foreground pt-6">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-baseline gap-4 text-sm">
                          <span className="text-foreground text-xs">◆</span>
                          <span className="text-foreground">{p}</span>
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

      {/* QUOTE */}
      <section className="py-24 sm:py-40 border-b border-foreground relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <span className="font-display text-[16rem] sm:text-[24rem] leading-none text-foreground">M8</span>
        </div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow mb-8 sm:mb-12">— Selbstverständnis</p>
          <blockquote className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[0.9] text-foreground">
            „Der beste Einsatz ist jener, den der Klient nie bemerkt –
            weil alles nach Plan verläuft.“
          </blockquote>
          <div className="mt-10 sm:mt-14 text-xs tracking-[0.32em] uppercase text-muted-foreground">
            M8 International Protection · Wien
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-24 sm:py-32 border-b border-foreground">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">— Kontakt</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[0.9]">
              Vertraulich.<br />
              Persönlich.<br />
              Sofort.
            </h2>
            <p className="mt-8 sm:mt-12 text-muted-foreground max-w-md">
              Jede Anfrage wird ausschließlich von der Geschäftsleitung entgegen­genommen und
              vertraulich behandelt. Wir antworten in der Regel innerhalb weniger Stunden.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <div className="border-t border-foreground pt-8 flex items-start gap-6">
              <Phone className="h-5 w-5 text-foreground mt-1 shrink-0" strokeWidth={1.25} />
              <div>
                <div className="eyebrow mb-2">Telefon · 24/7</div>
                <a href="tel:+4319998888" className="font-display text-2xl sm:text-3xl text-foreground hover:text-muted-foreground transition-colors">
                  +43 1 999 88 88
                </a>
              </div>
            </div>
            <div className="border-t border-foreground pt-8 flex items-start gap-6">
              <Mail className="h-5 w-5 text-foreground mt-1 shrink-0" strokeWidth={1.25} />
              <div>
                <div className="eyebrow mb-2">E-Mail</div>
                <a href="mailto:office@m8-protection.at" className="font-display text-2xl sm:text-3xl text-foreground hover:text-muted-foreground transition-colors">
                  office@m8-protection.at
                </a>
              </div>
            </div>
            <div className="border-t border-foreground pt-8 flex items-start gap-6">
              <MapPin className="h-5 w-5 text-foreground mt-1 shrink-0" strokeWidth={1.25} />
              <div>
                <div className="eyebrow mb-2">Hauptsitz</div>
                <p className="font-display text-2xl sm:text-3xl text-foreground">
                  Wien, Österreich
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Termine ausschließlich nach vorheriger Vereinbarung.
                </p>
              </div>
            </div>

            <a
              href="mailto:office@m8-protection.at"
              className="mt-4 inline-flex items-center gap-3 bg-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase text-primary-foreground hover:bg-muted-foreground transition-colors"
            >
              Anfrage senden
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 sm:py-16">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="M8 International Protection Logo" className="h-7 w-7 opacity-90 invert" width={28} height={28} />
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
