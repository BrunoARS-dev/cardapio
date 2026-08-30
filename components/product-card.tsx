import Image from "next/image";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/types/menu";

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function ProductCard({ item, onAdd, reverse }: { item: MenuItem; onAdd: (item: MenuItem) => void; reverse: boolean }) {
  return (
    <article className={`product-card ${reverse ? "reverse" : ""} ${!item.disponivel ? "unavailable" : ""}`}>
      <div className="product-image">
        <Image src={item.imagem} alt={`${item.nome} servido pelo restaurante`} fill sizes="(max-width: 700px) 42vw, (max-width: 1200px) 44vw, 480px" quality={80} />
        {!item.disponivel ? <span className="availability-label" role="status">Indisponível no momento</span> : null}
      </div>
      <div className="product-copy" aria-disabled={!item.disponivel}>
        {item.destaque ? <span className="featured-label">Destaque da casa</span> : null}
        <h3>{item.nome}</h3>
        <p>{item.descricao}</p>
        <div className="product-footer">
          <strong>{currency.format(item.preco)}</strong>
          <button onClick={() => onAdd(item)} aria-label={item.disponivel ? `Adicionar ${item.nome}` : `${item.nome} indisponível`} disabled={!item.disponivel}>
            {item.disponivel ? <><Plus size={16} /> <span>Adicionar</span></> : <span>Indisponível</span>}
          </button>
        </div>
      </div>
    </article>
  );
}
