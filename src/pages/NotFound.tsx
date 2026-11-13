import { Link } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { usePageTitle } from "@/lib/usePageTitle";

export default function NotFound() {
  usePageTitle("Seite nicht gefunden – Fran's");
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 pt-32 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">404</p>
        <h1 className="font-display text-4xl md:text-6xl">Diese Seite gibt es leider nicht.</h1>
        <Link
          to="/"
          className="mt-10 rounded-full bg-gradient-warm px-7 py-3.5 font-medium text-primary-foreground shadow-warm transition hover:opacity-90"
        >
          Zur Startseite
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
