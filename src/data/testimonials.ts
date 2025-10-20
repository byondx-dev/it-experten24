export interface Testimonial {
  quote: string;
  author: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "„Der Techniker war super geduldig und hat mir alles verständlich erklärt. Jetzt klappt Online-Banking wieder und ich fühle mich sicher.“",
    author: "– Maria L., 72 Jahre, München Schwabing",
  },
  {
    quote:
      "„Wir hatten ständig WLAN-Probleme im Reihenhaus. Nach einem Besuch läuft alles stabil, sogar im Garten. Klare Empfehlung!“",
    author: "– Familie Becker, München Trudering",
  },
  {
    quote:
      "„Fernwartung innerhalb von Minuten – mein Drucker funktioniert wieder, und ich habe Tipps für die Zukunft bekommen.“",
    author: "– Thomas K., Freising",
  },
];
