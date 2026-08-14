import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const EVENTBRITE = "https://varhythmandrootsfestival.eventbrite.com";

const nav = [
  { to: "/", label: "Home" },
  { to: "/lineup", label: "Lineup" },
  { to: "/info", label: "Event Info" },
  { to: "/sponsors", label: "Sponsors" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-primary via-accent to-secondary" />
          <span className="font-display text-xl tracking-wide">VA Rhythm &amp; Roots</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer">Rent a Shelter</a>
          </Button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer">Rent a Shelter</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
