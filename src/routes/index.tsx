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

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-transparent border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="M8 International Protection Logo" className="h-9 w-9" width={36} height={36} />
            <div className="leading-tight">
              <div className="font-display text-xl text-foreground">M8</div>
              <div className="text-[9px] tracking-[0.34em] uppercase text-muted-foreground">International Protection</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.24em] uppercase">
            <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">Leistungen</a>
            <a href="#philosophie" className="text-muted-foreground hover:text-gold transition-colors">Philosophie</a>
            <a href="#kontakt" className="text-muted-foreground hover:text-gold transition-colors">Kontakt</a>
          </nav>
          <a
            href="#kontakt"
            className="hidden sm:inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-[11px] tracking-[0.28em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            Anfrage
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end">
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Seit 2007 · Wien · Weltweit</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-foreground">
              Sicherheit
              <br />
              <span className="italic text-gold">auf höchstem</span>
              <br />
              Niveau.
            </h1>
            <p className="mt-10 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              M8 International Protection ist die diskrete Adresse für Personen­schutz,
              Sicherheits­training und Sicherheits­beratung. Für nationale und internationale
              Klienten, die kompromisslose Qualität, Verschwiegenheit und Verlässlichkeit erwarten.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs tracking-[0.3em] uppercase text-primary-foreground hover:bg-gold-soft transition-colors"
              >
                Vertrauliche Anfrage
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 border border-border px-8 py-4 text-xs tracking-[0.3em] uppercase text-foreground hover:border-gold hover:text-gold transition-colors"
              >
                Leistungen
              </a>
            </div>
          </div>
        </div>

        {/* corner marks */}
        <div className="absolute top-24 right-6 lg:right-10 z-10 hidden md:flex flex-col items-end gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">48.2082° N</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">16.3738° E</span>
          <span className="mt-2 h-8 w-px bg-gold/50" />
        </div>
      </section>

      {/* MARQUEE / STATS */}
      <section className="border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["18+", "Jahre Erfahrung"],
            ["40+", "Einsatzländer"],
            ["100%", "Verschwiegenheit"],
            ["24/7", "Einsatzbereitschaft"],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col">
              <span className="font-display text-4xl text-gold">{n}</span>
              <span className="mt-2 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section id="philosophie" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">— Philosophie</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">
              Präsenz, die man <span className="italic text-gold">spürt</span>. Sichtbar nur, wenn nötig.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-muted-foreground text-lg leading-relaxed">
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
            <div className="pt-6 border-t border-border grid grid-cols-2 gap-8">
              <div>
                <div className="eyebrow mb-2">Werte</div>
                <p className="text-foreground">Verlässlichkeit · Empathie · Kompetenz · Flexibilität</p>
              </div>
              <div>
                <div className="eyebrow mb-2">Standard</div>
                <p className="text-foreground">Höchste Vertraulichkeit auf jeder Ebene.</p>
              </div>
            </div>
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

          <div className="space-y-24">
            {services.map((s, i) => {
              const Icon = s.icon;
              const reverse = i % 2 === 1;
              return (
                <article
                  key={s.id}
                  className="grid lg:grid-cols-12 gap-10 items-center group"
                >
                  <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={s.image}
                        alt={`${s.title} – M8 International Protection Wien`}
                        loading="lazy"
                        width={1200}
                        height={1200}
                        className="w-full aspect-[5/4] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                      <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-gold bg-background/70 backdrop-blur px-3 py-1.5">
                        {s.kicker}
                      </div>
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:col-start-2" : "lg:col-start-8"}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-xs text-gold">{s.id} /</span>
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                    </div>
                    <h3 className="font-display text-4xl lg:text-5xl mb-6">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">{s.text}</p>
                    <ul className="space-y-3 border-t border-border pt-6">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-baseline gap-4 text-sm">
                          <span className="text-gold text-xs">◆</span>
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
