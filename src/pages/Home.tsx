import { useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CakeSlice,
  Check,
  ClipboardCheck,
  Heart,
  MessageCircle,
  PartyPopper,
  Star,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { DishImage } from "@/components/site/DishImage";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  dishes,
  galleryItems,
  heroImage as heroImg,
  portraitImage as portraitImg,
  reviewImages,
  serviceImages,
} from "@/data/content";
import { usePageTitle } from "@/lib/usePageTitle";

export default function Home() {
  usePageTitle();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav overDark />
      <main>
        <Hero />
        <About />
        <Services />
        <Kitchen />
        <Reviews />
        <GalleryTeaser />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="start" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Reich gedeckte Tafel in der Vinothek zwischen Weinfässern"
        width={2400}
        height={1600}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.3_0.1_35/0.45)] via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:pb-28">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/80">
          Event-Köchin · Landau & Umgebung
        </p>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl lg:text-8xl">
          Kochen mit Herz.
          <br />
          <span className="italic text-[oklch(0.85_0.13_45)]">Feiern</span> mit Seele.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">
          Ich bin Fran – und ich mache aus deinem Event etwas, das in Erinnerung bleibt.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#kontakt"
            className="rounded-full bg-gradient-warm px-7 py-3.5 text-base font-medium text-primary-foreground shadow-warm transition hover:opacity-95"
          >
            Lass uns reden →
          </a>
          <a
            href="#ueber"
            className="rounded-full border border-white/40 px-7 py-3.5 text-base text-white transition hover:bg-white/10"
          >
            Mehr erfahren
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="sticky top-28">
            <img
              src={portraitImg}
              alt="Fran bei der Arbeit in ihrer Küche"
              width={1067}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-warm"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Über Fran</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Hallo, ich bin <span className="text-gradient-warm">Fran</span>.
          </h2>
          <div className="mt-8 space-y-6 text-lg text-foreground/85">
            <p>Hallo, ich bin Franceska – aber eigentlich nennt mich jeder einfach Fran.</p>
            <p>
              Seit 8 Jahren stehe ich mit Leidenschaft am Herd, davon seit 4 Jahren als Hausköchin
              in der <span className="font-medium text-foreground">Vinothek Sauer</span> in Landau.
              Von dort aus begleite ich kleine und große Events kulinarisch – vom entspannten Abend
              mit Freunden bis zur großen Feier.
            </p>
            <p>
              Gutes Essen ist wichtig. Aber eine wirklich perfekte Veranstaltung entsteht erst dann,
              wenn alles zusammenpasst. Deshalb liebe ich nicht nur das Kochen, sondern vor allem
              die individuelle Planung mit meinen Gästen. Gemeinsam Ideen entwickeln, besondere
              Wünsche umsetzen, und am Ende ein Fest schaffen, das in Erinnerung bleibt – das macht
              mir am meisten Spaß.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-secondary">
              Die Geschichte dahinter
            </p>
            <h3 className="font-display text-2xl md:text-3xl">
              Die Leidenschaft fürs Kochen habe ich wahrscheinlich von meiner Oma.
            </h3>
            <p className="mt-5 text-foreground/85">
              Sie ist einst aus Italien mit ihrer Familie ausgewandert, um in Deutschland für die
              Gastarbeiter Restaurants zu eröffnen. Am Ende betrieb sie 6 Restaurants in ganz
              Deutschland – mit authentischer, unverstellter italienischer Küche. Genau das versuche
              ich immer wieder in meine Menüs einfließen zu lassen: etwas Echtes. Etwas, das nach
              Hause schmeckt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: CakeSlice,
    title: "Private Feiern",
    desc: "Geburtstage, Jubiläen, Familientreffen – ich sorge dafür, dass deine Gäste gut essen und du entspannt feiern kannst.",
    image: serviceImages.private,
    dish: "Die ganze Tafel",
  },
  {
    icon: Heart,
    title: "Hochzeiten",
    desc: "Vom ersten Aperitif bis zum Mitternachtssnack – ich begleite euren Tag mit Menüs, die zu euch passen.",
    image: serviceImages.wedding,
    dish: "Orangen, Creme & Biskuit",
  },
  {
    icon: BriefcaseBusiness,
    title: "Firmen- & Teamevents",
    desc: "Business-Lunch, Sommerfest oder Weihnachtsfeier – persönliche Küche, die für Gesprächsstoff sorgt.",
    image: serviceImages.business,
    dish: "Oktopus, Brot & Salate zum Teilen",
  },
  {
    icon: Wine,
    title: "Vinothek-Abende",
    desc: "In der Vinothek Sauer in Landau – Menüs, die zu den Weinen sprechen und umgekehrt.",
    image: serviceImages.wine,
    dish: "Geschmortes Rind zwischen den Fässern",
  },
];

function Services() {
  return (
    <section id="leistungen" className="relative scroll-mt-20 bg-gradient-soft py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Was ich mache</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Was ich für <em className="text-gradient-warm not-italic">dich</em> tue.
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Ich begleite Events von rund 30 bis 80 Personen – kulinarisch und darüber hinaus. Denn
            für mich hört meine Arbeit nicht beim Teller auf.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-warm"
            >
              <DishImage
                src={service.image}
                alt={`${service.dish} – Beispielgericht für ${service.title}`}
                label={service.dish}
                ratio="aspect-[16/10]"
                className="rounded-none border-0"
              />
              <div className="p-8 md:p-10">
                <service.icon
                  aria-hidden="true"
                  className="mb-5 h-8 w-8 text-primary"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-2xl md:text-3xl">{service.title}</h3>
                <p className="mt-4 text-foreground/80">{service.desc}</p>
              </div>
              <span className="absolute right-5 top-5 rounded-full bg-background/90 px-3 py-1 font-display text-sm text-foreground shadow-sm backdrop-blur-sm">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Die Bilder zeigen aktuell Beispielgerichte und werden später durch Fotos der jeweiligen
          Events ersetzt.
        </p>
      </div>
    </section>
  );
}

const tags = [
  "Regional",
  "Mediterran",
  "Saisonal",
  "Comfort Food",
  "Vegetarisch / Vegan",
  "International",
];

function Kitchen() {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const current = dishes[active];
  const next = dishes[(active + 1) % dishes.length];
  const outgoing = previous === null ? null : dishes[previous];

  const showPrevious = () => {
    setDirection("backward");
    setPrevious(active);
    setActive((active - 1 + dishes.length) % dishes.length);
  };

  const showNext = () => {
    setDirection("forward");
    setPrevious(active);
    setActive((active + 1) % dishes.length);
  };

  const onCarouselKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  return (
    <section id="kueche" className="relative scroll-mt-20 overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:gap-12">
        <div className="order-2 md:order-1 md:col-span-6">
          <div
            role="region"
            aria-roledescription="Karussell"
            aria-label="Beispielgerichte"
            onKeyDown={onCarouselKeyDown}
            className="outline-none"
          >
            <div className="relative px-10 sm:px-12 md:px-14">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Vorheriges Gericht"
                className="absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground shadow-sm transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-3"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center gap-3 md:gap-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-warm">
                  <DishImage
                    key={`current-${active}`}
                    src={current.src}
                    alt={current.alt}
                    label={current.label}
                    ratio="h-full"
                    className={`absolute inset-0 carousel-enter-${direction}`}
                  />
                  {outgoing && (
                    <div
                      key={`outgoing-${previous}-${active}`}
                      data-carousel-leaving
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-0 z-10 carousel-exit-${direction}`}
                    >
                      <DishImage
                        src={outgoing.src}
                        alt=""
                        label={outgoing.label}
                        ratio="h-full"
                        className="h-full rounded-2xl"
                        interactive={false}
                      />
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label={`Nächstes Gericht: ${next.label}`}
                  className="block w-full translate-y-6 overflow-hidden rounded-2xl text-left outline-none transition-transform hover:translate-y-4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <DishImage
                    key={`preview-${active}`}
                    src={next.src}
                    alt={next.alt}
                    label={next.label}
                    ratio="aspect-[3/4]"
                    className={`carousel-preview-${direction}`}
                    interactive={false}
                  />
                </button>
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Nächstes Gericht"
                className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full bg-primary p-2.5 text-primary-foreground shadow-warm transition hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:p-3"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 px-10 sm:px-12 md:mt-10 md:px-14" aria-live="polite">
              <p className="text-sm text-muted-foreground">
                {String(active + 1).padStart(2, "0")} / {String(dishes.length).padStart(2, "0")}
              </p>
              <p className="mt-1 font-display text-lg">{current.label}</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 md:col-span-6">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-secondary">Meine Küche</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Regional. Mediterran.
            <br />
            <span className="text-gradient-warm">Ehrlich.</span>
          </h2>
          <p className="mt-8 font-display text-xl italic text-foreground/85">
            „Kennt man, aber anders.“
          </p>
          <p className="mt-6 text-lg text-foreground/80">
            Das ist vielleicht das treffendste, was man über meine Küche sagen kann. Ich koche mit
            dem, was die Saison und die Region hergeben, lasse meine italienischen Wurzeln immer
            wieder durchscheinen und habe dabei keine Angst vor Comfort Food. Hauptsache, es
            schmeckt – und niemand geht hungrig nach Hause.
          </p>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-foreground/85"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    quote:
      "Wir konnten uns einfach zurücklehnen und den Abend genießen. Das Menü hat wunderbar zu uns gepasst – und unsere Gäste sprechen heute noch davon.",
    name: "Beispielstimme · Private Feier",
    image: reviewImages.family,
    alt: "Reich gedeckter Tisch von oben",
  },
  {
    quote:
      "Von der ersten Idee bis zum letzten Dessert haben wir uns bestens begleitet gefühlt. Persönlich, herzlich und unglaublich lecker.",
    name: "Beispielstimme · Hochzeit",
    image: reviewImages.wedding,
    alt: "Dessert mit Orangen, im Hintergrund weitere Gerichte",
  },
  {
    quote:
      "Essen und Weine haben perfekt zusammengespielt. Besonders schön war, wie aufmerksam Fran auf unsere Wünsche eingegangen ist.",
    name: "Beispielstimme · Vinothek-Abend",
    image: reviewImages.wine,
    alt: "Gedeckte Tafel in der Vinothek zwischen Weinfässern",
  },
];

function Reviews() {
  return (
    <section id="stimmen" className="scroll-mt-20 bg-gradient-soft py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Gästestimmen</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Was <span className="text-gradient-warm">in Erinnerung</span> bleibt.
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Gutes Essen verbindet. Die schönsten Rückmeldungen sind die, bei denen man merkt: Der
            Abend war mehr als nur ein Menü.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <img
                src={review.image}
                alt={review.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-7 md:p-8">
                <div className="flex gap-1 text-primary" role="img" aria-label="5 von 5 Sternen">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} aria-hidden="true" className="h-4 w-4" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-relaxed text-foreground/90">
                  „{review.quote}“
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium text-muted-foreground">
                  {review.name}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Diese Stimmen sind Gestaltungsbeispiele und werden durch echte Kundenrezensionen ersetzt.
        </p>
      </div>
    </section>
  );
}

function GalleryTeaser() {
  // Bento-Raster: großes Bild links, kleinere rechts, letzte Kachel führt zur Galerie
  const [table, dessert, salad, kitchen, octopus, more] = [0, 8, 5, 2, 1, 9].map(
    (index) => galleryItems[index],
  );
  const remaining = galleryItems.length - 5;

  return (
    <section id="galerie" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Galerie</p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Ein Blick in <em className="text-gradient-warm not-italic">meine Welt</em>.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Momente, Teller, Menschen. Entdecke noch mehr Eindrücke in der großen Galerie.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:auto-rows-[230px] md:grid-cols-12 md:gap-5">
          <DishImage {...table} ratio="h-full" className="col-span-2 row-span-2 md:col-span-7" />
          <DishImage {...dessert} ratio="h-full" className="md:col-span-5" />
          <DishImage {...salad} ratio="h-full" className="md:col-span-5" />
          <DishImage {...kitchen} ratio="h-full" className="row-span-2 md:col-span-3 md:row-span-1" />
          <DishImage {...octopus} ratio="h-full" className="md:col-span-4" />

          <Link
            to="/galerie"
            aria-label={`Zur großen Galerie – ${remaining} weitere Bilder`}
            className="group relative isolate overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background md:col-span-5"
          >
            <img
              src={more.src}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-warm opacity-85 transition-opacity group-hover:opacity-75" />
            <div className="flex h-full flex-col justify-between p-5 text-primary-foreground md:p-7">
              <span className="font-display text-4xl md:text-5xl">+{remaining}</span>
              <span className="flex items-center gap-2 text-sm font-medium md:text-base">
                Zur großen Galerie
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Wir lernen uns kennen",
    text: "Du erzählst mir von deinem Anlass, deinen Gästen und deinen Wünschen. Ganz unkompliziert und persönlich.",
  },
  {
    icon: UtensilsCrossed,
    number: "02",
    title: "Wir entwickeln dein Menü",
    text: "Gemeinsam stellen wir ein Menü zusammen, das zu dir, zum Anlass und zur Saison passt.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Ich plane jedes Detail",
    text: "Du bekommst dein individuelles Angebot. Danach stimmen wir Ablauf, Einkauf und Organisation ab.",
  },
  {
    icon: PartyPopper,
    number: "04",
    title: "Du feierst, ich koche",
    text: "Am Tag deines Events kümmere ich mich um die Küche – damit du Zeit für deine Gäste hast.",
  },
];

function Process() {
  return (
    <section id="ablauf" className="scroll-mt-20 bg-gradient-soft py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-secondary">
            So einfach geht’s
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Von der ersten Idee bis zum <span className="text-gradient-warm">großen Genuss</span>.
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Persönlich geplant, transparent vorbereitet und mit viel Herz umgesetzt.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-5 md:grid-cols-4 md:gap-4">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t border-primary/30 md:block"
          />
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="relative rounded-3xl border border-border bg-card p-7 md:border-0 md:bg-transparent md:p-4 md:text-center"
            >
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-sm md:mx-auto">
                <step.icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.5} />
                <span className="absolute -right-2 -top-2 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-foreground/75">{step.text}</p>
              {index < processSteps.length - 1 && (
                <Check
                  aria-hidden="true"
                  className="absolute -bottom-3 right-6 h-5 w-5 text-primary md:hidden"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-warm p-10 shadow-warm md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/80">Kontakt</p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
              Lass uns reden.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/90">
              Jedes Event ist anders – und das Beste entsteht im Gespräch. Schreib mir kurz, was du
              planst, und ich melde mich bei dir.
            </p>

            <form
              className="mt-10 grid gap-4 md:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(`Anfrage von ${data.get("name") ?? ""}`);
                const body = encodeURIComponent(
                  `${data.get("message") ?? ""}\n\n—\n${data.get("name") ?? ""}\n${data.get("email") ?? ""}`,
                );
                window.location.href = `mailto:hallo@frans-events.de?subject=${subject}&body=${body}`;
              }}
            >
              <input
                required
                name="name"
                aria-label="Dein Name"
                placeholder="Dein Name"
                className="rounded-xl border border-white/30 bg-white/15 px-4 py-3.5 text-white outline-none placeholder:text-white/70 focus:bg-white/25"
              />
              <input
                required
                type="email"
                name="email"
                aria-label="Deine E-Mail"
                placeholder="Deine E-Mail"
                className="rounded-xl border border-white/30 bg-white/15 px-4 py-3.5 text-white outline-none placeholder:text-white/70 focus:bg-white/25"
              />
              <textarea
                required
                name="message"
                aria-label="Deine Nachricht"
                rows={5}
                placeholder="Was planst du? (Anlass, Datum, Personenzahl …)"
                className="rounded-xl border border-white/30 bg-white/15 px-4 py-3.5 text-white outline-none placeholder:text-white/70 focus:bg-white/25 md:col-span-2"
              />
              <button
                type="submit"
                className="rounded-full bg-background px-7 py-3.5 text-base font-medium text-foreground transition hover:bg-background/90 md:col-span-2"
              >
                Nachricht senden →
              </button>
            </form>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/90">
              <a href="mailto:hallo@frans-events.de" className="hover:text-white">
                hallo@frans-events.de
              </a>
              <span className="opacity-50">·</span>
              <span>Vinothek Sauer, Landau</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
