import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">VA Rhythm &amp; Roots Festival</h3>
          <p className="mt-2 text-sm opacity-90">
            Mt Trashmore Park · 310 Edwin Drive, Virginia Beach
            <br />
            Saturday, August 22, 2026 · 11 AM – 7 PM
          </p>
        </div>
        <div className="text-sm space-y-1">
          <p className="font-semibold uppercase tracking-wide text-accent">General Info</p>
          <p>Phone: <a className="underline" href="tel:7572301562">757-230-1562</a></p>
          <p>Email: <a className="underline" href="mailto:varhythmrootsfestival@gmail.com">varhythmrootsfestival@gmail.com</a></p>
          <p className="mt-3 font-semibold uppercase tracking-wide text-accent">Vendor Info</p>
          <p>Phone: <a className="underline" href="tel:7572045650">757-204-5650</a></p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold uppercase tracking-wide text-accent">Quick Links</p>
          <ul className="space-y-1">
            <li><Link to="/lineup" className="hover:underline">Lineup</Link></li>
            <li><Link to="/vendors" className="hover:underline">Become a Vendor</Link></li>
            <li><Link to="/info" className="hover:underline">RSVP a Shelter</Link></li>
            <li><Link to="/sponsors" className="hover:underline">Sponsors</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-80">
        © {new Date().getFullYear()} VA Rhythm &amp; Roots Festival · varhythmandroots.com
      </div>
    </footer>
  );
}
