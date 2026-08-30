import Image from "next/image";
import { MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CartItem, CheckoutDetails } from "@/types/menu";

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

type Props = {
  items: CartItem[];
  open: boolean;
  total: number;
  onClose: () => void;
  onChange: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onFinish: (details: CheckoutDetails) => void;
};

export function CartDrawer({ items, open, total, onClose, onChange, onRemove, onFinish }: Props) {
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [notes, setNotes] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const canFinish = items.length > 0 && customerName.trim().length > 0 && paymentMethod.length > 0;

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  return (
    <>
      <button className={`cart-backdrop ${open ? "visible" : ""}`} onClick={onClose} aria-label="Fechar carrinho" tabIndex={open ? 0 : -1} />
      <aside className={`cart-drawer ${open ? "open" : ""}`} aria-hidden={!open} inert={!open} aria-labelledby="cart-title" role="dialog" aria-modal="true">
        <div className="drawer-handle" />
        <div className="cart-heading">
          <div><span id="cart-title">Seu pedido</span><small aria-live="polite">{items.reduce((sum, item) => sum + item.quantity, 0)} itens</small></div>
          <button ref={closeButtonRef} onClick={onClose} aria-label="Fechar carrinho"><X size={22} aria-hidden="true" /></button>
        </div>
        <div className="cart-list">
          {items.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={34} />
              <h3>Seu carrinho está vazio</h3>
              <p>Escolha seus pratos favoritos e eles aparecem aqui.</p>
              <button className="continue-button" onClick={onClose}>Continuar escolhendo</button>
            </div>
          ) : items.map((item) => (
            <article className="cart-row" key={item.id}>
              <Image src={item.imagem} width={64} height={64} sizes="64px" alt={`${item.nome} no carrinho`} />
              <div className="cart-item-copy">
                <h3>{item.nome}</h3>
                <strong>{currency.format(item.preco)}</strong>
                <div className="quantity-control">
                  <button onClick={() => onChange(item.id, -1)} aria-label={`Diminuir ${item.nome}`}><Minus size={14} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onChange(item.id, 1)} aria-label={`Aumentar ${item.nome}`}><Plus size={14} /></button>
                </div>
              </div>
              <div className="cart-row-end">
                <button onClick={() => onRemove(item.id)} aria-label={`Remover ${item.nome}`}><Trash2 size={16} /></button>
                <span>{currency.format(item.preco * item.quantity)}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="cart-summary">
          {items.length > 0 ? (
            <div className="checkout-fields">
              <label>
                <span>Seu nome <b aria-hidden="true">*</b></span>
                <input
                  type="text"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  placeholder="Como podemos chamar você?"
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                <span>Forma de pagamento <b aria-hidden="true">*</b></span>
                <select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)} required>
                  <option value="">Selecione uma opção</option>
                  <option value="Pix">Pix</option>
                  <option value="Cartão de crédito">Cartão de crédito</option>
                  <option value="Cartão de débito">Cartão de débito</option>
                  <option value="Dinheiro">Dinheiro</option>
                </select>
              </label>
              <label>
                <span>Observações <small>(opcional)</small></span>
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Ex.: retirar cebola, ponto da carne..."
                  rows={2}
                />
              </label>
              {!canFinish ? <p className="checkout-hint">Informe seu nome e a forma de pagamento para continuar.</p> : null}
            </div>
          ) : null}
          <div><span>Total</span><strong>{currency.format(total)}</strong></div>
          <button
            className="finish-button"
            onClick={() => onFinish({ customerName, paymentMethod, notes })}
            disabled={!canFinish}
          >
            <MessageCircle size={19} /> Finalizar no WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}
