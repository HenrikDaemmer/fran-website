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

const img = (n: string) => `/images/fran-${n}.jpg`;

export const heroImage = img("73");
export const portraitImage = img("78");

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
  private: img("72"),
  wedding: img("64"),
  business: img("70"),
  wine: img("43"),
};

/** Bilder für „Gästestimmen“ */
export const reviewImages = {
  family: img("75"),
  wedding: img("63"),
  wine: img("74"),
};

/** Galerie – Index 0, 1 und 8 erscheinen auch als Vorschau auf der Startseite */
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
