import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Phone, Mail, CreditCard } from "lucide-react";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "Vendor Sign-Up — VA Rhythm & Roots Festival" },
      { name: "description", content: "Apply to be a food truck, art & craft, or community vendor at VA Rhythm & Roots Festival 2026 in Virginia Beach." },
      { property: "og:title", content: "Become a Vendor — VA Rhythm & Roots" },
      { property: "og:description", content: "Food trucks, art & craft vendors, and community partners — apply now." },
    ],
  }),
  component: Vendors,
});

const tiers = [
  { id: "art", label: "Art & Craft Vendor", price: "$75" },
  { id: "food", label: "Food Truck / Food Vendor", price: "$200" },
  { id: "community", label: "Community / Non-Profit", price: "Free" },
];

function Vendors() {
  const [tier, setTier] = useState("art");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const subject = encodeURIComponent(`Vendor Application — ${data.business || data.name}`);
    const body = encodeURIComponent(
      Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n") +
      `\nVendor Type: ${tier}`
    );
    // Open the user's email client pre-filled — works without a backend
    window.location.href = `mailto:varhythmrootsfestival@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Application ready — your email will open to send it.");
    setTimeout(() => setSubmitting(false), 1200);
  }

  return (
    <PageShell>
      <section className="bg-gradient-to-br from-secondary to-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h1 className="font-display text-5xl md:text-6xl">Become a Vendor</h1>
          <p className="mt-3 text-lg opacity-90 max-w-2xl">
            Bring your business to thousands of festival-goers. Food trucks, art &amp; craft
            vendors, and community partners welcome.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-2"><Phone className="size-4" /> Vendor info: <a className="underline" href="tel:7572045650">757-204-5650</a></span>
            <span className="inline-flex items-center gap-2"><Mail className="size-4" /> <a className="underline" href="mailto:varhythmrootsfestival@gmail.com">varhythmrootsfestival@gmail.com</a></span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm">
          <h2 className="font-display text-3xl">Vendor Application</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill out the form and we'll follow up with payment + booth details.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Contact name *</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="business">Business name *</Label>
                <Input id="business" name="business" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Vendor type *</Label>
              <RadioGroup value={tier} onValueChange={setTier} className="grid sm:grid-cols-3 gap-2">
                {tiers.map((t) => (
                  <label key={t.id} className={`flex cursor-pointer items-start gap-2 rounded-lg border p-3 transition-colors ${tier === t.id ? "border-primary bg-primary/5" : ""}`}>
                    <RadioGroupItem value={t.id} id={t.id} className="mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">{t.label}</div>
                      <div className="text-xs text-muted-foreground">{t.price}</div>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="description">Tell us about your booth *</Label>
              <Textarea id="description" name="description" rows={4} placeholder="What you sell or serve, booth size, any electrical needs, etc." required />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="website">Website / social</Label>
                <Input id="website" name="website" placeholder="@yourbrand or url" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="insurance">Have liability insurance?</Label>
                <Input id="insurance" name="insurance" placeholder="Yes / No / In progress" />
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm">
              <Checkbox name="agree" required className="mt-0.5" />
              <span className="text-muted-foreground">
                I've read the event guidelines and agree to follow Virginia Beach Department of
                Public Health requirements for food vendors when applicable.
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button type="submit" size="lg" disabled={submitting}>
                {submitting ? "Preparing…" : "Submit Application"}
              </Button>
              <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                <CreditCard className="size-3.5" /> Secure payment link sent after approval.
              </span>
            </div>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Prefer to call? Reach our vendor coordinator at{" "}
          <a className="underline" href="tel:7572045650">757-204-5650</a>.
        </p>
      </section>
    </PageShell>
  );
}
