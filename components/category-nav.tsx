import type { Category } from "@/types/menu";

export function CategoryNav({ categories, active }: { categories: Category[]; active: string }) {
  return (
    <nav className="category-nav" aria-label="Categorias do cardápio">
      <div className="category-track">
        {categories.map((category) => (
          <a key={category.id} href={`#${category.id}`} className={active === category.id ? "active" : ""}>
            {category.nome}
          </a>
        ))}
      </div>
    </nav>
  );
}
