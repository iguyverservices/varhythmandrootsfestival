import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Tent, Armchair, Ban, MapPin, Phone, Mail, Calendar } from "lucide-react";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Event Info & Shelter RSVP — VA Rhythm & Roots Festival" },
      { name: "description", content: "Event policies, shelter RSVPs, location, and what to bring to VA Rhythm & Roots Festival at Mt Trashmore Park." },
      { property: "og:title", content: "Event Info — VA Rhythm & Roots" },
      { property: "og:description", content: "Shelter RSVPs, what to bring, and event policies." },
    ],
  }),
  component: Info,
});

function Info() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h1 className="font-display text-5xl md:text-6xl">Event Info</h1>
          <p className="mt-3 text-lg opacity-90">Everything you need to know before you head out.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border bg-card p-6">
          <Calendar className="text-primary" />
          <h3 className="font-display text-xl mt-2">When</h3>
          <p className="text-sm text-muted-foreground mt-1">Saturday, August 22, 2026<br />11:00 AM – 7:00 PM</p>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <MapPin className="text-primary" />
          <h3 className="font-display text-xl mt-2">Where</h3>
          <p className="text-sm text-muted-foreground mt-1">Mt Trashmore Park<br />310 Edwin Drive, Virginia Beach, VA</p>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <Phone className="text-primary" />
          <h3 className="font-display text-xl mt-2">Questions?</h3>
          <p className="text-sm text-muted-foreground mt-1">
            <a className="hover:underline" href="tel:7572301562">757-230-1562</a><br />
            <a className="hover:underline" href="mailto:varhythmrootsfestival@gmail.com">varhythmrootsfestival@gmail.com</a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-card p-6">
          <div className="flex items-center gap-3">
            <Armchair className="text-primary" />
            <h2 className="font-display text-2xl">Only lawn chairs allowed</h2>
          </div>
          <p className="mt-2 text-foreground/90">
            Please bring lawn chairs only. To keep sightlines clear and the space safe for
            everyone, canopies, pop-up tents, and large umbrellas are not permitted in the
            general festival area.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Ban className="size-4" /> No canopies, tents, or pop-ups
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6">
          <div className="flex items-center gap-3">
            <Tent className="text-primary" />
            <h2 className="font-display text-2xl">Reserve a Park Shelter</h2>
          </div>
          <p className="mt-2 text-foreground/90">
            Planning to attend with a large group or family? Reserve one of the park shelters at
            Mount Trashmore for your crew. Reservations are managed directly through Eventbrite.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild>
              <a href="https://varhythmandrootsfestival.eventbrite.com" target="_blank" rel="noopener noreferrer">
                Book Your Shelter on Eventbrite
              </a>
            </Button>
            <Button asChild variant="outline"><a href="mailto:varhythmrootsfestival@gmail.com?subject=Shelter%20Question"><Mail className="size-4" />Email us</a></Button>
          </div>
        </div>

      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl overflow-hidden border shadow-sm aspect-video">
          <iframe
            title="Mt Trashmore Park map"
            src="https://www.google.com/maps?q=310+Edwin+Drive,+Virginia+Beach,+VA&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>
    </PageShell>
  );
}
