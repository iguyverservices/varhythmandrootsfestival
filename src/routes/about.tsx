import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VA Rhythm & Roots Festival" },
      { name: "description", content: "About the VA Rhythm & Roots Festival: a free, family-friendly celebration of R&B, Reggae, Soca, and Afrobeat music and culture in Virginia Beach." },
      { property: "og:title", content: "About VA Rhythm & Roots Festival" },
      { property: "og:description", content: "A free, family-friendly celebration of music and culture in Virginia Beach." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-secondary to-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="font-display text-5xl md:text-6xl">About the Festival</h1>
          <p className="mt-3 text-lg opacity-90">Music. Food. Culture. Community.</p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-14 prose prose-neutral">
        <p className="text-lg leading-relaxed text-foreground/90">
          The <strong>VA Rhythm &amp; Roots Festival</strong> is a free, all-ages celebration of the
          sounds and flavors that shape our community. From soulful R&amp;B in the afternoon to
          Reggae, Soca, and Afrobeat as the sun sets, we're bringing Virginia Beach a day filled
          with live bands, DJs, line dancing, food trucks, and family-friendly fun.
        </p>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Hosted at the iconic <strong>Mt Trashmore Park</strong>, the festival is built around one
          simple idea: <em>come for R&amp;B, stay for Reggae</em>. Whether you're rolling up with a
          lawn chair, the whole family, or just stopping by between food trucks, you'll find a
          space to dance, eat, and connect with neighbors.
        </p>
        <p className="mt-6 leading-relaxed text-foreground/90">
          We're proud to partner with local sponsors and small businesses who make this day
          possible — and to welcome art &amp; craft vendors, food trucks, and community
          organizations to share the day with us.
        </p>
      </section>
    </PageShell>
  );
}
