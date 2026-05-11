const testimonials = [
  {
    image:
      'data:image/jpeg;base64,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',
    alt: 'Person with a small fluffy dog',
    quote:
      'The greatest pleasure of a dog is that you may make a fool of yourself with him, and not only will he not scold you, but he will make a fool of himself, too.',
    name: 'Marcus',
  },
  {
    image:
      'https://i.pinimg.com/736x/5c/fc/f8/5cfcf8108c0c71e99e563880d5a3db53.jpg',
    alt: 'Person smiling with a large white dog',
    quote: 'Dogs are not our whole life, but they make our lives whole.',
    name: 'Kathryn',
  },
  {
    image:
      'https://i.pinimg.com/280x280_RS/94/9f/05/949f05dc85f0d871eb2198ea9e7bed9e.jpg',
    alt: 'Person with a small white dog',
    quote: 'No matter how little money and how few possessions you own, having a dog makes you rich.',
    name: 'Maica',
  },
  {
    image:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBQfD6JRDhTohA65VGVXzlBQE-oKDjls-8bj6thp762VGMrTdL',
    alt: 'Person with a golden retriever',
    quote: 'Money can buy you a fine dog, but only love can make him wag his tail.',
    name: 'Jessa',
  },
] as const;

export function TestimonialsSection() {
  return (
    <section className="px-4 md:px-20 py-12 md:py-16 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-center text-black mb-10 md:mb-12">
          Share your thoughts!
        </h2>

        <div className="flex gap-5 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:overflow-visible md:pb-0 md:grid md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="snap-center shrink-0 w-[min(100%,280px)] md:w-auto bg-[#FF8A00] rounded-2xl p-5 shadow-lg flex flex-col md:min-h-[420px]"
            >
              <img src={t.image} alt={t.alt} className="w-full aspect-square object-cover rounded-xl mb-4" />
              <p className="text-white text-sm md:text-base italic leading-relaxed flex-1 mb-4">{t.quote}</p>
              <p className="text-white font-semibold text-right">—{t.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
