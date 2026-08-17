import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

const EVENTBRITE = "https://varhythmandrootsfestival.eventbrite.com";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">VA Rhythm &amp; Roots Festival</h3>
          <p className="mt-2 text-sm opacity-90">
            Mount Trashmore Park · 310 Edwin Drive, Virginia Beach, VA
            <br />
            Saturday, August 22, 2026 · 11:00 AM – 6:30 PM
          </p>
        </div>
        <div className="text-sm space-y-1">
          <p className="font-semibold uppercase tracking-wide text-accent">General Info</p>
          <p>Phone: <a className="underline" href="tel:7572301562">757-230-1562</a></p>
          <p>Email: <a className="underline" href="mailto:varhythmrootsfestival@gmail.com">varhythmrootsfestival@gmail.com</a></p>
          <p className="mt-3 font-semibold uppercase tracking-wide text-accent">Follow Us</p>
          <p className="flex items-center gap-2">
            <Instagram className="size-4" />
            <a className="hover:underline" href="https://instagram.com/varhythmandrootsfestival" target="_blank" rel="noopener noreferrer">@varhythmandrootsfestival</a>
          </p>
          <p className="flex items-center gap-2">
            <Facebook className="size-4" />
            <a className="hover:underline" href="https://www.facebook.com/Mpislandcaferestaurant" target="_blank" rel="noopener noreferrer">VA Rhythm &amp; Roots Festival</a>
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold uppercase tracking-wide text-accent">Quick Links</p>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/lineup" className="hover:underline">Lineup</Link></li>
            <li>
              <a className="hover:underline" href={EVENTBRITE} target="_blank" rel="noopener noreferrer">
                Shelter Rentals (Eventbrite)
              </a>
            </li>
            <li><Link to="/sponsors" className="hover:underline">Sponsors</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-80">
        © 2026 VA Rhythm &amp; Roots Festival. All rights reserved. · varhythmandrootsfestival.com
      </div>
    </footer>
  );
}
