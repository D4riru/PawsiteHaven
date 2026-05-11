const shelters = [
  {
    name: 'HAPPY ANIMALS CLUB',
    address: '22 Rigodon Ext, Talomo, Davao City, Davao del Sur',
    phone: '0960 851 0678',
    phoneHref: 'tel:+639608510678',
    mapQuery: '22+Rigodon+Ext+Talomo+Davao+City+Davao+del+Sur',
    image:
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Davao Animal Rescue Volunteers',
    address: '3HWM+8CB, New Washington Village Road, Talomo, Davao City, Davao del Sur',
    phone: '+63 977 735 8600',
    phoneHref: 'tel:+639777358600',
    mapQuery: 'New+Washington+Village+Road+Talomo+Davao+City',
    image:
      'https://paws.org.ph/wp-content/uploads/2022/06/Adoption-Counseling-Volunteers.jpg',
  },
  {
    name: 'Davao City Dog Pound',
    address: 'Malagos, Baguio District, Davao City, Davao del Sur',
    phone: '+63 82 241 1000',
    phoneHref: 'tel:+63822411000',
    mapQuery: 'Davao+City+Dog+Pound+Malagos+Baguio+District',
    image:
      'https://images.summitmedia-digital.com/spotph/images/2023/02/17/pet-adoption-1676628410.jpg',
  },
] as const;

export function ShelterBannersSection() {
  return (
    <section className="px-4 md:px-20 py-10 md:py-14 bg-white" aria-labelledby="partner-shelters-heading">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h2 id="partner-shelters-heading" className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            PawSite Haven
          </h2>
          <p className="text-lg md:text-xl text-black mt-2 font-medium">A Safe Home, A Second Chance</p>
        </header>

        <div className="flex flex-col gap-6">
          {shelters.map((s) => (
            <article
              key={s.name}
              className="relative overflow-hidden rounded-[2rem] min-h-[220px] md:min-h-[240px] shadow-lg isolate"
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${s.image})` }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-black/60" aria-hidden />
              <div className="relative z-10 flex flex-col justify-center h-full min-h-[220px] md:min-h-[240px] px-8 py-8 md:px-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">{s.name}</h3>
                <p className="text-base md:text-lg leading-relaxed mb-2">
                  <span className="underline underline-offset-2 font-semibold">Address:</span>{' '}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFA800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA800] rounded"
                  >
                    {s.address}
                  </a>
                </p>
                <p className="text-base md:text-lg">
                  <span className="underline underline-offset-2 font-semibold">Phone:</span>{' '}
                  <a
                    href={s.phoneHref}
                    className="underline decoration-white/80 hover:text-[#FFA800] hover:decoration-[#FFA800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA800] rounded"
                  >
                    {s.phone}
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
