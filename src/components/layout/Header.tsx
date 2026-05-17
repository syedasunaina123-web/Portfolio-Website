import { navItems } from "../../models/portfolio";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="Jahanzaib home">
        Jahanzaib<span>.</span>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
