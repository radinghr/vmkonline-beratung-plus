import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-sm font-semibold">VMK</span>
            <span className="text-sm font-medium tracking-tight">VMK Berlin GmbH</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Unabhängiger Versicherungsmakler aus Berlin. Beratung, die zu Ihrem Leben passt – nicht zu einer Gesellschaft.
          </p>
        </div>

        <div>
          <div className="text-sm font-medium text-foreground">Navigation</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/leistungen" className="hover:text-foreground">Leistungen</Link></li>
            <li><Link to="/ueber-uns" className="hover:text-foreground">Über uns</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-medium text-foreground">Kontakt</div>
          <address className="mt-3 not-italic text-sm text-muted-foreground leading-relaxed">
            VMK Berlin GmbH<br />
            Quellweg 27<br />
            13629 Berlin<br />
            Deutschland
          </address>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} VMK Berlin GmbH. Alle Rechte vorbehalten.</div>
          <div className="flex gap-5">
            <Link to="/" className="hover:text-foreground">Impressum</Link>
            <Link to="/" className="hover:text-foreground">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
