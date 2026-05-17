import { useMemo } from "react";
import { navItems } from "../../models/portfolio";

export function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <a className="brand" href="#hero">
        Jahanzaib<span>.</span>
      </a>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
      <p>© {currentYear} Jahanzaib. Designer & Full-Stack Developer.</p>
    </footer>
  );
}
