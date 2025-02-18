import type { NavigationItem } from "~/models";

export function useHeaderNavigation() {
  const navigationItems = ref<NavigationItem[]>([
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/test", label: "Test" },
  ]);

  return {
    navigationItems,
  };
}
