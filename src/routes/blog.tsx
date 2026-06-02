import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog – Wissen rund um Versicherungen | VMK Berlin" },
      { name: "description", content: "Aktuelle Beiträge und Ratgeber rund um Versicherungen, Vorsorge und unabhängige Beratung." },
      { property: "og:title", content: "Blog – Wissen rund um Versicherungen | VMK Berlin" },
      { property: "og:description", content: "Beiträge und Ratgeber rund um Versicherungen." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { title: "Berufsunfähigkeit: Warum jung abschließen sich lohnt", date: "März 2026", excerpt: "Gesundheit, Beitrag und Annahme – drei Gründe, die BU nicht aufzuschieben." },
  { title: "Wohngebäude­versicherung: Worauf es beim Vergleich ankommt", date: "Februar 2026", excerpt: "Tarife unterscheiden sich im Detail. Diese Klauseln sind im Schadenfall entscheidend." },
  { title: "Privat oder gesetzlich? Die ehrliche Antwort", date: "Januar 2026", excerpt: "Für wen sich die private Krankenversicherung wirklich rechnet – und für wen nicht." },
];

function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Wissen rund um Versicherungen."
        lead="Klar geschriebene Beiträge, die komplexe Themen verständlich machen."
      />

      <section className="container-page py-20 md:py-28 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-lg border border-border bg-background p-7 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.date}</div>
            <h2 className="mt-4 text-xl font-display text-foreground leading-snug">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            <Link to="/blog" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Weiterlesen <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
            </Link>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
