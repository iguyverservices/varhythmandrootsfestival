import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import epalmer from "@/assets/sponsor-epalmer.jpg";
import mpisland from "@/assets/sponsor-mpisland.jpg";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — VA Rhythm & Roots Festival" },
      { name: "description", content: "Meet the local sponsors making VA Rhythm & Roots Festival possible. Become a sponsor for the 2026 event." },
      { property: "og:title", content: "Our Sponsors — VA Rhythm & Roots" },
      { property: "og:description", content: "Local businesses powering the festival." },
    ],
  }),
  component: Sponsors,
});

const sponsors = [
  { name: "E. Palmer Supermarket", logo: epalmer, url: "#" },
  { name: "MP Island Cafe", logo: mpisland, url: "#" },
];

function Sponsors() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-accent to-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="font-display text-5xl md:text-6xl">Our Sponsors</h1>
          <p className="mt-3 text-lg opacity-90">Local businesses powering the festival.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((s) => (
            <a key={s.name} href={s.url} className="group rounded-2xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center aspect-[4/3]">
              <img src={s.logo} alt={`${s.name} logo`} className="max-h-32 object-contain group-hover:scale-105 transition-transform" />
            </a>
          ))}
          <div className="rounded-2xl border-2 border-dashed border-accent/60 bg-accent/10 p-8 flex flex-col items-center justify-center text-center aspect-[4/3]">
            <p className="font-display text-2xl text-foreground">Your logo here</p>
            <p className="mt-1 text-sm text-muted-foreground">Become a 2026 sponsor</p>
            <Button asChild className="mt-3" size="sm">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 text-center">
        <h2 className="font-display text-3xl">Become a sponsor</h2>
        <p className="mt-2 text-muted-foreground">
          Put your brand in front of thousands of Virginia Beach families. Tiered packages
          available — let's talk.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Button asChild><a href="mailto:varhythmrootsfestival@gmail.com?subject=Sponsorship%20Inquiry">Email us</a></Button>
          <Button asChild variant="outline"><a href="tel:7572301562">Call 757-230-1562</a></Button>
        </div>
      </section>
    </PageShell>
  );
}
