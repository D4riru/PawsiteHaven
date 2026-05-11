'use client';

import { useCallback, useState } from 'react';

const CARE_CARDS = [
  {
    id: 'nutrition',
    title: 'Good Nutrition',
    summary: 'Balanced diet, fresh water, and vet guidance for every life stage.',
    detail: [
      'Provide your pet with a balanced diet tailored to their age, species, and lifestyle.',
      'Always ensure access to fresh water, control portions to avoid obesity, and consult a vet for specific nutritional needs.',
    ],
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80',
    alt: 'Hand feeding a small dog',
  },
  {
    id: 'checkups',
    title: 'Checkups',
    summary: 'Vaccines, early detection, and tailored care from your veterinarian.',
    detail: [
      'Regular vet visits detect health issues early and ensure your pet receives essential vaccinations.',
      'These checkups also provide tailored care, promoting a healthier, longer life.',
    ],
    image: 'https://d2zp5xs5cp8zlg.cloudfront.net/image-43642-800.jpg',
    alt: 'Small dog at the veterinarian',
  },
  {
    id: 'environment',
    title: 'Environment',
    summary: 'A safe, comfortable home with toys, space to play, and hazards kept away.',
    detail: [
      'Eliminate risks like toxic plants and exposed wires, use safe cleaning products, and ensure fresh water and a cozy resting area.',
      'Provide engaging toys and secure outdoor spaces for a safe, stimulating environment.',
    ],
    image:
      'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_teaser_image/2022-10/howie-r-cji_2qx7hvu-unsplash.jpg?itok=YimH4GIA',
    alt: 'Happy dog in a safe home environment',
  },
  {
    id: 'exercise',
    title: 'Exercise',
    summary: 'Daily movement and play for a healthy weight and happier mood.',
    detail: [
      "Exercise is key to your pet's health, preventing obesity and strengthening muscles while boosting mood.",
      'Activities like walking and play reduce stress. Adjust exercise to your pet’s needs, gradually increasing intensity, and always provide water.',
    ],
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxhwBewnb6vPd3gE-Yrw9wrQS-7SzRqXXupBCQ66WkoiB1BBDL',
    alt: 'Dogs playing outdoors',
  },
] as const;

export function AboutSection() {
  const [pinnedId, setPinnedId] = useState<string | null>(null);

  const togglePin = useCallback((id: string) => {
    setPinnedId((current) => (current === id ? null : id));
  }, []);

  return (
    <section id="about" className="scroll-mt-24 bg-white px-4 py-12 md:px-20 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 lg:flex-row lg:gap-14">
        <div className="w-full flex-1">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-4xl">ABOUT US</h2>

          <h3 className="mb-3 text-xl font-bold text-black">Mission</h3>
          <p className="mb-8 leading-relaxed text-gray-800">
            PawSite Haven connects compassionate pet lovers with local pet centers in Davao City, streamlining the
            adoption process and promoting ethical practices. It highlights animals in need of homes while supporting
            local centers in improving care and adoption rates.
          </p>

          <h3 className="mb-3 text-xl font-bold text-black">Values</h3>
          <p className="leading-relaxed text-gray-800">
            PawSite Haven upholds ethical pet adoption and care, driven by compassion and accessibility. Through
            partnerships with local centers, it fosters mutual support, informed decision-making, and a commitment to
            building a compassionate and socially conscious community.
          </p>
        </div>

        <div className="w-full flex-1">
          <p className="mb-4 text-center text-sm text-gray-600 lg:text-left">
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {CARE_CARDS.map((card) => {
              const pinned = pinnedId === card.id;
              return (
                <article
                  key={card.id}
                  role="button"
                  tabIndex={0}
                  aria-expanded={pinned}
                  aria-label={`${card.title}. ${card.summary}`}
                  onClick={() => togglePin(card.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      togglePin(card.id);
                    }
                  }}
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-[1.25rem] bg-white shadow-md ring-1 ring-black/5 transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] focus-visible:ring-offset-2 hover:shadow-lg ${pinned ? 'ring-2 ring-[#FF8A00] shadow-lg' : ''
                    }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/88 via-black/55 to-black/20 p-4 text-left text-white transition-all duration-300 ease-out md:p-5 ${pinned
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100'
                        }`}
                    >
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#FFD89A]">More info</p>
                      <div className="max-h-[55%] overflow-y-auto pr-1 text-xs leading-snug md:text-sm md:leading-relaxed">
                        {card.detail.map((para, i) => (
                          <p key={i} className={i > 0 ? 'mt-2' : ''}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col bg-[#FF8A00] px-4 py-4 text-white md:px-5 md:py-5">
                    <h4 className="mb-2 text-base font-bold md:text-lg">{card.title}</h4>
                    <p className="text-sm leading-relaxed opacity-95 md:text-[0.95rem]">{card.summary}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
