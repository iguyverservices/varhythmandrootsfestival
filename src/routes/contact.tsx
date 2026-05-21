import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Phone, Mail, MapPin, Store } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VA Rhythm & Roots Festival" },
      { name: "description", content: "Get in touch with the VA Rhythm & Roots Festival team — general info, vendor coordination, sponsorships, and shelter RSVPs." },
      { property: "og:title", content: "Contact VA Rhythm & Roots" },
      { property: "og:description", content: "Call, email, or visit us at Mt Trashmore Park." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="font-display text-5xl md:text-6xl">Get in touch</h1>
          <p className="mt-3 text-lg opacity-90">We'd love to hear from you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-card p-6">
          <Phone className="text-primary" />
          <h2 className="font-display text-2xl mt-2">General info</h2>
          <p className="mt-2 text-sm text-muted-foreground">For attendees, shelter RSVPs, sponsorships, and press.</p>
          <p className="mt-4 font-semibold"><a className="hover:underline" href="tel:7572301562">757-230-1562</a></p>
          <p><a className="hover:underline text-primary" href="mailto:varhythmrootsfestival@gmail.com">varhythmrootsfestival@gmail.com</a></p>
        </div>

        <div className="rounded-2xl border bg-card p-6">
          <Store className="text-primary" />
          <h2 className="font-display text-2xl mt-2">Vendor info</h2>
          <p className="mt-2 text-sm text-muted-foreground">Food trucks, art &amp; craft, and community vendors.</p>
          <p className="mt-4 font-semibold"><a className="hover:underline" href="tel:7572045650">757-204-5650</a></p>
          <p><a className="hover:underline text-primary" href="mailto:varhythmrootsfestival@gmail.com">varhythmrootsfestival@gmail.com</a></p>
        </div>

        <div className="rounded-2xl border bg-card p-6 sm:col-span-2">
          <MapPin className="text-primary" />
          <h2 className="font-display text-2xl mt-2">Festival location</h2>
          <p className="mt-1 text-foreground/90">Mt Trashmore Park · 310 Edwin Drive, Virginia Beach, VA</p>
          <div className="mt-4 rounded-xl overflow-hidden border aspect-video">
            <iframe
              title="Mt Trashmore Park"
              src="https://www.google.com/maps?q=310+Edwin+Drive,+Virginia+Beach,+VA&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
