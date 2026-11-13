import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { hash: "start", label: "Start" },
  { hash: "ueber", label: "Über mich" },
  { hash: "leistungen", label: "Was ich mache" },
  { hash: "kueche", label: "Meine Küche" },
  { hash: "ablauf", label: "Ablauf" },
  { hash: "kontakt", label: "Kontakt" },
];

const linkClass = "whitespace-nowrap text-sm text-foreground/80 transition-colors hover:text-primary";

/** overDark: Navigation liegt über einem dunklen Foto (Startseite) – Text hell, bis gescrollt wird. */
export function Nav({ overDark = false }: { overDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = overDark && !scrolled && !open;
  const item = light
    ? "whitespace-nowrap text-sm text-white/85 transition-colors hover:text-white"
    : linkClass;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <Link
          to="/"
          className={`font-display text-2xl tracking-tight transition-colors ${light ? "text-white" : ""}`}
          onClick={() => setOpen(false)}>
          Fran<span className="text-primary">’s</span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link key={link.hash} to={{ pathname: "/", hash: link.hash }} className={item}>
              {link.label}
            </Link>
          ))}
          <NavLink
            to="/galerie"
            className={({ isActive }) => `${item} ${isActive ? "text-primary" : ""}`}
          >
            Galerie
          </NavLink>
          <Link
            to={{ pathname: "/", hash: "kontakt" }}
            className="whitespace-nowrap rounded-full bg-gradient-warm px-5 py-2 text-sm font-medium text-primary-foreground shadow-warm transition hover:opacity-90"
          >
            Lass uns reden
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors lg:hidden ${
            light
              ? "border-white/40 bg-white/10 text-white backdrop-blur-sm"
              : "border-border/60 bg-background/70"
          }`}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          {open ? "Schließen" : "Menü"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="flex flex-col gap-3 border-t border-border/60 bg-background/95 px-6 py-4 backdrop-blur-md lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: "/", hash: link.hash }}
              onClick={() => setOpen(false)}
              className="py-1 text-base text-foreground/85 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/galerie"
            onClick={() => setOpen(false)}
            className="py-1 text-base text-foreground/85 hover:text-primary"
          >
            Galerie
          </Link>
        </nav>
      )}
    </header>
  );
}
