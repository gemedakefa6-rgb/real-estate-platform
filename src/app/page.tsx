 "use client";

import { useMemo, useState } from "react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: number;
  priceLabel: string;
  details: string;
  listingType: "sale" | "rent";
  propertyType: "House" | "Apartment" | "Villa";
  image: string;
  description: string;
  features: string[];
};

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Residence",
    location: "Bole, Addis Ababa",
    price: 285000,
    priceLabel: "$285,000",
    details: "4 beds · 3 baths · 280 m²",
    listingType: "sale",
    propertyType: "Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    description: "A spacious contemporary home with generous living areas, clean architectural lines, and inviting outdoor space. This is a demonstration listing; confirm all details before publishing.",
    features: ["4 bedrooms", "3 bathrooms", "280 m²", "Outdoor living"],
  },
  {
    id: 2,
    title: "Contemporary Family Home",
    location: "Summit, Addis Ababa",
    price: 195000,
    priceLabel: "$195,000",
    details: "3 beds · 2 baths · 210 m²",
    listingType: "sale",
    propertyType: "House",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    description: "A bright family home with a practical layout and comfortable shared spaces. This is a demonstration listing; confirm all details before publishing.",
    features: ["3 bedrooms", "2 bathrooms", "210 m²", "Family layout"],
  },
  {
    id: 3,
    title: "Premium City Apartment",
    location: "Kazanchis, Addis Ababa",
    price: 1200,
    priceLabel: "$1,200 / month",
    details: "2 beds · 2 baths · 120 m²",
    listingType: "rent",
    propertyType: "Apartment",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description: "A polished city apartment with a modern interior and a convenient urban location. This is a demonstration listing; confirm all details before publishing.",
    features: ["2 bedrooms", "2 bathrooms", "120 m²", "City location"],
  },
  {
    id: 4,
    title: "Light-Filled Garden Villa",
    location: "Old Airport, Addis Ababa",
    price: 320000,
    priceLabel: "$320,000",
    details: "5 beds · 4 baths · 340 m²",
    listingType: "sale",
    propertyType: "Villa",
    image: "https://images.unsplash.com/photo-1600047700664-9c9b7e4a5e1d?auto=format&fit=crop&w=1200&q=85",
    description: "A spacious villa concept featuring a generous footprint and a calm, garden-inspired setting. This is a demonstration listing; confirm all details before publishing.",
    features: ["5 bedrooms", "4 bathrooms", "340 m²", "Garden"],
  },
  {
    id: 5,
    title: "Minimal Urban Apartment",
    location: "Mexico, Addis Ababa",
    price: 950,
    priceLabel: "$950 / month",
    details: "2 beds · 1 bath · 95 m²",
    listingType: "rent",
    propertyType: "Apartment",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    description: "A compact, modern apartment concept with a warm neutral interior. This is a demonstration listing; confirm all details before publishing.",
    features: ["2 bedrooms", "1 bathroom", "95 m²", "Modern interior"],
  },
  {
    id: 6,
    title: "Elegant Family House",
    location: "CMC, Addis Ababa",
    price: 245000,
    priceLabel: "$245,000",
    details: "4 beds · 3 baths · 250 m²",
    listingType: "sale",
    propertyType: "House",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    description: "A contemporary family-home concept with open living spaces and a clean, understated finish. This is a demonstration listing; confirm all details before publishing.",
    features: ["4 bedrooms", "3 bathrooms", "250 m²", "Open living"],
  },
];

function Icon({ name, size = 20 }: { name: "search" | "heart" | "pin" | "bed" | "bath" | "area" | "arrow" | "close"; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  if (name === "search") return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>;
  if (name === "heart") return <svg {...common}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></svg>;
  if (name === "pin") return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  if (name === "bed") return <svg {...common}><path d="M3 20v-9m0 4h18v5M3 13h18v-2a3 3 0 0 0-3-3h-5v7M3 15V7" /><path d="M6 11h3" /></svg>;
  if (name === "bath") return <svg {...common}><path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3ZM6 12V5a2 2 0 0 1 4 0" /><path d="M8 20v2m8-2v2" /></svg>;
  if (name === "area") return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="1" /><path d="M9 4v4H4m16 3h-4v4" /></svg>;
  if (name === "arrow") return <svg {...common}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;
  return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [listingType, setListingType] = useState<"all" | "sale" | "rent">("all");
  const [propertyType, setPropertyType] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const filteredProperties = useMemo(() => {
    const filtered = properties.filter((property) => {
      const searchMatches = `${property.title} ${property.location}`.toLowerCase().includes(query.trim().toLowerCase());
      const listingMatches = listingType === "all" || property.listingType === listingType;
      const typeMatches = propertyType === "all" || property.propertyType === propertyType;
      const favoriteMatches = !showFavoritesOnly || favorites.includes(property.id);
      return searchMatches && listingMatches && typeMatches && favoriteMatches;
    });
    if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
    return filtered;
  }, [query, listingType, propertyType, sortBy, favorites, showFavoritesOnly]);

  function toggleFavorite(id: number) {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-2xl font-black tracking-tight text-slate-950">Estate<span className="text-blue-600">.</span></a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#properties" className="transition hover:text-blue-700">Properties</a>
            <a href="#about" className="transition hover:text-blue-700">About</a>
            <a href="#contact" className="transition hover:text-blue-700">Contact</a>
          </div>
          <a href="#contact" className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 sm:px-5">List a Property</a>
        </nav>
      </header>

      <section id="home" className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_.9fr] lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400" /> Find your place
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
              A better place to <span className="text-blue-300">begin.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Discover thoughtfully selected homes and apartments. Search by neighborhood, compare listings, and find a place that fits your next chapter.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm font-semibold text-white">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Homes for sale</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Places to rent</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Addis Ababa</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-2xl shadow-black/25 sm:p-7">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Start your search</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Find a property</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Search the demo listings by neighborhood or property name.</p>
            <form className="mt-6 space-y-4" onSubmit={(event) => { event.preventDefault(); document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" }); }}>
              <label className="block text-sm font-semibold text-slate-700" htmlFor="location-search">Location or keyword</label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                <span className="text-slate-400"><Icon name="search" /></span>
                <input id="location-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Bole or apartment" className="min-w-0 flex-1 bg-transparent py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="listing-type">Looking to</label>
                  <select id="listing-type" value={listingType} onChange={(event) => setListingType(event.target.value as "all" | "sale" | "rent")} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3.5 text-sm outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
                    <option value="all">Buy or rent</option><option value="sale">Buy a property</option><option value="rent">Rent a property</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="property-type">Property type</label>
                  <select id="property-type" value={propertyType} onChange={(event) => setPropertyType(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3.5 text-sm outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
                    <option value="all">All types</option><option value="House">House</option><option value="Apartment">Apartment</option><option value="Villa">Villa</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
                Show matching properties <Icon name="arrow" size={18} />
              </button>
            </form>
            <p className="mt-4 text-xs leading-5 text-slate-400">Demo content only. Listing details, prices, availability, and images must be verified before public use.</p>
          </div>
        </div>
      </section>

      <section id="properties" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">Explore the collection</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Featured properties</h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-500">Browse sample homes and apartments. Use the filters to narrow your search.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => setShowFavoritesOnly((current) => !current)} aria-pressed={showFavoritesOnly} className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition ${showFavoritesOnly ? "border-rose-200 bg-rose-50 text-rose-700" : "border-slate-200 text-slate-700 hover:border-slate-300"}`}>
              <Icon name="heart" size={17} /> Saved ({favorites.length})
            </button>
            <label className="sr-only" htmlFor="sort-properties">Sort properties</label>
            <select id="sort-properties" value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-blue-600">
              <option value="featured">Featured first</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {(["all", "sale", "rent"] as const).map((kind) => (
            <button key={kind} onClick={() => setListingType(kind)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${listingType === kind ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
              {kind === "all" ? "All properties" : kind === "sale" ? "For sale" : "For rent"}
            </button>
          ))}
          {(query || propertyType !== "all" || showFavoritesOnly) && <button onClick={() => { setQuery(""); setPropertyType("all"); setShowFavoritesOnly(false); }} className="rounded-full px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">Clear filters</button>}
        </div>

        <p className="mt-5 text-sm text-slate-500" aria-live="polite">{filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"} found</p>

        {filteredProperties.length > 0 ? (
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <article key={property.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70">
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={property.image} alt={property.title} loading="lazy" className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-slate-800 shadow-sm">{property.listingType === "sale" ? "For sale" : "For rent"}</span>
                  <button onClick={() => toggleFavorite(property.id)} aria-label={favorites.includes(property.id) ? `Remove ${property.title} from saved properties` : `Save ${property.title}`} aria-pressed={favorites.includes(property.id)} className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-sm transition ${favorites.includes(property.id) ? "bg-rose-600 text-white" : "bg-white/95 text-slate-700 hover:bg-white hover:text-rose-600"}`}>
                    <Icon name="heart" size={18} />
                  </button>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="flex items-center gap-1.5 text-sm text-slate-500"><Icon name="pin" size={15} /> {property.location}</p>
                  <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-950">{property.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                    {property.details.split(" · ").map((detail) => <span key={detail}>{detail}</span>)}
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-slate-100 pt-5">
                    <div><p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Illustrative price</p><p className="mt-1 text-xl font-black text-blue-800">{property.priceLabel}</p></div>
                    <button onClick={() => setSelectedProperty(property)} className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-700 hover:text-blue-700">Details <Icon name="arrow" size={16} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
            <h3 className="text-xl font-bold text-slate-900">No matching properties</h3>
            <p className="mt-2 text-sm text-slate-500">Try a different neighborhood or clear some filters.</p>
            <button onClick={() => { setQuery(""); setListingType("all"); setPropertyType("all"); setShowFavoritesOnly(false); }} className="mt-5 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">Reset search</button>
          </div>
        )}
        <p className="mt-8 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900"><strong>Important:</strong> These are sample listings with illustrative prices, not verified offers. Replace them with confirmed properties before promoting the site.</p>
      </section>

      <section id="about" className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">A simpler property journey</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Find the place that feels right.</h2>
          </div>
          <div>
            <p className="leading-8 text-slate-600">Estate is designed to make exploring properties easier: clear listing information, useful search controls, and a clean browsing experience on any screen.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-lg font-extrabold text-slate-950">Easy search</p><p className="mt-2 text-sm leading-6 text-slate-500">Filter listings by location, transaction, and type.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-lg font-extrabold text-slate-950">Saved homes</p><p className="mt-2 text-sm leading-6 text-slate-500">Keep favorite listings handy during your visit.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="overflow-hidden rounded-3xl bg-blue-700 px-6 py-10 text-white sm:px-10 sm:py-12 md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200">Have a property to share?</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Let&apos;s get your listing ready.</h2>
            <p className="mt-4 leading-7 text-blue-100">The listing and enquiry workflow still needs your real contact details or a connected form service before it can accept submissions.</p>
          </div>
          <span className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-extrabold text-white md:ml-8 md:mt-0">Contact details needed</span>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><a href="#home" className="text-2xl font-black tracking-tight">Estate<span className="text-blue-400">.</span></a><p className="mt-2 text-sm text-slate-400">A better way to discover your next property.</p></div>
          <div className="text-sm text-slate-400"><p>Demo website · Sample listings</p><p className="mt-2">© 2026 Estate. All rights reserved.</p></div>
        </div>
      </footer>

      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProperty(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="property-dialog-title" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedProperty.image} alt={selectedProperty.title} className="h-64 w-full object-cover sm:h-80" />
              <button onClick={() => setSelectedProperty(null)} aria-label="Close property details" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow"><Icon name="close" /></button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold text-blue-700">{selectedProperty.location} · {selectedProperty.listingType === "sale" ? "For sale" : "For rent"}</p>
              <h2 id="property-dialog-title" className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{selectedProperty.title}</h2>
              <p className="mt-3 text-2xl font-black text-blue-800">{selectedProperty.priceLabel}</p>
              <p className="mt-4 leading-7 text-slate-600">{selectedProperty.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">{selectedProperty.features.map((feature) => <div key={feature} className="rounded-xl bg-slate-50 px-3 py-4 text-center text-sm font-bold text-slate-700">{feature}</div>)}</div>
              <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">This is a sample listing. Add verified availability, price, ownership, and contact information before publishing it as a real offer.</p>
              <button onClick={() => setSelectedProperty(null)} className="mt-6 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white hover:bg-slate-800">Close details</button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
