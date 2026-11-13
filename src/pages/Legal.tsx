import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { usePageTitle } from "@/lib/usePageTitle";

/**
 * Platzhalter-Seiten. Bitte vor dem Livegang mit den echten Angaben füllen
 * (z. B. mit einem Impressum-/Datenschutz-Generator) – alles in [eckigen Klammern] ersetzen.
 */

function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  usePageTitle(`${title} – Fran's`);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
          </Link>
          <h1 className="font-display text-4xl md:text-6xl">{title}</h1>
          <div className="mt-10 space-y-6 text-foreground/85 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        Franceska Schlindwein
        <br />
        [Straße und Hausnummer]
        <br />
        [PLZ] Landau in der Pfalz
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: [Telefonnummer]
        <br />
        E-Mail: <a href="mailto:hallo@frans-events.de">hallo@frans-events.de</a>
      </p>
      <h2>Umsatzsteuer-ID</h2>
      <p>[Falls vorhanden: Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG]</p>
    </LegalLayout>
  );
}

export function Datenschutz() {
  return (
    <LegalLayout title="Datenschutz">
      <p>
        [Hier die vollständige Datenschutzerklärung einfügen. Hinweis: Die Seite lädt Schriften
        von Google Fonts und wird bei Vercel gehostet – beides sollte in der Erklärung erwähnt
        werden.]
      </p>
      <h2>Verantwortliche Stelle</h2>
      <p>
        Franceska Schlindwein, [Adresse], E-Mail:{" "}
        <a href="mailto:hallo@frans-events.de">hallo@frans-events.de</a>
      </p>
    </LegalLayout>
  );
}
