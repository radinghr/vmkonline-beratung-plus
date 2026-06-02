import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Shield, Users, FileSearch, Scale, HeartPulse, Building2, Briefcase, Home, ShieldCheck, Languages, Phone } from "lucide-react";
import beratungImg from "@/assets/beratung.jpg";
import heroConsultingImg from "@/assets/hero-consulting.jpg.asset.json";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VMK Berlin – Unabhängiger Versicherungsmakler in Berlin" },
      { name: "description", content: "Unabhängige Versicherungsberatung in Berlin. Wir vergleichen Versicherungen aller Gesellschaften und finden die Lösung, die zu Ihnen passt." },
      { property: "og:title", content: "VMK Berlin – Unabhängiger Versicherungsmakler in Berlin" },
      { property: "og:description", content: "Unabhängige Versicherungsberatung in Berlin. Persönlich, transparent und auf Augenhöhe." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home_,
});

const benefits = [
  { icon: Users, title: "Persönlicher Ansprechpartner", text: "Ein fester Ansprechpartner, der Sie kennt – über Jahre hinweg." },
  { icon: Scale, title: "Unabhängige Beratung", text: "Keine Bindung an eine Versicherungsgesellschaft. Nur Ihre Interessen zählen." },
  { icon: ShieldCheck, title: "Hilfe im Schadenfall", text: "Wir kümmern uns. Schnell, direkt und unkompliziert." },
  { icon: FileSearch, title: "Marktweiter Vergleich", text: "Wir vergleichen die Tarife vieler Gesellschaften für Sie." },
  { icon: Shield, title: "Langjährige Erfahrung", text: "Fachwissen aus zahlreichen Jahren in der Versicherungsberatung." },
  { icon: Check, title: "Volle Transparenz", text: "Keine versteckten Kosten. Klare Empfehlungen, die Sie verstehen." },
];

const services = [
  { icon: Scale, name: "Rechtsschutz", desc: "Schutz vor unkalkulierbaren Kosten im Streitfall." },
  { icon: Home, name: "Wohngebäude", desc: "Absicherung für Ihr Eigentum gegen Feuer, Sturm und Wasser." },
  { icon: Briefcase, name: "Berufsunfähigkeit", desc: "Existenzsicherung, wenn der Beruf nicht mehr ausgeübt werden kann." },
  { icon: HeartPulse, name: "Risikolebens­versicherung", desc: "Finanzielle Sicherheit für Ihre Angehörigen." },
  { icon: ShieldCheck, name: "Private Krankenversicherung", desc: "Individuelle Gesundheitsvorsorge und Spitzenleistungen." },
  { icon: Building2, name: "Gewerbe­versicherungen", desc: "Maßgeschneiderter Schutz für Selbständige und Unternehmen." },
];

function Home_() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface border-b border-border">
        <div className="container-page py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs tracking-wider uppercase text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Unabhängiger Versicherungsmakler · Berlin
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05] text-foreground">
                Unabhängige Versicherungs­beratung in Berlin
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Wir vergleichen für Sie Versicherungen aller Gesellschaften und finden die Lösung, die wirklich zu Ihnen passt.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition"
                >
                  Jetzt beraten lassen <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-medium hover:bg-surface transition"
                >
                  Unsere Leistungen
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroConsultingImg.url}
                alt="Persönliche Versicherungsberatung bei VMK Berlin"
                width={1024}
                height={768}
                className="rounded-2xl w-full h-auto shadow-[var(--shadow-elevated)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-surface">
        <div className="container-page py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["100 %", "Unabhängig"],
            ["50+", "Gesellschaften im Vergleich"],
            ["Berlin", "Lokaler Ansprechpartner"],
            ["DE-weit", "Privat- & Gewerbekunden betreut"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-2xl md:text-3xl text-foreground">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-page py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="eyebrow">Warum VMK Berlin</div>
          <h2 className="mt-3 text-3xl md:text-5xl">Beratung, die zu Ihnen passt – nicht zu einer Gesellschaft.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {benefits.map((b) => (
            <div key={b.title} className="bg-background p-8">
              <b.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <div className="mt-5 text-base font-medium text-foreground">{b.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface border-y border-border">
        <div className="container-page py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
            <div>
              <div className="eyebrow">Leistungen</div>
              <h2 className="mt-3 text-3xl md:text-5xl">Wir bieten alles an – hier ein paar Beispiele.</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed lg:max-w-md">
              Unser Spektrum deckt sämtliche Versicherungsbereiche ab. Viele Kunden kommen wegen einer Versicherung – und bleiben, weil sie entdecken, dass wir alle Bereiche abdecken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                to="/leistungen"
                key={s.name}
                className="group rounded-lg border border-border bg-background p-7 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition"
              >
                <div className="flex items-start justify-between">
                  <s.icon className="h-7 w-7 text-primary" strokeWidth={1.4} />
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>
                <div className="mt-6 text-lg font-medium text-foreground">{s.name}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-muted-foreground">
            Und vieles mehr – sprechen Sie uns an.{" "}
            <Link to="/leistungen" className="text-primary font-medium hover:underline">Alle Leistungen ansehen →</Link>
          </div>
        </div>
      </section>

      {/* IMAGE + LANGUAGES */}
      <section className="container-page py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={beratungImg}
            alt="Persönliche Versicherungsberatung bei VMK Berlin"
            width={1280}
            height={896}
            loading="lazy"
            className="rounded-2xl w-full h-auto shadow-[var(--shadow-elevated)]"
          />
        </div>
        <div>
          <div className="eyebrow">Persönlich · Mehrsprachig</div>
          <h2 className="mt-3 text-3xl md:text-4xl">Beratung auf Deutsch &amp; Englisch.</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Ob Sie in Berlin neu sind oder Ihre Versicherungen lieber in Ihrer Muttersprache besprechen – wir beraten Sie kompetent auf Deutsch und auf Englisch.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We are happy to advise you in English as well – just give us a call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm">
              <Languages className="h-4 w-4 text-primary" /> Deutsch · English
            </span>
            <a href="tel:+493032304332" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
              <Phone className="h-4 w-4" /> 030 32304332
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24 md:py-32">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-16 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">Lassen Sie uns über Ihre Absicherung sprechen.</h2>
            <p className="mt-4 text-white/80 text-lg max-w-xl">
              Unverbindlich, persönlich und kostenfrei. Wir analysieren Ihre Situation und zeigen Ihnen, wo es Lücken gibt.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
            >
              Jetzt beraten lassen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
