import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, Smartphone } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { DishImage } from "@/components/site/DishImage";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { galleryItems, PHOTOGRAPHER, snapshotItems, type ImageItem } from "@/data/content";
import { usePageTitle } from "@/lib/usePageTitle";

type View = "luca" | "snapshots";

const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-3", "-rotate-3"];

export default function Gallery() {
  usePageTitle("Galerie – Fran's Event-Küche");
  const [view, setView] = useState<View>("luca");

  const tabs: { id: View; label: string; sub: string; icon: typeof Camera; count: number }[] = [
    {
      id: "luca",
      label: `Fotografiert von ${PHOTOGRAPHER}`,
      sub: "Gerichte & Tafeln, in Szene gesetzt",
      icon: Camera,
      count: galleryItems.length,
    },
    {
      id: "snapshots",
      label: "Schnappschüsse",
      sub: "Direkt aus der Küche & vom Event",
      icon: Smartphone,
      count: snapshotItems.length,
    },
  ];

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
              Zwei Blickwinkel auf meine Küche: sorgfältig fotografiert – und ganz spontan
              mitten im Trubel.
            </p>
          </div>

          {/* Umschalter */}
          <div
            role="tablist"
            aria-label="Galerie-Ansicht"
            className="mt-12 grid gap-3 sm:inline-grid sm:grid-cols-2 md:mt-16"
          >
            {tabs.map((tab) => {
              const active = view === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setView(tab.id)}
                  className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                    active
                      ? "border-transparent bg-petrol text-white shadow-[0_18px_40px_-20px_rgba(15,76,76,0.8)]"
                      : "border-border bg-card hover:border-petrol/40"
                  }`}
                >
                  <tab.icon className={`h-6 w-6 shrink-0 ${active ? "text-saffron" : "text-petrol"}`} strokeWidth={1.6} />
                  <span>
                    <span className="block font-display text-lg leading-tight">
                      {tab.label}{" "}
                      <span className={active ? "text-white/60" : "text-muted-foreground"}>· {tab.count}</span>
                    </span>
                    <span className={`block text-sm ${active ? "text-white/70" : "text-muted-foreground"}`}>
                      {tab.sub}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div id={`panel-${view}`} role="tabpanel" className="mt-12 md:mt-16">
            {view === "luca" ? <LucaGrid items={galleryItems} /> : <SnapshotWall items={snapshotItems} />}
          </div>

          <div className="mt-16 rounded-3xl bg-petrol p-8 text-center text-white md:p-12">
            <p className="font-display text-3xl text-white">Dein Event könnte das nächste sein.</p>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
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

function LucaGrid({ items }: { items: ImageItem[] }) {
  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 md:gap-6">
        {items.map((item) => (
          <div key={item.src + item.label} className="mb-3 break-inside-avoid md:mb-6">
            <DishImage {...item} ratio={item.ratio} className="shadow-sm transition-shadow hover:shadow-warm" />
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">Fotos in dieser Ansicht: © {PHOTOGRAPHER}</p>
    </>
  );
}

function SnapshotWall({ items }: { items: ImageItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-8 md:gap-y-12 lg:grid-cols-4">
      {items.map((item, index) => (
        <Reveal key={item.src} delay={(index % 4) * 80}>
          <figure
            className={`rounded-sm bg-white p-2.5 pb-3 shadow-[0_18px_40px_-20px_rgba(53,26,20,0.5)] transition duration-500 hover:z-10 hover:rotate-0 hover:scale-[1.04] md:p-3 ${
              tilts[index % tilts.length]
            }`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" className="aspect-square w-full object-cover" />
            <figcaption className="mt-2 text-center font-hand text-xl leading-tight text-foreground/80 md:text-2xl">
              {item.label}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
