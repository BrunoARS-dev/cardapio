import Image from "next/image";
import { MessageCircle, ShoppingBag } from "lucide-react";

type Props = {
  name: string;
  logo: { src: string; alt: string };
  whatsapp: string;
  cartCount: number;
  onCartOpen: () => void;
};

export function SiteHeader({ name, logo, whatsapp, cartCount, onCartOpen }: Props) {
  return (
    <header className="header-shell">
      <a className="brand" href="#top" aria-label={`${name}, início`}>
        <Image src={logo.src} alt={logo.alt} width={42} height={42} priority />
        <span>{name}</span>
      </a>
      <div className="header-actions">
        <a className="whatsapp-link" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
          <MessageCircle size={17} aria-hidden="true" />
          <span>Falar no WhatsApp</span>
        </a>
        <button className="cart-icon" onClick={onCartOpen} aria-label={`Abrir carrinho, ${cartCount} itens`}>
          <ShoppingBag size={21} aria-hidden="true" />
          {cartCount > 0 ? <span aria-hidden="true">{cartCount}</span> : null}
        </button>
      </div>
    </header>
  );
}
