import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <Link to="/" className="font-display text-base text-foreground">
          Fran<span className="text-primary">’s</span> · Kochen mit Herz.
        </Link>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
          <nav aria-label="Rechtliches" className="flex gap-5">
            <Link to="/impressum" className="hover:text-primary">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-primary">
              Datenschutz
            </Link>
          </nav>
          <p>© {new Date().getFullYear()} Franceska Schlindwein · Landau</p>
        </div>
      </div>
    </footer>
  );
}
