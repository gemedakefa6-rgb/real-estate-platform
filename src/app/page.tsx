
const properties = [
  {
    title: "Modern Luxury Residence",
    location: "Bole, Addis Ababa",
    price: "$285,000",
    details: "4 Beds · 3 Baths · 280 m²",
    type: "FOR SALE",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Contemporary Family Home",
    location: "Summit, Addis Ababa",
    price: "$195,000",
    details: "3 Beds · 2 Baths · 210 m²",
    type: "FOR SALE",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Premium City Apartment",
    location: "Kazanchis, Addis Ababa",
    price: "$1,200/mo",
    details: "2 Beds · 2 Baths · 120 m²",
    type: "FOR RENT",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-black tracking-tight">
            Estate<span className="text-blue-600">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#properties" className="hover:text-blue-600">
              Properties
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            List a Property
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Find a place to call home
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Discover exceptional properties.
            <span className="text-blue-400"> Live better.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Explore outstanding homes, premium apartments, and investment
            opportunities with a simpler property search experience.
          </p>

          <form
            action="#properties"
            className="mt-10 grid max-w-4xl gap-3 rounded-2xl bg-white p-4 shadow-2xl md:grid-cols-[1fr_1fr_auto]"
          >
            <input
              name="location"
              placeholder="City or neighborhood"
              aria-label="City or neighborhood"
              className="min-w-0 rounded-xl border border-slate-200 px-4 py-4 text-slate-900 outline-none focus:border-blue-500"
            />

            <select
              name="type"
              aria-label="Property type"
              defaultValue="buy"
              className="rounded-xl border border-slate-200 px-4 py-4 text-slate-700 outline-none focus:border-blue-500"
            >
              <option value="buy">Properties for sale</option>
              <option value="rent">Properties for rent</option>
            </select>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"
            >
              Search properties
            </button>
          </form>

          <div className="mt-10 flex flex-wrap gap-10 text-white">
            <div>
              <p className="text-3xl font-black">500+</p>
              <p className="mt-1 text-sm text-slate-300">
                Property opportunities
              </p>
            </div>
            <div>
              <p className="text-3xl font-black">120+</p>
              <p className="mt-1 text-sm text-slate-300">
                Trusted agents
              </p>
            </div>
            <div>
              <p className="text-3xl font-black">24/7</p>
              <p className="mt-1 text-sm text-slate-300">
                Online discovery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Handpicked for you
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Featured properties
            </h2>
            <p className="mt-3 text-slate-500">
              Explore properties worth discovering.
            </p>
          </div>

          <a
            href="#contact"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            Explore more →
          </a>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-60 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-2 text-xs font-bold text-blue-700">
                  {property.type}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-500">
                  📍 {property.location}
                </p>
                <h3 className="mt-3 text-xl font-bold">
                  {property.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500">
                  {property.details}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <p className="text-xl font-black text-blue-700">
                    {property.price}
                  </p>
                  <a
                    href="#contact"
                    className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold hover:border-blue-600 hover:text-blue-600"
                  >
                    View details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            A smarter property experience
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Your next move starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Discover properties, compare opportunities, and connect with
            real estate professionals through one modern platform.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-2xl font-black">
              Estate<span className="text-blue-400">.</span>
            </p>
            <p className="mt-3 text-sm text-slate-400">
              A better way to discover your next property.
            </p>
          </div>
          <div className="text-sm text-slate-400">
            <p>Contact: hello@example.com</p>
            <p className="mt-3">
© 2026 Estate. All rights reserved.            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
