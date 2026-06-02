import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Scale, Home, Briefcase, HeartPulse, ShieldCheck, Building2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – Versicherungen im Überblick | VMK Berlin" },
      { name: "description", content: "Rechtsschutz, Wohngebäude, Berufsunfähigkeit, Risikoleben, private Krankenversicherung und Gewerbeversicherungen – verständlich erklärt." },
      { property: "og:title", content: "Leistungen – Versicherungen im Überblick | VMK Berlin" },
      { property: "og:description", content: "Alle Versicherungsbereiche aus einer Hand – unabhängig und transparent." },
      { property: "og:url", content: "/leistungen" },
    ],
    links: [{ rel: "canonical", href: "/leistungen" }],
  }),
  component: Services,
});

const items = [
  {
    icon: Scale,
    name: "Rechtsschutz­versicherung",
    what: "Übernimmt Anwalts-, Gerichts- und Sachverständigenkosten in rechtlichen Auseinandersetzungen.",
    who: "Für alle, die im Streitfall handlungsfähig bleiben wollen – im Privat-, Berufs- oder Verkehrsbereich.",
    why: "Wir vergleichen Wartezeiten, Selbstbehalte und Leistungsbausteine – Details, die im Ernstfall entscheiden.",
  },
  {
    icon: Home,
    name: "Wohngebäude­versicherung",
    what: "Schützt Ihr Haus vor Schäden durch Feuer, Leitungswasser, Sturm und Hagel.",
    who: "Eigentümer von Häusern und Wohnungen – oft Pflicht bei Immobilienfinanzierungen.",
    why: "Tarifunterschiede sind enorm. Wir prüfen Elementarschutz, grobe Fahrlässigkeit und Unterversicherungs­verzicht.",
  },
  {
    icon: Briefcase,
    name: "Berufsunfähigkeits­versicherung",
    what: "Zahlt eine monatliche Rente, wenn Sie Ihren Beruf aus gesundheitlichen Gründen nicht mehr ausüben können.",
    who: "Jeder, der von seinem Einkommen lebt. Besonders wichtig für junge Berufstätige.",
    why: "Die Gesundheitsprüfung entscheidet über Zusage und Konditionen. Wir bereiten sie sorgfältig vor.",
  },
  {
    icon: HeartPulse,
    name: "Risikolebens­versicherung",
    what: "Zahlt im Todesfall eine vereinbarte Summe an Ihre Angehörigen.",
    who: "Familien, Paare mit Krediten, Hauptverdiener – immer wenn andere finanziell von Ihnen abhängen.",
    why: "Bei gleicher Leistung trennen Anbieter mehrere Hundert Euro Beitrag. Wir vergleichen tagesaktuell.",
  },
  {
    icon: ShieldCheck,
    name: "Private Krankenversicherung",
    what: "Umfassender Versicherungsschutz mit individuell wählbaren Leistungen und freier Arztwahl.",
    who: "Angestellte ab Versicherungspflichtgrenze, Beamte und Selbständige.",
    why: "Die Wahl ist langfristig. Wir analysieren Leistungen, Beitragsstabilität und Alterungsrückstellungen.",
  },
  {
    icon: Building2,
    name: "Gewerbe­versicherungen",
    what: "Branchen­spezifischer Schutz für Betriebshaftpflicht, Inhalt, Cyber und mehr.",
    who: "Selbständige, Freiberufler, kleine und mittlere Unternehmen.",
    why: "Wir bauen ein Paket, das zu Ihrem Risiko passt – nicht zu einem Standardpaket.",
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Leistungen"
        title="Versicherungen, verständlich erklärt."
        lead="Wir decken alle wesentlichen Versicherungsbereiche für Privatkunden und Selbständige ab. Hier finden Sie einen Überblick – mit klaren Antworten auf drei Fragen."
      />

      <section className="container-page py-20 md:py-28 space-y-px bg-border rounded-lg overflow-hidden">
        {items.map((it, i) => (
          <article key={it.name} className="bg-background p-8 md:p-12 grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-14">
            <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 lg:w-48">
              <div className="grid h-14 w-14 place-items-center rounded-lg bg-primary-soft text-primary">
                <it.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">0{i + 1}</div>
                <div className="font-display text-xl md:text-2xl text-foreground mt-1">{it.name}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                ["Was ist es?", it.what],
                ["Für wen?", it.who],
                ["Warum über einen Makler?", it.why],
              ].map(([label, body]) => (
                <div key={label}>
                  <div className="eyebrow">{label}</div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="container-page pb-24">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 grid md:grid-cols-[1.5fr_1fr] gap-6 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">Nicht sicher, was Sie wirklich brauchen?</h2>
            <p className="mt-3 text-white/80 max-w-xl">Wir prüfen Ihre bestehenden Verträge und decken Lücken oder Überversicherungen auf – kostenfrei.</p>
          </div>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition md:justify-self-end">
            Beratung anfragen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
