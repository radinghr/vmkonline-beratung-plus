import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page py-20 md:py-28 max-w-4xl">
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground">{title}</h1>
        {lead && <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{lead}</p>}
      </div>
    </section>
  );
}
