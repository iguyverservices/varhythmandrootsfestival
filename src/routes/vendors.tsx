import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Phone, Mail, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "Vendor Application — VA Rhythm & Roots Festival 2026" },
      { name: "description", content: "Apply as a food, dessert, arts & crafts, retail, amusement, or organization vendor for the VA Rhythm & Roots Festival on August 22, 2026 at Mount Trashmore Park." },
      { property: "og:title", content: "Vendor Application — VA Rhythm & Roots 2026" },
      { property: "og:description", content: "Complete the official vendor application for VA Rhythm & Roots Festival 2026." },
    ],
  }),
  component: Vendors,
});

const vendorTypes = [
  { id: "food", label: "Food", cost: "$600.00", tent: "Up to 20'x20'" },
  { id: "dessert", label: "Dessert / Drinks", cost: "$300.00", tent: "Up to 20'x20'" },
  { id: "crafts", label: "Arts & Crafts / Retail", cost: "$200.00", tent: "Not Required" },
  { id: "amusement", label: "Amusement", cost: "$150.00", tent: "N/A" },
  { id: "organization", label: "Organization Info", cost: "$100.00", tent: "N/A" },
] as const;

function Vendors() {
  const [tier, setTier] = useState<string>("food");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const selected = vendorTypes.find((t) => t.id === tier);
    const subject = encodeURIComponent(`Vendor Application — ${data.business || data.owner1}`);
    const body = encodeURIComponent(
      `VA RHYTHM AND ROOTS FESTIVAL (2026) — VENDOR APPLICATION\n\n` +
      `Business Name: ${data.business ?? ""}\n` +
      `Owner(s): ${[data.owner1, data.owner2, data.owner3].filter(Boolean).join(", ")}\n\n` +
      `Phone (Day): ${data.phoneDay ?? ""}\n` +
      `Phone (Evening): ${data.phoneEvening ?? ""}\n` +
      `Fax: ${data.fax ?? ""}\n` +
      `Email: ${data.email ?? ""}\n\n` +
      `Vendor Type: ${selected?.label} — ${selected?.cost} (${selected?.tent})\n\n` +
      `Items to be sold / provided:\n` +
      [1, 2, 3, 4, 5, 6].map((i) => `${i}. ${data[`item${i}`] ?? ""}`).join("\n") +
      `\n\nAgreement: I, ${data.agreeName}, owner/operator of ${data.business}, agree to abide by ` +
      `the rules and deadlines of the Mount Trashmore Park VA Rhythm and Roots Festival. ` +
      `All information is true, correct, and complete.\n` +
      `Signed: ${data.agreeName} — Date: ${data.agreeDate}\n`
    );
    window.location.href = `mailto:varhythmrootsfestival@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Application ready — your email will open to send it.");
    setTimeout(() => setSubmitting(false), 1200);
  }

  return (
    <PageShell>
      <section className="bg-gradient-to-br from-secondary to-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <p className="text-xs uppercase tracking-widest opacity-90">MP Island Café &amp; AMME Foundation Presents</p>
          <h1 className="mt-2 font-display text-5xl md:text-6xl">VA Rhythm and Roots Festival (2026)</h1>
          <p className="mt-3 text-lg opacity-90">Vendor Application · Mount Trashmore Park · August 22, 2026</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-2"><Phone className="size-4" /> Vendor info: <a className="underline" href="tel:7572045650">757-204-5650</a></span>
            <span className="inline-flex items-center gap-2"><Mail className="size-4" /> <a className="underline" href="mailto:varhythmrootsfestival@gmail.com">varhythmrootsfestival@gmail.com</a></span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="rounded-xl border border-accent/50 bg-accent/10 p-4 text-sm flex gap-3">
          <AlertTriangle className="size-5 shrink-0 text-accent-foreground" />
          <p>
            Please complete every section. Incomplete applications will be rejected. All food
            vendors must secure their own food permit, business license, power, and water supply.
            <strong> Application &amp; full payment deadline: June 1, 2026.</strong> Applications
            after June 1 incur a <strong>$50 late fee</strong>. No applications accepted after
            June 15, 2026.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-8 rounded-2xl border bg-card p-6 md:p-8 shadow-sm">
          {/* Business */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl">Business Information</h2>
            <div className="space-y-1.5">
              <Label htmlFor="business">Name of Business *</Label>
              <Input id="business" name="business" required />
            </div>
            <div className="space-y-1.5">
              <Label>Name of Owner(s) *</Label>
              <Input name="owner1" placeholder="Owner 1" required />
              <Input name="owner2" placeholder="Owner 2 (optional)" />
              <Input name="owner3" placeholder="Owner 3 (optional)" />
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl">Contact</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="phoneDay">Phone (Day) *</Label>
                <Input id="phoneDay" name="phoneDay" type="tel" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phoneEvening">Phone (Evening)</Label>
                <Input id="phoneEvening" name="phoneEvening" type="tel" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="fax">Fax</Label>
                <Input id="fax" name="fax" type="tel" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>

          {/* Vendor selection */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl">Vendor Selection *</h2>
            <RadioGroup value={tier} onValueChange={setTier} className="grid gap-2">
              {vendorTypes.map((t) => (
                <label
                  key={t.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${tier === t.id ? "border-primary bg-primary/5" : ""}`}
                >
                  <RadioGroupItem value={t.id} id={t.id} />
                  <div className="flex-1 grid grid-cols-3 gap-2 text-sm">
                    <span className="font-semibold">{t.label}</span>
                    <span className="text-muted-foreground">{t.cost}</span>
                    <span className="text-muted-foreground">Tent: {t.tent}</span>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>

          {/* Items list */}
          <div className="space-y-3">
            <h2 className="font-display text-2xl">Items to be Sold / Provided</h2>
            <p className="text-sm text-muted-foreground">
              List all food, desserts, arts &amp; crafts, retail items, or amusement activities you'll offer.
            </p>
            <div className="grid gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Input key={i} name={`item${i}`} placeholder={`${i}.`} />
              ))}
            </div>
          </div>

          {/* Acceptance */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl">Vendor Acceptance &amp; Agreement</h2>
            <p className="text-sm text-muted-foreground">
              I agree to abide by the rules and deadlines of the Mount Trashmore Park VA Rhythm and
              Roots Festival. I declare that all information is true, correct, and complete.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="agreeName">Print your name (signature) *</Label>
                <Input id="agreeName" name="agreeName" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="agreeDate">Date *</Label>
                <Input id="agreeDate" name="agreeDate" type="date" required />
              </div>
            </div>
            <label className="flex items-start gap-2 text-sm">
              <Checkbox name="agree" required className="mt-0.5" />
              <span className="text-muted-foreground">
                I agree to the terms above and understand food vendors are responsible for their
                own food permit, business license, power, and water supply.
              </span>
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t">
            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? "Preparing…" : "Submit Application"}
            </Button>
            <span className="text-xs text-muted-foreground">
              A payment link and receipt will be sent after your application is reviewed.
            </span>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
