import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  CakeSlice,
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
import { Reveal } from "@/components/site/Reveal";
import { KitchenCarousel } from "@/components/site/KitchenCarousel";
import { HandUnderline, OliveBranch, Squiggle } from "@/components/site/Doodles";
import {
  dishes,
  eventMoments,
  galleryItems,
  heroImage,
  kitchenBwImage,
  portraitImage,
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
        <TagMarquee />
        <About />
        <OmaStory />
        <Services />
        <Kitchen />
        <EventMoments />
        <Reviews />
        <GalleryTeaser />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  return (
    <section id="start" className="relative min-h-[100svh] w-full overflow-hidden bg-espresso">
      <img
        src={heroImage}
        alt="Reich gedeckte Tafel in der Vinothek zwischen Weinfässern"
        width={2400}
        height={1600}
        fetchPriority="high"
        className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3a1508]/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:pb-28">
        <Reveal>
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/80">
            Event-Köchin · Landau & Umgebung
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl lg:text-8xl">
            Kochen mit Herz.
            <br />
            <span className="relative inline-block italic text-[#ffb58f]">
              Feiern
              <HandUnderline className="text-primary" />
            </span>{" "}
            mit Seele.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-xl text-lg text-white/90 md:text-xl">
            Ich bin Fran – und ich mache aus deinem Event etwas, das in Erinnerung bleibt.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-gradient-warm px-7 py-3.5 text-base font-medium text-primary-foreground shadow-warm transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Lass uns reden →
            </a>
            <a
              href="#ueber"
              className="rounded-full border border-white/40 px-7 py-3.5 text-base text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Mehr erfahren
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Marquee */

const tags = [
  "Regional",
  "Mediterran",
  "Saisonal",
  "Comfort Food",
  "Vegetarisch / Vegan",
  "International",
];

function TagMarquee() {
  const row = [...tags, ...tags];
  return (
    <div className="relative overflow-hidden bg-gradient-warm py-4 text-primary-foreground" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center">
        {[...row, ...row].map((tag, index) => (
          <span key={index} className="flex items-center whitespace-nowrap">
            <span className="px-6 font-display text-xl italic md:text-2xl">{tag}</span>
            <span className="text-white/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- About */

const facts = [
  { value: "8", unit: "Jahre", label: "mit Leidenschaft am Herd" },
  { value: "4", unit: "Jahre", label: "Hausköchin in der Vinothek Sauer" },
  { value: "30–80", unit: "Gäste", label: "pro Event – kulinarisch begleitet" },
];

function About() {
  return (
    <section id="ueber" className="relative scroll-mt-20 overflow-hidden py-24 md:py-36">
      <OliveBranch className="pointer-events-none absolute -right-10 top-10 hidden w-64 text-olive/25 md:block" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Reveal className="relative mx-auto max-w-md md:sticky md:top-28">
            {/* Polaroid mit Fran */}
            <figure className="relative rotate-[-2.5deg] rounded-sm bg-white p-3 pb-14 shadow-[0_25px_60px_-25px_rgba(53,26,20,0.55)] transition duration-500 hover:rotate-0">
              <img
                src={portraitImage}
                alt="Fran beim Anrichten in ihrer Küche"
                width={944}
                height={954}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-3 text-center font-hand text-2xl text-foreground/80">
                In meinem Element
              </figcaption>
            </figure>
            {/* zweites, kleineres Bild */}
            <img
              src={kitchenBwImage}
              alt=""
              loading="lazy"
              className="absolute -bottom-10 -right-4 hidden w-36 rotate-[5deg] rounded-sm border-[6px] border-white object-cover shadow-xl sm:block md:-right-8 md:w-40"
            />
            <span className="absolute -left-3 -top-4 rotate-[-8deg] rounded-sm bg-accent/90 px-4 py-1 font-hand text-xl text-accent-foreground shadow-sm">
              Landau ♥
            </span>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Über Fran</p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Hallo, ich bin <span className="text-gradient-warm">Fran</span>.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-6 text-lg text-foreground/85">
              <p>Hallo, ich bin Franceska – aber eigentlich nennt mich jeder einfach Fran.</p>
              <p>
                Seit 8 Jahren stehe ich mit Leidenschaft am Herd, davon seit 4 Jahren als
                Hausköchin in der <span className="font-medium text-foreground">Vinothek Sauer</span>{" "}
                in Landau. Von dort aus begleite ich kleine und große Events kulinarisch – vom
                entspannten Abend mit Freunden bis zur großen Feier.
              </p>
              <p>
                Gutes Essen ist wichtig. Aber eine wirklich perfekte Veranstaltung entsteht erst
                dann, wenn alles zusammenpasst. Deshalb liebe ich nicht nur das Kochen, sondern vor
                allem die individuelle Planung mit meinen Gästen. Gemeinsam Ideen entwickeln,
                besondere Wünsche umsetzen, und am Ende ein Fest schaffen, das in Erinnerung bleibt
                – das macht mir am meisten Spaß.
              </p>
            </div>
            <p className="mt-6 font-hand text-4xl text-primary">– Fran</p>
          </Reveal>

          <dl className="mt-14 grid gap-4 sm:grid-cols-3 [&_dt]:sm:text-3xl [&_dt]:lg:text-4xl xl:[&_dt]:text-5xl">
            {facts.map((fact, index) => (
              <Reveal
                key={fact.label}
                delay={index * 120}
                className="rounded-2xl border border-border bg-card/70 p-6"
              >
                <dt className="whitespace-nowrap font-display text-4xl text-foreground lg:text-5xl">
                  {fact.value}
                  <span className="ml-1.5 text-xl text-primary">{fact.unit}</span>
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{fact.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Oma-Story */

function OmaStory() {
  return (
    <section className="relative overflow-hidden bg-accent/45 py-24 md:py-32">
      <OliveBranch className="pointer-events-none absolute -left-8 bottom-6 w-56 rotate-[200deg] text-olive/30" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary">Die Geschichte dahinter</p>
          <p className="mt-6 font-display text-8xl leading-none text-gradient-warm md:text-9xl">6</p>
          <p className="mt-2 max-w-[14rem] text-foreground/75">
            Restaurants in ganz Deutschland – eröffnet von Frans Oma.
          </p>
        </Reveal>
        <Reveal delay={150} className="md:col-span-8">
          <blockquote className="font-display text-3xl leading-snug md:text-5xl">
            „Etwas Echtes. Etwas, das nach <span className="italic text-primary">Hause</span>{" "}
            schmeckt.“
          </blockquote>
          <p className="mt-8 max-w-2xl text-lg text-foreground/80">
            Die Leidenschaft fürs Kochen habe ich wahrscheinlich von meiner Oma. Sie ist einst aus
            Italien mit ihrer Familie ausgewandert, um in Deutschland für die Gastarbeiter
            Restaurants zu eröffnen. Am Ende betrieb sie 6 Restaurants in ganz Deutschland – mit
            authentischer, unverstellter italienischer Küche. Genau das versuche ich immer wieder in
            meine Menüs einfließen zu lassen.
          </p>
          <Squiggle className="mt-6 w-28 text-primary/70" />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Services */

const services = [
  {
    icon: CakeSlice,
    title: "Private Feiern",
    desc: "Geburtstage, Jubiläen, Familientreffen – ich sorge dafür, dass deine Gäste gut essen und du entspannt feiern kannst.",
    image: serviceImages.private,
    caption: "Grazing Board zum Teilen",
  },
  {
    icon: Heart,
    title: "Hochzeiten",
    desc: "Vom ersten Aperitif bis zum Mitternachtssnack – ich begleite euren Tag mit Menüs, die zu euch passen.",
    image: serviceImages.wedding,
    caption: "Festlich gedeckte Tafel",
  },
  {
    icon: BriefcaseBusiness,
    title: "Firmen- & Teamevents",
    desc: "Business-Lunch, Sommerfest oder Weihnachtsfeier – persönliche Küche, die für Gesprächsstoff sorgt.",
    image: serviceImages.business,
    caption: "Buffet für viele Gäste",
  },
  {
    icon: Wine,
    title: "Vinothek-Abende",
    desc: "In der Vinothek Sauer in Landau – Menüs, die zu den Weinen sprechen und umgekehrt.",
    image: serviceImages.wine,
    caption: "Kleine Teller & gute Weine",
  },
];

function Services() {
  return (
    <section id="leistungen" className="relative scroll-mt-20 bg-gradient-soft py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Was ich mache</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Was ich für <em className="text-gradient-warm not-italic">dich</em> tue.
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Ich begleite Events von rund 30 bis 80 Personen – kulinarisch und darüber hinaus. Denn
            für mich hört meine Arbeit nicht beim Teller auf.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 2) * 120}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card transition duration-500 hover:-translate-y-1.5 hover:shadow-warm">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.caption} – ${service.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute bottom-3 left-4 rotate-[-2deg] rounded-sm bg-white/90 px-3 py-0.5 font-hand text-xl text-foreground shadow-sm">
                    {service.caption}
                  </span>
                </div>
                <div className="p-8 md:p-10">
                  <service.icon aria-hidden="true" className="mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl md:text-3xl">{service.title}</h3>
                  <p className="mt-4 text-foreground/80">{service.desc}</p>
                </div>
                <span className="absolute right-5 top-5 rounded-full bg-background/90 px-3 py-1 font-display text-sm text-foreground shadow-sm backdrop-blur-sm">
                  0{index + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Kitchen */

function Kitchen() {
  return (
    <section
      id="kueche"
      className="relative scroll-mt-20 overflow-hidden bg-espresso py-24 text-white md:py-36"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-secondary/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:gap-14">
        <Reveal className="order-2 md:order-1 md:col-span-6">
          <KitchenCarousel items={dishes} />
        </Reveal>
        <Reveal delay={120} className="order-1 md:order-2 md:col-span-6">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#ff9a73]">Meine Küche</p>
          <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
            Regional. Mediterran.
            <br />
            <span className="text-gradient-warm">Ehrlich.</span>
          </h2>
          <p className="mt-8 font-hand text-4xl text-[#ffb58f]">„Kennt man, aber anders.“</p>
          <p className="mt-6 text-lg text-white/75">
            Das ist vielleicht das treffendste, was man über meine Küche sagen kann. Ich koche mit
            dem, was die Saison und die Region hergeben, lasse meine italienischen Wurzeln immer
            wieder durchscheinen und habe dabei keine Angst vor Comfort Food. Hauptsache, es
            schmeckt – und niemand geht hungrig nach Hause.
          </p>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/85"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ Aus echten Events */

const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

function EventMoments() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Hinter den Kulissen</p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Aus <span className="text-gradient-warm">echten</span> Events.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Keine Studiofotos – sondern Schnappschüsse direkt aus der Küche und vom Buffet. So
            sieht es aus, wenn ich für deine Gäste koche.
          </p>
        </Reveal>
      </div>

      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-10 pt-4 md:gap-10 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        {eventMoments.map((moment, index) => (
          <figure
            key={moment.src}
            className={`w-60 shrink-0 snap-center rounded-sm bg-white p-3 pb-4 shadow-[0_20px_45px_-20px_rgba(53,26,20,0.5)] transition duration-500 hover:z-10 hover:rotate-0 hover:scale-[1.04] md:w-72 ${
              tilts[index % tilts.length]
            }`}
          >
            <img
              src={moment.src}
              alt={moment.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-3 text-center font-hand text-2xl leading-tight text-foreground/80">
              {moment.label}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="px-6 text-center font-hand text-xl text-muted-foreground md:hidden">← wischen →</p>
    </section>
  );
}

/* --------------------------------------------------------------- Reviews */

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
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Gästestimmen</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Was <span className="text-gradient-warm">in Erinnerung</span> bleibt.
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Gutes Essen verbindet. Die schönsten Rückmeldungen sind die, bei denen man merkt: Der
            Abend war mehr als nur ein Menü.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 120}>
              <figure className="h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-warm">
                <img
                  src={review.image}
                  alt={review.alt}
                  width={1600}
                  height={1067}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-7 md:p-8">
                  <div className="flex gap-1 text-primary" role="img" aria-label="5 von 5 Sternen">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} aria-hidden="true" className="h-4 w-4" fill="currentColor" />
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
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Diese Stimmen sind Gestaltungsbeispiele und werden durch echte Kundenrezensionen ersetzt.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Gallery teaser */

function GalleryTeaser() {
  const [table, dessert, salad, kitchen, octopus, more] = [0, 8, 5, 2, 1, 9].map(
    (index) => galleryItems[index],
  );
  const remaining = galleryItems.length - 5;

  return (
    <section id="galerie" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Galerie</p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Ein Blick in <em className="text-gradient-warm not-italic">meine Welt</em>.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Momente, Teller, Menschen. Entdecke noch mehr Eindrücke in der großen Galerie.
          </p>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:auto-rows-[230px] md:grid-cols-12 md:gap-5"
        >
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
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Process */

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
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-secondary">So einfach geht’s</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Von der ersten Idee bis zum <span className="text-gradient-warm">großen Genuss</span>.
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Persönlich geplant, transparent vorbereitet und mit viel Herz umgesetzt.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-5 md:grid-cols-4 md:gap-4">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t-2 border-dashed border-primary/30 md:block"
          />
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 140}
              className="relative rounded-3xl border border-border bg-card p-7 md:border-0 md:bg-transparent md:p-4 md:text-center"
            >
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-sm transition duration-300 hover:-rotate-6 hover:scale-105 md:mx-auto">
                <step.icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.5} />
                <span className="absolute -right-2 -top-2 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-foreground/75">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Contact */

function Contact() {
  return (
    <section id="kontakt" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-warm p-10 shadow-warm md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <OliveBranch className="pointer-events-none absolute -bottom-6 right-6 hidden w-48 text-white/20 md:block" />
            <div className="relative">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/80">Kontakt</p>
              <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
                Lass uns reden.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-white/90">
                Jedes Event ist anders – und das Beste entsteht im Gespräch. Schreib mir kurz, was
                du planst, und ich melde mich bei dir.
              </p>

              <form
                className="mt-10 grid gap-4 md:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  const data = new FormData(event.currentTarget);
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
                  className="rounded-full bg-background px-7 py-3.5 text-base font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-background/90 md:col-span-2"
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
              <p className="mt-8 font-hand text-3xl text-white">Ich freu mich auf dich! – Fran</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
