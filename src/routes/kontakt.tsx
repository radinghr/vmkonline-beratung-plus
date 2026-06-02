import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Mail, Phone, Check } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Beratung anfragen | VMK Berlin GmbH" },
      { name: "description", content: "Nehmen Sie Kontakt mit der VMK Berlin GmbH auf – unabhängiger Versicherungsmakler. Quellweg 27, 13629 Berlin." },
      { property: "og:title", content: "Kontakt – Beratung anfragen | VMK Berlin GmbH" },
      { property: "og:description", content: "Persönliche Beratung anfragen – unverbindlich und kostenfrei." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein.").max(100),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail ein.").max(255),
  phone: z.string().trim().min(4, "Bitte geben Sie eine Telefonnummer ein.").max(40),
  message: z.string().trim().min(10, "Bitte schildern Sie kurz Ihr Anliegen.").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontakt"
        title="Jetzt beraten lassen."
        lead="Schreiben Sie uns – wir melden uns innerhalb eines Werktags. Unverbindlich und kostenfrei."
      />

      <section className="container-page py-20 md:py-28 grid lg:grid-cols-[1fr_1.3fr] gap-16">
        <div>
          <div className="eyebrow">Adresse</div>
          <h2 className="mt-3 text-2xl font-display">VMK Berlin GmbH</h2>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex gap-4">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="text-muted-foreground leading-relaxed">
                Quellweg 27<br />13629 Berlin<br />Deutschland
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="text-muted-foreground">info@vmk-berlin.de</div>
            </li>
            <li className="flex gap-4">
              <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
              <a href="tel:+493032304332" className="text-foreground hover:text-primary font-medium">030 32304332</a>
            </li>
          </ul>

          <div className="mt-10 p-6 rounded-lg bg-surface border border-border">
            <div className="text-sm font-medium text-foreground">Unabhängig &amp; transparent</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Die Erstberatung ist für Sie kostenfrei. Wir empfehlen ohne Bindung an eine Gesellschaft. Beratung auf Deutsch &amp; Englisch möglich.
            </p>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-lg border border-border bg-surface p-10 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-display">Vielen Dank!</h2>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb eines Werktags persönlich bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-border p-8 md:p-10 space-y-5">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="E-Mail" name="email" type="email" error={errors.email} />
              <Field label="Telefonnummer" name="phone" type="tel" error={errors.phone} />
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nachricht</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={2000}
                  className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
                />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                Jetzt beraten lassen
              </button>
              <p className="text-xs text-muted-foreground">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung Ihrer Anfrage zu.
              </p>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
