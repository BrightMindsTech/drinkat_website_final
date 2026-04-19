/**
 * About section blocks — `title` is the subsection heading; `subtitle` is a short line under it; `body` is the main copy. Use \n\n in `body` for paragraph breaks.
 */
export type HeroSlide = {
  title: string;
  /** Short line under the title — set for every slide for a consistent hierarchy */
  subtitle: string;
  body: string;
  /** Optional — renders as tel/mailto buttons below the body */
  contact?: {
    phone: string;
    email: string;
  };
};

export const heroSlides: HeroSlide[] = [
  {
    title: "Our story",
    subtitle: "You know the question — we know the answer.",
    body:
      "Drinkat is a modern lifestyle brand for a bold, energetic generation. Great coffee, fresh juices, and signature smash burgers fuel a vibrant social space where youth culture and connection meet — a go-to for students and young professionals who want quality, convenience, and a place that feels like home.",
  },
  {
    title: "Ingredients & quality",
    subtitle: "Fresh ingredients, every time",
    body:
      "At Drinkat, quality starts with our ingredients. We use carefully selected coffee beans, fresh fruits, and premium components in every item to ensure consistent taste, freshness, and flavor you can trust.",
  },
  {
    title: "Our team",
    subtitle: "Built by students, for students",
    body:
      "At Drinkat, our team is made up of university students who bring real energy, ambition, and authenticity to the brand. By empowering youth with work opportunities, we create a welcoming environment built by students, for students making every visit feel relatable, lively, and genuine.",
  },
  {
    title: "Partnerships & catering",
    subtitle: "Marketing & contact",
    body:
      "For sponsorships, events, and catering opportunities, please contact our Marketing Department. We're always open to collaborations and partnerships that bring value, creativity, and memorable experiences to our community.",
    contact: {
      phone: "0781692833",
      email: "drinkatjo@gmail.com",
    },
  },
];
