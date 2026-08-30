import { MenuApp } from "@/components/menu-app";
import { restaurantConfig } from "@/config/restaurant";
import { categories, menuItems } from "@/data/menu";

export default function Home() {
  return <MenuApp categories={categories} items={menuItems} restaurant={restaurantConfig} />;
}
