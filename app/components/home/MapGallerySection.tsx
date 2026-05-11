'use client';

import { useCallback, useMemo, useState } from 'react';

type Location = {
  id: string;
  name: string;
  shortLabel: string;
  image: string;
  imageAlt: string;
  address: string;
  contact: string;
  phoneHref: string;
  website: string;
  marker: { top: string; left: string };
};

const LOCATIONS: Location[] = [
  {
    id: 'happy-animals',
    name: 'Happy Animals Club',
    shortLabel: 'Happy Animals',
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGFVP_LhOW0FsfQ-QL5cqg2NQA88L8pinujUg81FTC_jULk85V',
    imageAlt: 'Happy Animals Club entrance and gate',
    address: '22 Rigodon Ext., Talomo, Davao City, Davao del Sur',
    contact: '+63 910 851 0678',
    phoneHref: 'tel:+639108510678',
    website: 'https://www.happyanimalsclub.org/',
    marker: { top: '20%', left: '40%' },
  },
  {
    id: 'darv',
    name: 'Davao Animal Rescue Volunteers',
    shortLabel: 'DARV',
    image:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSMGxMLX5v5xOxc8heymuzGg4Xc1B5TrYAldap67aroRvyOi-t',
    imageAlt: 'Davao Animal Rescue Volunteers facility',
    address: '3HWM+8C8, New Washington Village Road, Talomo, Davao City, Davao del Sur',
    contact: '0977 735 8600',
    phoneHref: 'tel:+639777358600',
    website: 'https://davaoanimalrescue.com/',
    marker: { top: '32%', left: '52%' },
  },
  {
    id: 'dog-pound',
    name: 'Davao City Dog Pound',
    shortLabel: 'Dog Pound',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKw5q21LKM4nlShBnPUFA7QWKYAVkZAsuxA&s',
    imageAlt: 'Davao City Dog Pound building',
    address: 'Baguio District, Davao City, Davao del Sur',
    contact: '(082) 241 1000',
    phoneHref: 'tel:+63822411000',
    website: 'https://veterinarian.davaocity.gov.ph/?page_id=17',
    marker: { top: '48%', left: '44%' },
  },
  {
    id: 'animal-central',
    name: 'Davao Animal Central – Obrero',
    shortLabel: 'Animal Central',
    image: 'https://i.redd.it/spn2k54kb7nb1.jpg',
    imageAlt: 'Davao Animal Central pet supply storefront',
    address: 'Door 1, Porras, Teodoro Palma Gil St, Obrero, Davao City, 8000 Davao del Sur',
    contact: '0954 335 6735',
    phoneHref: 'tel:+639543356735',
    website: 'http://www.facebook.com/davaoac',
    marker: { top: '26%', left: '62%' },
  },
  {
    id: 'bantay-hayop',
    name: 'Bantay Hayop Adoption',
    shortLabel: 'Bantay Hayop',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdS9VfQjX6G15U3qBDUQpmP0FsjAgPrWyMw&s',
    imageAlt: 'Street view near Bantay Hayop Adoption',
    address: 'Door 1, Porras, Teodoro Palma Gil St, Obrero, Davao City, 8000 Davao del Sur',
    contact: '0954 335 6735',
    phoneHref: 'tel:+639543356735',
    website: 'http://www.facebook.com/davaoac',
    marker: { top: '58%', left: '34%' },
  },
  {
    id: 'bark-stray',
    name: 'Bark for Stray Animals',
    shortLabel: 'Bark for Stray',
    image: 'https://images.pond5.com/rescued-portuguese-podengo-stray-dog-footage-295931581_iconl.jpeg',
    imageAlt: 'Community rescue outreach',
    address: 'Door 1, Porras, Teodoro Palma Gil St, Obrero, Davao City, 8000 Davao del Sur',
    contact: '0954 335 6735',
    phoneHref: 'tel:+639543356735',
    website: 'http://www.facebook.com/davaoac',
    marker: { top: '40%', left: '28%' },
  },
];

function PawMarker({
  top,
  left,
  label,
  active,
  onSelect,
}: {
  top: string;
  left: string;
  label: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={`Show ${label} on map`}
      aria-pressed={active}
      onClick={onSelect}
      className={`absolute z-30 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-md ring-2 transition hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 ${active ? 'scale-110 bg-[#e67300] ring-white' : 'bg-[#FF8A00] ring-white/90'
        }`}
      style={{ top, left }}
    >
      <span className="text-lg leading-none" aria-hidden>
        🐾
      </span>
    </button>
  );
}

export function MapGallerySection() {
  const [selectedId, setSelectedId] = useState<string>(LOCATIONS[0].id);

  const selected = useMemo(() => LOCATIONS.find((l) => l.id === selectedId) ?? LOCATIONS[0], [selectedId]);

  const selectLocation = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  return (
    <section className="bg-white px-4 py-10 md:px-20 md:py-14" aria-label="Partner locations map and gallery">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-8 lg:flex-row lg:gap-10">
        <div className="min-w-0 flex-1">
          <div className="relative pt-10">
            <div className="absolute -top-1 left-0 z-20 flex items-start gap-3">
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=200&q=80"
                alt="Small dog peeking above the map"
                className="h-20 w-20 -rotate-6 rounded-full border-4 border-white object-cover shadow-lg md:h-24 md:w-24"
              />
              <div className="mt-2 rounded-2xl border border-amber-100 bg-[#fff9c4] px-4 py-2 shadow-md">
                <p className="text-sm font-bold text-black md:text-base">You can find me here!</p>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-orange-100 shadow-lg md:min-h-[380px]">
              <iframe
                title="Davao City map — adoption partner locations (preview)"
                className="pointer-events-none absolute inset-0 z-0 h-full min-h-[320px] w-full border-0 grayscale-[0.12] contrast-[1.04] md:min-h-[380px]"
                src="https://www.openstreetmap.org/export/embed.html?bbox=125.42%2C6.98%2C125.72%2C7.22&amp;layer=mapnik"
                loading="lazy"
                tabIndex={-1}
              />
              <div
                className="pointer-events-none absolute inset-0 z-10 rounded-3xl bg-gradient-to-br from-orange-200/25 via-transparent to-sky-200/25 ring-1 ring-inset ring-black/5"
                aria-hidden
              />
              <div className="absolute inset-0 z-20">
                {LOCATIONS.map((loc) => (
                  <PawMarker
                    key={loc.id}
                    top={loc.marker.top}
                    left={loc.marker.left}
                    label={loc.shortLabel}
                    active={loc.id === selectedId}
                    onSelect={() => selectLocation(loc.id)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6" role="tablist" aria-label="Choose a partner location">
              {LOCATIONS.map((loc) => {
                const isActive = loc.id === selectedId;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectLocation(loc.id)}
                    className={`group relative aspect-square overflow-hidden rounded-2xl shadow-md ring-2 transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF8A00] ${isActive
                      ? 'ring-[#FF8A00] ring-offset-2 ring-offset-white scale-[1.02] shadow-lg'
                      : 'ring-transparent hover:ring-[#FF8A00]/70 hover:shadow-lg active:scale-[0.98]'
                      }`}
                  >
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <span
                      className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-1 py-2 text-center text-[0.65rem] font-semibold leading-tight text-white sm:text-xs`}
                    >
                      {loc.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1 lg:max-w-md xl:max-w-lg">
          <article
            key={selected.id}
            className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/10 motion-safe:animate-[mapCardIn_0.35s_ease-out_both] md:min-h-[380px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${selected.image})` }}
              role="img"
              aria-label={selected.imageAlt}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" aria-hidden />
            <div className="relative z-10 p-6 text-white md:p-8">
              <h3 className="mb-4 text-2xl font-bold leading-tight drop-shadow md:text-3xl">{selected.name}</h3>
              <dl className="space-y-3 text-sm leading-relaxed text-white/95 md:text-base">
                <div>
                  <dt className="font-semibold text-white">Address</dt>
                  <dd>{selected.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Contact</dt>
                  <dd>
                    <a href={selected.phoneHref} className="underline decoration-white/60 hover:text-[#FFD580]">
                      {selected.contact}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Website</dt>
                  <dd>
                    <a
                      href={selected.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all underline decoration-white/60 hover:text-[#FFD580]"
                    >
                      {selected.website}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
