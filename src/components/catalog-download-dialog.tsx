import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CATALOGS } from "@/lib/catalogs";

const OPEN_CATALOG_DOWNLOADS = "bhilva:open-catalog-downloads";

const CATEGORY_NAMES: Record<(typeof CATALOGS)[number]["category"], string> = {
  cutlery: "Cutlery",
  crockery: "Crockery",
  glassware: "Glassware",
  bakery: "Bakery",
  chafing: "Chafing Dish",
  "pots-pans": "Pots & Pans",
  "gn-pans": "GN Pans & Lids",
  "kitchen-bar-bakery": "Kitchen, Bar & Bakery",
  "knife-kitchen-accessories": "Knife & Kitchen Accessories",
  "table-top-machinery": "Table Top Machinery",
  "wooden-buffetware": "Wooden Buffetware",
};

export function requestCatalog() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_CATALOG_DOWNLOADS));
  }
}

export function CatalogDownloadDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const showCatalogs = () => setOpen(true);
    window.addEventListener(OPEN_CATALOG_DOWNLOADS, showCatalogs);
    return () => window.removeEventListener(OPEN_CATALOG_DOWNLOADS, showCatalogs);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-3xl p-0 sm:max-w-3xl">
        <DialogHeader className="border-b border-border px-5 pb-4 pt-6 sm:px-7">
          <DialogTitle className="font-display text-2xl">Download Catalogs</DialogTitle>
          <DialogDescription>
            Select any catalog below to download its complete PDF directly.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[min(68vh,38rem)]">
          <div className="divide-y divide-border px-5 sm:px-7">
            {CATALOGS.map((catalog) => (
              <div
                key={catalog.slug}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{catalog.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {CATEGORY_NAMES[catalog.category]}
                    {catalog.pages ? ` · ${catalog.pages} pages` : ""}
                  </p>
                </div>
                <Button asChild size="sm" variant="quiet" className="shrink-0 self-start sm:self-auto">
                  <a href={catalog.file} download={catalog.fileName}>
                    <FileDown /> Download PDF
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}