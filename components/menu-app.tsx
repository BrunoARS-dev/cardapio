"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { CartDrawer } from "@/components/cart-drawer";
import { CategoryNav } from "@/components/category-nav";
import { ProductCard } from "@/components/product-card";
import { SiteHeader } from "@/components/site-header";
import type { RestaurantConfig } from "@/config/restaurant";
import type { CartItem, Category, CheckoutDetails, MenuItem } from "@/types/menu";

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function MenuApp({ categories, items, restaurant }: { categories: Category[]; items: MenuItem[]; restaurant: RestaurantConfig }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  useEffect(() => {
    const sections = categories.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveCategory(visible.target.id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cartOpen]);

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.preco * item.quantity, 0), [cart]);
  const count = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  function addItem(item: MenuItem) {
    if (!item.disponivel) return;
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      return existing
        ? current.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry)
        : [...current, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function changeQuantity(id: string, delta: number) {
    setCart((current) => current.flatMap((item) => item.id !== id ? [item] : item.quantity + delta > 0 ? [{ ...item, quantity: item.quantity + delta }] : []));
  }

  function finishOrder(details: CheckoutDetails) {
    if (!cart.length || !details.customerName.trim() || !details.paymentMethod) return;

    const lines = cart.map((item) => (
      `• ${item.quantity}x ${item.nome}\n  Subtotal: ${currency.format(item.preco * item.quantity)}`
    ));
    const messageParts = [
      `*Novo pedido — ${restaurant.name}*`,
      "",
      `*Cliente:* ${details.customerName.trim()}`,
      `*Forma de pagamento:* ${details.paymentMethod}`,
      "",
      "*Itens do pedido:*",
      ...lines,
      "",
      `*Total: ${currency.format(total)}*`,
    ];

    if (details.notes.trim()) {
      messageParts.push("", `*Observações:* ${details.notes.trim()}`);
    }

    const encodedMessage = encodeURIComponent(messageParts.join("\n"));
    window.open(`https://wa.me/${restaurant.whatsappNumber}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
  }

  const theme = {
    "--color-background": restaurant.colors.background,
    "--color-surface": restaurant.colors.surface,
    "--color-text": restaurant.colors.text,
    "--color-muted": restaurant.colors.mutedText,
    "--color-accent": restaurant.colors.accent,
    "--color-whatsapp": restaurant.colors.whatsapp,
    "--color-border": restaurant.colors.border,
  } as CSSProperties;

  return (
    <div id="top" style={theme}>
      <a className="skip-link" href="#cardapio">Pular para o cardápio</a>
      <SiteHeader name={restaurant.name} logo={restaurant.logo} whatsapp={restaurant.whatsappNumber} cartCount={count} onCartOpen={() => setCartOpen(true)} />
      <main>
        <section className="hero">
          <Image src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90" alt="Prato da casa preparado na brasa com legumes e ervas frescas" fill priority quality={85} sizes="100vw" />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1>{restaurant.tagline}</h1>
            <a href={`#${categories[0].id}`}>Conheça o cardápio <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </section>
        <CategoryNav categories={categories} active={activeCategory} />
        <div className="menu-container" id="cardapio">
          {categories.map((category) => {
            const categoryItems = items.filter((item) => item.categoria === category.id);
            return (
              <section className="menu-section" id={category.id} key={category.id}>
                <div className="section-heading">
                  <span>{String(categories.indexOf(category) + 1).padStart(2, "0")}</span>
                  <h2>{category.nome}</h2>
                </div>
                {categoryItems.map((item, index) => <ProductCard key={item.id} item={item} onAdd={addItem} reverse={index % 2 === 1} />)}
              </section>
            );
          })}
        </div>
      </main>
      <button className={`floating-cart ${count ? "show" : ""}`} onClick={() => setCartOpen(true)}>
        <span>Ver pedido</span><strong>{count} {count === 1 ? "item" : "itens"}</strong>
      </button>
      <CartDrawer items={cart} open={cartOpen} total={total} onClose={() => setCartOpen(false)} onChange={changeQuantity} onRemove={(id) => setCart((current) => current.filter((item) => item.id !== id))} onFinish={finishOrder} />
      <footer>
        <Image src={restaurant.logo.src} alt="" width={48} height={48} />
        <span>{restaurant.name}</span>
        <p>{restaurant.address}</p>
        <p>{restaurant.openingHours}</p>
      </footer>
    </div>
  );
}
