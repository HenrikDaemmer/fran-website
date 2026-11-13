/**
 * Alle Bilder der Seite an einem Ort.
 * Die Fotos liegen in /public/images (aus dem Dropbox-Ordner, für das Web verkleinert).
 * Bild tauschen = Dateiname ändern. Beschriftungen (label) erscheinen beim Hover.
 */

export type ImageItem = {
  src: string;
  alt: string;
  label: string;
  ratio?: string;
};

const img = (n: string) => `${import.meta.env.BASE_URL}images/fran-${n}.jpg`;
/** Handyfotos von echten Events (aus dem Ordner „untitled folder“) */
const photo = (name: string) => `${import.meta.env.BASE_URL}images/${name}.jpg`;

export const heroImage = img("73");
export const portraitImage = photo("fran-kueche");
export const kitchenBwImage = img("78");

/** Karussell „Meine Küche“ */
export const dishes: ImageItem[] = [
  { src: img("23"), alt: "Gegrillter Oktopus mit gegrillter Zitrone", label: "Oktopus & gegrillte Zitrone" },
  { src: img("13"), alt: "Gebratenes Fischfilet mit Möhren und Kräuteröl", label: "Fischfilet, Möhren & Kräuteröl" },
  { src: img("50"), alt: "Rotweinbirne mit Brioche in einer weißen Schale", label: "Rotweinbirne & Brioche" },
  { src: img("25"), alt: "Rote-Bete-Creme mit Ofengemüse und Fenchel", label: "Rote Bete & Ofengemüse" },
  { src: img("61"), alt: "Dessert mit frischen Orangenfilets auf Biskuit", label: "Orangen, Creme & Biskuit" },
  { src: img("43"), alt: "Geschmortes Rindfleisch mit Püree und Feldsalat vor Weinfässern", label: "Geschmortes Rind & Püree" },
  { src: img("20"), alt: "Cremesuppe mit Croûtons und lila Kartoffelchips", label: "Cremesuppe & Croûtons" },
];

/** Bilder für „Was ich für dich tue“ */
export const serviceImages = {
  private: photo("event-grazing"),
  wedding: photo("event-tafel"),
  business: photo("event-buffet"),
  wine: photo("event-vinothek"),
};

/** Bilder für „Gästestimmen“ */
export const reviewImages = {
  wine: img("74"),
};

/** Galerie: professionelle Fotos von Luca – Index 0, 1, 2, 5, 8, 9 erscheinen auch als Vorschau auf der Startseite */
export const galleryItems: ImageItem[] = [
  { src: img("71"), alt: "Reich gedeckter Tisch mit Oktopus, Brot, Salat und Desserts", label: "Die ganze Tafel", ratio: "aspect-[4/3]" },
  { src: img("23"), alt: "Gegrillter Oktopus mit Zitrone", label: "Oktopus & gegrillte Zitrone", ratio: "aspect-[4/5]" },
  { src: img("79"), alt: "Schwarz-weiß-Aufnahme: Fran schneidet in der Küche", label: "Handarbeit in der Küche", ratio: "aspect-[3/4]" },
  { src: img("41"), alt: "Drei Gerichte auf einem Holztisch", label: "Gäste, Genuss, Gespräche", ratio: "aspect-[4/3]" },
  { src: img("07"), alt: "Cremesuppe umringt von kleinen Tartelettes auf rotem Grund", label: "Suppe & Tartelettes", ratio: "aspect-square" },
  { src: img("58"), alt: "Salat mit Linsen, Apfel und Ziegenkäse auf gelbem Grund", label: "Linsensalat, Apfel & Ziegenkäse", ratio: "aspect-[4/3]" },
  { src: img("22"), alt: "Fischfilet mit Kresse in Nahaufnahme", label: "Mit Liebe zum Detail", ratio: "aspect-[4/5]" },
  { src: img("76"), alt: "Gedeckter Tisch von oben", label: "Teilen, probieren, genießen", ratio: "aspect-[3/4]" },
  { src: img("61"), alt: "Dessert mit Orangenfilets auf Biskuit", label: "Orangen, Creme & Biskuit", ratio: "aspect-square" },
  { src: img("54"), alt: "Rotweinbirne vor grünem Hintergrund", label: "Rotweinbirne & Brioche", ratio: "aspect-[4/5]" },
  { src: img("29"), alt: "Rote-Bete-Creme mit Ofengemüse auf grünem Grund", label: "Rote Bete & Ofengemüse", ratio: "aspect-[4/3]" },
  { src: img("44"), alt: "Geschmortes Rind vor Weinfässern", label: "Zwischen den Fässern", ratio: "aspect-[3/4]" },
  { src: img("66"), alt: "Zwei Gerichte auf gelbem und rotem Grund", label: "Farbe auf dem Teller", ratio: "aspect-[4/3]" },
  { src: img("77"), alt: "Weinfass der Vinothek Sauer", label: "Vinothek Sauer, Landau", ratio: "aspect-[3/4]" },
  { src: img("03"), alt: "Zwei herzhafte Blätterteig-Tartelettes", label: "Herzhafte Tartelettes", ratio: "aspect-[4/3]" },
  { src: img("38"), alt: "Geschmortes Rind mit Püree auf grünen Fliesen", label: "Geschmortes Rind & Püree", ratio: "aspect-square" },
  { src: img("67"), alt: "Orangen-Dessert auf hellblauem Grund", label: "Leicht & fruchtig", ratio: "aspect-[4/3]" },
  { src: img("19"), alt: "Oktopus in dramatischem Licht", label: "Oktopus im Abendlicht", ratio: "aspect-[3/4]" },
];

/** Galerie: Schnappschüsse von echten Events (Handyfotos) */
export const snapshotItems: ImageItem[] = [
  { src: photo("event-anrichten"), alt: "Fran richtet eine lange Reihe Dessertteller an", label: "Kurz vor dem Servieren" },
  { src: photo("event-tafel"), alt: "Festlich gedeckte lange Tafel mit Blumen und Kerzen", label: "Festlich gedeckte Tafel" },
  { src: photo("event-fingerfood"), alt: "Fingerfood-Buffet mit Focaccia und Spießen", label: "Fingerfood zum Ankommen" },
  { src: photo("event-grazing"), alt: "Grazing Board mit Käse, Wurst und Obst", label: "Grazing Board" },
  { src: photo("event-burrata"), alt: "Burrata auf roten Beeten", label: "Burrata in Serie" },
  { src: photo("event-buffet"), alt: "Langes Buffet mit vielen Schalen", label: "Buffet für viele Gäste" },
  { src: photo("event-beerentarte"), alt: "Tarte mit Beeren und Sahnespirale", label: "Beerentarte" },
  { src: photo("event-antipasti"), alt: "Antipasti-Platten", label: "Antipasti für alle" },
  { src: photo("event-vinothek"), alt: "Kleine Gerichte und Wein auf dem Tisch", label: "Kleine Teller & Wein" },
  { src: photo("event-sardellen"), alt: "Marinierte Sardellen in einer roten Schale", label: "Marinierte Sardellen" },
  { src: photo("event-desserts"), alt: "Viele Teller mit Schichtdessert und Beeren", label: "Dessert für alle" },
  { src: photo("event-teller"), alt: "Knusprige Vorspeise auf Gemüse", label: "Gleich geht's raus!" },
  { src: photo("event-garnelensuppe"), alt: "Suppe mit Garnelenspießen", label: "Suppe & Garnelen" },
  { src: photo("event-tablett"), alt: "Tablett mit gefüllten Paprika", label: "Frisch auf dem Tablett" },
  { src: photo("event-bluetendessert"), alt: "Dessert mit essbaren Blüten", label: "Mit Blüten" },
];

/** Name für die Bildnachweise */
export const PHOTOGRAPHER = "Luca";

/** „Aus echten Events“ – Polaroid-Leiste mit handschriftlichen Notizen */
export const eventMoments: ImageItem[] = [
  { src: photo("event-anrichten"), alt: "Fran richtet eine lange Reihe Dessertteller mit Blüten an", label: "60 Teller, ein Lächeln" },
  { src: photo("event-fingerfood"), alt: "Fingerfood-Buffet mit Focaccia, Tomaten- und Olivenspießen", label: "Fingerfood zum Ankommen" },
  { src: photo("event-burrata"), alt: "Burrata auf roten Beeten, im Hintergrund weitere Teller", label: "Burrata in Serie" },
  { src: photo("event-antipasti"), alt: "Antipasti-Platten auf weißer Tischdecke", label: "Antipasti für alle" },
  { src: photo("event-teller"), alt: "Knusprig gebackene Vorspeise auf Gemüse, viele Teller", label: "Gleich geht's raus!" },
  { src: photo("event-sardellen"), alt: "Marinierte Sardellen in einer roten Keramikschale", label: "Ein Gruß aus dem Süden" },
  { src: photo("event-desserts"), alt: "Viele Teller mit Schichtdessert und Beeren", label: "Dessert für die ganze Gesellschaft" },
  { src: photo("event-tablett"), alt: "Tablett mit gefüllten Paprika wird getragen", label: "Frisch auf dem Tablett" },
  { src: photo("event-bluetendessert"), alt: "Dessert mit essbaren Blüten", label: "Mit Blüten" },
  { src: photo("event-garnelensuppe"), alt: "Suppe mit Garnelenspießen", label: "Suppe & Garnelen" },
];
