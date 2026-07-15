import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Users, Utensils, PartyPopper } from "lucide-react";
import flyer from "@/assets/festival-flyer-2026.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VA Rhythm & Roots Festival 2026 — Aug 22, Virginia Beach" },
      { name: "description", content: "Free, all-ages festival at Mt Trashmore Park: R&B, Reggae, Soca & Afrobeat, line dancing, food trucks, art vendors, and family fun." },
      { property: "og:title", content: "VA Rhythm & Roots Festival 2026" },
      { property: "og:description", content: "Come for R&B, stay for Reggae. Aug 22, 2026 · Mt Trashmore Park, Virginia Beach." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center text-primary-foreground">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              Saturday · August 22, 2026
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-none">
              VA Rhythm &amp; Roots Festival
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Come for <span className="text-accent font-semibold">R&amp;B</span>, stay for{" "}
              <span className="text-accent font-semibold">Reggae</span>. Live bands, DJs, food
              trucks, art vendors, and family fun at Mt Trashmore Park, Virginia Beach.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/info">RSVP a Shelter</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/vendors">Become a Vendor</Link>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2"><Calendar className="mt-0.5 text-accent" /><div><div className="font-semibold">11 AM – 7 PM</div><div className="opacity-80">Saturday, Aug 22, 2026</div></div></div>
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 text-accent" /><div><div className="font-semibold">Mt Trashmore Park</div><div className="opacity-80">310 Edwin Dr, Virginia Beach</div></div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/40 blur-2xl" />
            <img src={flyer} alt="VA Rhythm & Roots Festival 2026 flyer" className="relative w-full rounded-2xl shadow-2xl ring-4 ring-accent/60" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-4xl text-center">What to expect</h2>
        <p className="mt-2 text-center text-muted-foreground">Free · All ages · One unforgettable day</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Music, title: "Live Music & DJs", body: "R&B band & DJs 11a–4p, then Reggae, Soca & Afrobeat 4p–7p." },
            { icon: Users, title: "Line Dancing", body: "Kick it off with line dancing from 11a–1p." },
            { icon: Utensils, title: "Food Trucks", body: "Soul food, seafood, and Caribbean cuisine on site." },
            { icon: PartyPopper, title: "Family Fun", body: "Face painting, bounce house, and art & craft vendors." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="text-primary" />
              <h3 className="mt-3 font-display text-xl">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bring-your-own + RSVP */}
      <section className="bg-accent/15">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-4xl">Plan your day</h2>
            <ul className="mt-4 space-y-2 text-foreground/90">
              <li>• <strong>Only lawn chairs allowed</strong> — please leave canopies & tents at home.</li>
              <li>• <strong>Shelters available to RSVP</strong> for groups and families.</li>
              <li>• Free admission, all ages welcome.</li>
              <li>• Bring sunscreen, a refillable water bottle, and your dancing shoes.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-card border p-6 shadow-sm">
            <h3 className="font-display text-2xl">RSVP a Shelter</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Reserve one of the park shelters for your crew. First come, first served — call or
              email and we'll lock it in.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild><Link to="/info">Shelter RSVP details</Link></Button>
              <Button asChild variant="outline"><a href="tel:7572301562">Call 757-230-1562</a></Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
