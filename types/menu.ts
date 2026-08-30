export type Category = {
  id: string;
  nome: string;
};

export type MenuItem = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: Category["id"];
  imagem: string;
  disponivel: boolean;
  destaque?: boolean;
};

export type CartItem = MenuItem & { quantity: number };

export type CheckoutDetails = {
  customerName: string;
  paymentMethod: string;
  notes: string;
};
