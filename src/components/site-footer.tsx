import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Phone, MessageCircle, Mail, MapPin, FileDown, Clock } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { useInquiry } from "@/components/inquiry";
import { requestCatalog } from "@/components/catalog-download-dialog";
import { BRAND, CATEGORIES, CONTACT, NAV } from "@/lib/site";

export function SiteFooter() {
  const { openInquiry } = useInquiry();

  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <BrandLogo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-forest-foreground/70">
              {BRAND} is a product-supply company serving kitchenware, hospitality and
              related commercial product requirements across cutlery, crockery, pots &amp;
              pans, glassware, barware and bakery supplies.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href="https://www.instagram.com/bhilva_marketinz/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Bhilva Marketinz on Instagram"
                className="flex size-9 items-center justify-center rounded-md border border-forest-foreground/20 text-forest-foreground/60 transition-colors hover:border-leaf/50 hover:text-leaf"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://www.facebook.com/bhilva.marketinz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Bhilva Marketinz on Facebook"
                className="flex size-9 items-center justify-center rounded-md border border-forest-foreground/20 text-forest-foreground/60 transition-colors hover:border-leaf/50 hover:text-leaf"
              >
                <Facebook className="size-4" />
              </a>
              <span
                title="LinkedIn — link to be added"
                className="flex size-9 items-center justify-center rounded-md border border-forest-foreground/20 text-forest-foreground/60 transition-colors hover:border-leaf/50 hover:text-leaf"
              >
                <Linkedin className="size-4" />
              </span>
            </div>
            <p className="mt-3 text-xs text-forest-foreground/45">
              LinkedIn will be linked once the official business account is provided.
            </p>
          </div>

          <FooterCol title="Quick Links">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block py-1 text-sm text-forest-foreground/70 transition-colors hover:text-leaf"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={requestCatalog}
              className="block cursor-pointer py-1 text-left text-sm text-forest-foreground/70 transition-colors hover:text-leaf"
            >
              Catalog
            </button>
          </FooterCol>

          <FooterCol title="Product Categories">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/products"
                search={{ category: c.slug }}
                className="block py-1 text-sm text-forest-foreground/70 transition-colors hover:text-leaf"
              >
                {c.name}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <p className="flex items-start gap-2 py-1 text-sm leading-relaxed text-forest-foreground/70">
              <MapPin className="mt-0.5 size-3.5 shrink-0" />
              <span>6th Main Road, Kodigehalli, 6th Cross Rd, Balaji Layout, Hebbal, Bengaluru, Karnataka 560094</span>
            </p>
            <p className="flex items-start gap-2 py-1 text-sm leading-relaxed text-forest-foreground/70">
              <Clock className="mt-0.5 size-3.5 shrink-0" />
              <span>
                Open Mon–Sat from 10:30 am
                <br />
                Closed Sundays, national holidays &amp; major festivals
              </span>
            </p>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 py-1 text-sm text-forest-foreground/70 transition-colors hover:text-leaf"
            >
              <Phone className="size-3.5" /> {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1 text-sm text-forest-foreground/70 transition-colors hover:text-leaf"
            >
              <MessageCircle className="size-3.5" /> {CONTACT.whatsapp}
            </a>
            <a
              href={CONTACT.emailHref}
              className="flex items-center gap-2 py-1 text-sm text-forest-foreground/70 transition-colors hover:text-leaf"
            >
              <Mail className="size-3.5" /> {CONTACT.email}
            </a>
            <Link
              to="/contact"
              hash="map"
              className="flex items-center gap-2 py-1 text-sm text-forest-foreground/70 transition-colors hover:text-leaf"
            >
              <MapPin className="size-3.5" /> Google Maps
            </Link>

            <div className="mt-5 grid gap-2">
              <Button variant="whatsapp" size="sm" onClick={() => openInquiry({ mode: "inquiry" })}>
                Product Inquiry
              </Button>
              <Button variant="onDark" size="sm" onClick={() => openInquiry({ mode: "quote" })}>
                Get a Quote
              </Button>
              <Button variant="onDark" size="sm" onClick={requestCatalog}>
                <FileDown /> Download Catalog
              </Button>
            </div>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-forest-foreground/15 pt-6 text-xs text-forest-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <p>Kitchenware &amp; hospitality supplies · India-wide &amp; international supply</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow mb-4 text-leaf">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
