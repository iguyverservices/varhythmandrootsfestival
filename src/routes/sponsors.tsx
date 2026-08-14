import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Phone, Globe, Star, ShoppingBasket, UtensilsCrossed } from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Our Sponsors — VA Rhythm & Roots Festival 2026" },
      { name: "description", content: "Meet the sponsors making VA Rhythm & Roots Festival possible: Morring Law, E. Palmer Supermarket, and MP Island Cafe." },
      { property: "og:title", content: "Our Sponsors — VA Rhythm & Roots Festival" },
      { property: "og:description", content: "Morring Law, E. Palmer Supermarket, and MP Island Cafe support our free community festival." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sponsors,
});

function Sponsors() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-secondary to-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="font-display text-5xl md:text-6xl">Our Sponsors</h1>
          <p className="mt-3 text-lg opacity-90">
            Local partners who keep this festival free for the community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 space-y-8">
        {/* Morring Law */}
        <article className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary" />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            <Star className="size-3.5" /> Title Sponsor
          </span>
          <h2 className="mt-4 font-display text-3xl">Morring Law</h2>
          <p className="mt-1 font-semibold text-secondary">
            Where We Fight and You Win · An Injured Worker&apos;s Dream Team
          </p>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            A boutique firm with over 26 years of experience representing injured workers locally
            and nationally across Virginia, North Carolina, and New York. Specializing in
            Workers&apos; Compensation, Social Security Disability, and Longshore &amp; Defense Base
            Act claims.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild>
              <a href="tel:18556672667"><Phone className="size-4" />1-855-MOR-COMP</a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.MorringLaw.com" target="_blank" rel="noopener noreferrer">
                <Globe className="size-4" />www.MorringLaw.com
              </a>
            </Button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">1-855-667-2667</p>
        </article>

        {/* E. Palmer Supermarket */}
        <article className="rounded-2xl border bg-card p-8 shadow-sm">
          <ShoppingBasket className="text-primary" />
          <h2 className="mt-3 font-display text-3xl">E. Palmer Supermarket</h2>
          <p className="mt-1 font-semibold text-secondary">Serving the Community with Pride</p>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            An independently owned, veteran-founded, and minority-owned full-service supermarket
            founded by Mike Palmer and Esron Palmer, serving Norfolk and surrounding areas with
            quality products and affordable prices.
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-sm text-foreground/90">
            {[
              "Fresh Fruits & Veggies — 50% OFF with EBT",
              "In-House Butcher — fresh meats cut daily",
              "Caribbean & International Groceries",
              "Household Essentials",
              "Weekly Specials",
            ].map((item) => (
              <li key={item} className="rounded-lg bg-accent/15 px-3 py-2">{item}</li>
            ))}
          </ul>
        </article>

        {/* MP Island Cafe */}
        <article className="rounded-2xl border bg-card p-8 shadow-sm">
          <UtensilsCrossed className="text-primary" />
          <h2 className="mt-3 font-display text-3xl">MP Island Cafe</h2>
          <p className="mt-1 font-semibold text-secondary">Featured Partner</p>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            Bringing authentic island flavors and cuisine to the festival.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
