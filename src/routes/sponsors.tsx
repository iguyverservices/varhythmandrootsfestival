import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Phone, Globe, Star } from "lucide-react";
import morringTeam from "@/assets/morring-law-team.jpg.asset.json";
import ePalmerLogo from "@/assets/e-palmer-logo.png.asset.json";
import mpIslandLogo from "@/assets/mp-island-cafe-logo.jpg.asset.json";
import yankeeGirl from "@/assets/yankee-girl-promotions.jpg.asset.json";
import phenomenalSound from "@/assets/phenomenal-sound.png.asset.json";
import raspyUnknown from "@/assets/raspy-unknown.png.asset.json";
import toxicVibes from "@/assets/toxic-vibes.png.asset.json";
import noLimitSteppaz from "@/assets/757-no-limit-steppaz.png.asset.json";
import soulFoodKitchen from "@/assets/thee-soul-food-kitchen.jpg.asset.json";
import djChrisG from "@/assets/dj-chris-g.png.asset.json";
import djRedCarpetCapo from "@/assets/dj-red-carpet-capo.png.asset.json";
import gregGuttyBand from "@/assets/greg-gutty-band.png.asset.json";
import smilesOnFaces from "@/assets/smiles-on-faces.jpg.asset.json";
import higherLevelSound from "@/assets/higher-level-sound.jpg.asset.json";
import djGeso from "@/assets/dj-geso.jpg.asset.json";

const partners = [
  { name: "Yankee Girl Promotions", url: yankeeGirl.url },
  { name: "Phenomenal Sound R&B Band", url: phenomenalSound.url },
  { name: "Raspy & The Unknown Band", url: raspyUnknown.url },
  { name: "Toxic Vibes Sound", url: toxicVibes.url },
  { name: "757 No Limit Steppaz", url: noLimitSteppaz.url },
  { name: "Thee Soul Food Kitchen", url: soulFoodKitchen.url },
  { name: "DJ Chris G", url: djChrisG.url },
  { name: "DJ Red Carpet Capo", url: djRedCarpetCapo.url },
  { name: "Greg Gutty Band", url: gregGuttyBand.url },
  { name: "Smiles On Faces", url: smilesOnFaces.url },
  { name: "Higher Level Sound", url: higherLevelSound.url },
  { name: "DJ Geso", url: djGeso.url },
];


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
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                <Star className="size-3.5" /> Title Sponsor
              </span>
              <h2 className="mt-4 font-display text-3xl">Morring Law</h2>
              <p className="mt-1 font-semibold text-secondary">
                Where We Fight and You Win · An Injured Worker&apos;s Dream Team
              </p>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                Morring Law is a boutique firm representing injured workers locally and nationally.
                With more than 26 years of experience, we handle claims arising at shipyards, on the
                docks, and in every kind of workplace — along with Social Security disability claims,
                where we have achieved consistent success. Denied benefits are not the end of the
                road. Contact Morring Law — Where We Fight and You Win.
              </p>
              <div className="mt-5 flex flex-wrap items-start gap-3">
                <div className="flex flex-col items-center gap-1">
                  <Button asChild>
                    <a href="tel:18556672667"><Phone className="size-4" />1-855-MOR-COMP</a>
                  </Button>
                  <p className="text-sm text-muted-foreground">1-855-667-2667</p>
                </div>
                <Button asChild variant="outline">
                  <a href="https://www.MorringLaw.com" target="_blank" rel="noopener noreferrer">
                    <Globe className="size-4" />www.MorringLaw.com
                  </a>
                </Button>
              </div>
            </div>
            <img
              src={morringTeam.url}
              alt="The attorneys of Morring Law"
              loading="lazy"
              className="w-full self-start rounded-xl border object-cover md:w-72"
            />
          </div>
        </article>

        {/* E. Palmer Supermarket */}
        <article className="rounded-2xl border bg-card p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <h2 className="font-display text-3xl">E. Palmer Supermarket</h2>
              <p className="mt-1 font-semibold text-secondary">Serving the Community with Pride</p>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                E. Palmer Supermarket is an independently owned, veteran-founded, minority-owned
                supermarket founded by Mike Palmer and Esron Palmer. They take pride in bringing a
                full-service supermarket to the underserved communities of Norfolk and the surrounding
                areas. Their mission is to provide quality products, affordable prices, and exceptional
                customer service while serving their neighbors with pride every day.
              </p>
              <p className="mt-5 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                They Offer
              </p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2 text-sm text-foreground/90">
                {[
                  "Fresh Fruits & Veggies — 50% OFF with EBT",
                  "In-House Butcher — fresh meats cut daily",
                  "Caribbean & International Groceries",
                  "Household Essentials",
                  "Weekly Specials",
                  "Friendly Customer Service",
                ].map((item) => (
                  <li key={item} className="rounded-lg bg-accent/15 px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
            <img
              src={ePalmerLogo.url}
              alt="E. Palmer Supermarket logo"
              loading="lazy"
              className="w-full self-start md:w-56"
            />
          </div>
        </article>

        {/* MP Island Cafe */}
        <article className="rounded-2xl border bg-card p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <h2 className="font-display text-3xl">MP Island Cafe</h2>
              <p className="mt-1 font-semibold text-secondary">
                Giving You A True Taste of the Islands
              </p>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                Bringing authentic island flavors and cuisine to the festival.
              </p>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                MP Island Cafe has three locations: 5957 E. Va Beach Blvd. in Norfolk, VA; 12914
                Jefferson Ave. in Newport News, VA; and 5583 Portsmouth Blvd. in Portsmouth, VA. We
                offer a wide variety of Caribbean and Soul Food cuisine, including an all-you-can-eat
                lunch and dinner buffet which is sure to delight your taste buds.
              </p>
            </div>
            <img
              src={mpIslandLogo.url}
              alt="MP Island Cafe logo"
              loading="lazy"
              className="w-full self-start md:w-64"
            />
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-center font-display text-3xl">Our Partners</h2>
        <p className="mt-2 text-center text-muted-foreground">
          Proud supporters and performers of VA Rhythm &amp; Roots Festival.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {partners.map((p) => (
            <li
              key={p.name}
              className="flex aspect-square items-center justify-center rounded-2xl border bg-card p-1 shadow-sm"
            >
              <img
                src={p.url}
                alt={`${p.name} logo`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

    </PageShell>
  );
}
