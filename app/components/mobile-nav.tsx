"use client";

import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Our services", href: "#services" },
  { label: "Conditions we treat", href: "#conditions" },
  { label: "Contact", href: "#contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-menu-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
      </button>

      {isOpen ? (
        <div className="mobile-menu-panel" id="mobile-navigation">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button-primary mobile-call" href="tel:0244276414" onClick={() => setIsOpen(false)}>
            <PhoneCall size={16} strokeWidth={1.8} aria-hidden="true" />
            Book an appointment
          </a>
        </div>
      ) : null}
    </div>
  );
}
