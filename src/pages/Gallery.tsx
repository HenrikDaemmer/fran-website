import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { DishImage } from "@/components/site/DishImage";
import { SiteFooter } from "@/components/site/SiteFooter";
import { galleryItems } from "@/data/content";
import { usePageTitle } from "@/lib/usePageTitle";

export default function Gallery() {
  usePageTitle("Galerie – Fran's Event-Küche");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pb-24 pt-32 md:pb-36 md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
          </Link>

          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Galerie</p>
              <h1 className="max-w-4xl font-display text-5xl leading-[1.08] md:text-7xl">
                Momente, die man <span className="text-gradient-warm">schmecken</span> kann.
              </h1>
            </div>
            <p className="max-w-md text-lg text-foreground/75 md:col-span-4">
              Ein paar Eindrücke aus meiner Küche und von besonderen Tafeln. Fahre mit der Maus
              über ein Bild, um mehr zu erfahren.
            </p>
          </div>

          <div className="mt-14 columns-2 gap-3 md:mt-20 md:columns-3 md:gap-6">
            {galleryItems.map((item) => (
              <div key={item.src + item.label} className="mb-3 break-inside-avoid md:mb-6">
                <DishImage
                  {...item}
                  ratio={item.ratio}
                  className="shadow-sm transition-shadow hover:shadow-warm"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-card p-8 text-center md:p-12">
            <p className="font-display text-3xl">Dein Event könnte das nächste sein.</p>
            <p className="mx-auto mt-3 max-w-xl text-foreground/75">
              Erzähl mir, was du feiern möchtest – gemeinsam machen wir etwas Persönliches daraus.
            </p>
            <Link
              to={{ pathname: "/", hash: "kontakt" }}
              className="mt-7 inline-flex rounded-full bg-gradient-warm px-7 py-3.5 font-medium text-primary-foreground shadow-warm transition hover:opacity-90"
            >
              Lass uns über dein Event sprechen
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
