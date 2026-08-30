import type { Category, MenuItem } from "@/types/menu";

export const categories: Category[] = [
  { id: "lanches", nome: "Lanches" },
  { id: "porcoes", nome: "Porções" },
  { id: "bebidas", nome: "Bebidas" },
  { id: "sobremesas", nome: "Sobremesas" },
];

export const menuItems: MenuItem[] = [
  {
    id: "brasa-burger",
    nome: "Brasa Burger da Casa",
    descricao:
      "Blend bovino de 180 g, queijo meia-cura, cebola tostada, picles de maxixe e maionese defumada no pão brioche.",
    preco: 38,
    categoria: "lanches",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85",
    disponivel: true,
    destaque: true,
  },
  {
    id: "frango-crocante",
    nome: "Sanduíche de Frango Crocante",
    descricao:
      "Sobrecoxa empanada, creme de milho verde, repolho roxo avinagrado e molho de pimenta suave.",
    preco: 34,
    categoria: "lanches",
    imagem:
      "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=1200&q=85",
    disponivel: true,
  },
  {
    id: "vegetais-na-brasa",
    nome: "Focaccia de Vegetais na Brasa",
    descricao:
      "Abobrinha, berinjela e pimentão tostados, coalhada seca, rúcula e pesto de castanha-do-pará.",
    preco: 32,
    categoria: "lanches",
    imagem:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=85",
    disponivel: false,
  },
  {
    id: "batatas-rusticas",
    nome: "Batatas Rústicas com Aioli",
    descricao:
      "Batatas com casca, páprica defumada e alecrim, acompanhadas de aioli de limão-cravo.",
    preco: 27,
    categoria: "porcoes",
    imagem:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=85",
    disponivel: true,
  },
  {
    id: "costelinha-glaceada",
    nome: "Costelinha Glaceada",
    descricao:
      "Cubos de costelinha suína caramelizados com rapadura e cachaça, finalizados com gergelim e cebolinha.",
    preco: 46,
    categoria: "porcoes",
    imagem:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    disponivel: true,
    destaque: true,
  },
  {
    id: "pasteis-queijo",
    nome: "Pastéis de Queijo Canastra",
    descricao:
      "Seis pastéis sequinhos recheados com Canastra curado e geleia artesanal de pimenta biquinho.",
    preco: 29,
    categoria: "porcoes",
    imagem:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    disponivel: false,
  },
  {
    id: "limonada-manjericao",
    nome: "Limonada com Manjericão",
    descricao:
      "Limão-siciliano batido com manjericão fresco, mel da serra e água com gás. 400 ml.",
    preco: 14,
    categoria: "bebidas",
    imagem:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=85",
    disponivel: true,
  },
  {
    id: "mate-caju",
    nome: "Mate Gelado com Caju",
    descricao:
      "Infusão de mate tostado, suco fresco de caju, laranja-bahia e especiarias. 400 ml.",
    preco: 16,
    categoria: "bebidas",
    imagem:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=85",
    disponivel: true,
    destaque: true,
  },
  {
    id: "pudim-cafe",
    nome: "Pudim de Leite com Café",
    descricao:
      "Pudim cremoso assado lentamente, caramelo de café coado e flor de sal.",
    preco: 24,
    categoria: "sobremesas",
    imagem:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
    disponivel: true,
    destaque: true,
  },
  {
    id: "bolo-chocolate",
    nome: "Bolo Quente de Chocolate",
    descricao:
      "Chocolate 70%, centro cremoso, praliné de castanha de caju e sorvete de cumaru.",
    preco: 31,
    categoria: "sobremesas",
    imagem:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    disponivel: false,
  },
];
