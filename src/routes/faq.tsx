import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ – Häufige Fragen zur Versicherungsberatung | VMK Berlin" },
      { name: "description", content: "Antworten zu Versicherungsmakler, Kosten, Beratung und passendem Versicherungsschutz." },
      { property: "og:title", content: "FAQ – Häufige Fragen | VMK Berlin" },
      { property: "og:description", content: "Antworten rund um Versicherungsmakler und Beratung." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs().map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function faqs() {
  return [
    {
      q: "Was ist ein Versicherungsmakler?",
      a: "Ein Versicherungsmakler ist gesetzlich der Interessenvertreter des Kunden. Er ist nicht an eine Versicherungsgesellschaft gebunden, sondern vergleicht den gesamten Markt und empfiehlt den passenden Tarif.",
    },
    {
      q: "Was kostet die Beratung?",
      a: "Unsere Beratung ist für Sie kostenfrei. Wir werden im Erfolgsfall über die Versicherungsgesellschaft vergütet – ohne dass für Sie zusätzliche Kosten entstehen.",
    },
    {
      q: "Bin ich an eine Versicherung gebunden?",
      a: "Nein. Sie bleiben in jeder Entscheidung frei. Wir empfehlen, vergleichen und setzen für Sie um – die Wahl treffen immer Sie.",
    },
    {
      q: "Welche Versicherungen sollte ich haben?",
      a: "Das hängt von Ihrer Lebenssituation ab. Existenzbedrohende Risiken (z. B. Privathaftpflicht, Berufsunfähigkeit) sollten immer abgesichert sein. In einem Gespräch klären wir, was bei Ihnen Priorität hat.",
    },
    {
      q: "Wie läuft eine Beratung ab?",
      a: "Schritt 1: Wir lernen Sie kennen und verstehen Ihre Situation. Schritt 2: Wir analysieren bestehende Verträge und prüfen den Markt. Schritt 3: Sie erhalten konkrete Empfehlungen und entscheiden, was umgesetzt wird.",
    },
    {
      q: "Betreuen Sie auch Kunden außerhalb Berlins?",
      a: "Ja. Unser Standort ist Berlin, wir betreuen aber Privatkunden in ganz Deutschland – persönlich vor Ort, per Video oder Telefon.",
    },
  ];
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const list = faqs();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQ"
        title="Häufige Fragen."
        lead="Antworten auf die Fragen, die wir am häufigsten in Erstgesprächen hören."
      />

      <section className="container-page py-20 md:py-28 max-w-3xl">
        <div className="divide-y divide-border border-y border-border">
          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium text-foreground">{f.q}</span>
                  <span className="shrink-0 mt-1 text-primary">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-12 text-muted-foreground leading-relaxed">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
