import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#stack", label: "Stack" },
  { href: "#services", label: "Services" },
];

export default function MobileNav() {
  return (
    <Disclosure as="div" className="md:hidden">
      <DisclosureButton
        aria-label="Toggle menu"
        data-testid="mobile-menu-button"
        className="rounded-md border border-surface-border px-3 py-2 text-text-primary"
      >
        Menu
      </DisclosureButton>
      <DisclosurePanel
        data-testid="mobile-menu-panel"
        className="absolute left-0 right-0 mt-2 flex flex-col gap-1 border-y border-surface-border bg-surface-content px-6 py-4"
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} className="py-2 text-text-secondary hover:text-text-primary">
            {l.label}
          </a>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
