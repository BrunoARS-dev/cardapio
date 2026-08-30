export type RestaurantConfig = {
  name: string;
  tagline: string;
  logo: {
    src: string;
    alt: string;
  };
  colors: {
    background: string;
    surface: string;
    text: string;
    mutedText: string;
    accent: string;
    whatsapp: string;
    border: string;
  };
  whatsappNumber: string;
  address: string;
  openingHours: string;
  seo: {
    title: string;
    description: string;
  };
};

export const restaurantConfig: RestaurantConfig = {
  name: "Brasa & Manjericão",
  tagline: "Feito no fogo, servido com afeto.",
  logo: {
    src: "/logo.svg",
    alt: "Símbolo do restaurante Brasa & Manjericão",
  },
  colors: {
    background: "#f7f3eb",
    surface: "#fffdfa",
    text: "#1c1b18",
    mutedText: "#5b574f",
    accent: "#a83f20",
    whatsapp: "#2f6039",
    border: "#d9d1c4",
  },
  whatsappNumber: "5571986249600",
  address: "Rua das Oliveiras, 128 — Centro, São Paulo — SP",
  openingHours: "Terça a domingo, das 18h às 23h",
  seo: {
    title: "Brasa & Manjericão | Cardápio digital",
    description:
      "Conheça o cardápio do Brasa & Manjericão e faça seu pedido diretamente pelo WhatsApp.",
  },
} as const;
