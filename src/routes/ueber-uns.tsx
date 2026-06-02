import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – VMK Berlin GmbH" },
      { name: "description", content: "VMK Berlin GmbH ist Ihr unabhängiger Versicherungsmakler in Berlin. Beratung statt Verkauf, individuelle Betreuung und langfristige Kundenbeziehungen." },
      { property: "og:title", content: "Über uns – VMK Berlin GmbH" },
      { property: "og:description", content: "Unabhängiger Versicherungsmakler in Berlin – Beratung statt Verkauf." },
      { property: "og:url", content: "/ueber-uns" },
    ],
    links: [{ rel: "canonical", href: "/ueber-uns" }],
  }),
  component: About,
});

const values = [
  { title: "Unabhängigkeit", text: "Wir sind keiner Versicherungsgesellschaft verpflichtet. Unsere Empfehlungen orientieren sich ausschließlich an Ihrem Bedarf." },
  { title: "Persönlichkeit", text: "Ein Ansprechpartner für alle Fragen – ohne Hotline, ohne Warteschleife." },
  { title: "Langfristigkeit", text: "Wir denken in Jahrzehnten, nicht in Abschlüssen. Ihre Verträge passen wir laufend an Ihr Leben an." },
  { title: "Klarheit", text: "Versicherungsdeutsch übersetzen wir in verständliche Sprache. Sie wissen immer, worauf Sie sich einlassen." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Über uns"
        title="Beratung statt Verkauf."
        lead="Die VMK Berlin GmbH ist ein unabhängiger Versicherungsmakler mit Sitz in Berlin. Wir beraten Privatkunden in ganz Deutschland – persönlich, transparent und auf Augenhöhe."
      />

      <section className="container-page py-20 md:py-28 grid lg:grid-cols-[1fr_1.3fr] gap-16">
        <div>
          <div className="eyebrow">Unser Selbstverständnis</div>
          <h2 className="mt-3 text-3xl md:text-4xl">Wir vertreten Sie – nicht die Versicherung.</h2>
        </div>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            Als unabhängiger Versicherungsmakler stehen wir rechtlich auf Ihrer Seite. Das unterscheidet uns von Vertretern, die an eine Gesellschaft gebunden sind.
          </p>
          <p>
            Wir analysieren Ihre Lebenssituation, prüfen den Markt und empfehlen Ihnen den Vertrag, der wirklich passt – nicht den, der die höchste Provision bringt.
          </p>
          <p>
            Über die Jahre haben wir gelernt: Gute Versicherungsberatung ist kein Abschluss, sondern eine Beziehung. Wir begleiten unsere Kunden ein Leben lang.
          </p>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">Was uns leitet</div>
          <h2 className="mt-3 text-3xl md:text-4xl max-w-2xl">Vier Werte, die unsere Arbeit prägen.</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
            {values.map((v, i) => (
              <div key={v.title} className="bg-background p-8 md:p-10">
                <div className="font-display text-sm text-primary">0{i + 1}</div>
                <div className="mt-3 text-xl font-medium text-foreground">{v.title}</div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="rounded-2xl border border-border p-10 md:p-14 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl">Sprechen Sie mit uns.</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Ein unverbindliches Gespräch zeigt, wo Sie stehen – und wo wir helfen können.</p>
          </div>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition self-start">
            Jetzt beraten lassen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
