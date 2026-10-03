import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const CAL_URL = "https://cal.com/chimeranext/intro"; // confirm handle at deploy time

export default function BookingDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        data-testid="open-booking"
        onClick={() => setOpen(true)}
        className="rounded-lg bg-brand-primary px-6 py-3 font-bold text-ink-deep"
      >
        Book a call
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel data-testid="booking-panel" className="w-full max-w-md rounded-xl border border-surface-border bg-surface-content p-6">
            <DialogTitle className="font-heading text-xl font-extrabold text-text-primary">Let's talk.</DialogTitle>
            <p className="mt-2 text-sm text-text-secondary">Pick a slot — 30 minutes, no slides.</p>
            <a href={CAL_URL} target="_blank" rel="noopener" className="mt-4 inline-block rounded-lg bg-brand-primary px-5 py-2.5 font-bold text-ink-deep">Open scheduler →</a>
            <button onClick={() => setOpen(false)} className="ml-3 text-sm text-text-secondary hover:text-text-primary">Close</button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
