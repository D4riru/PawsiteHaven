import Link from 'next/link';

export function HeroSection({ loggedIn }: { loggedIn?: boolean }) {
  return (
    <section className="py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1
            className="text-5xl md:text-5xl font-extrabold text-[#FFA800] drop-shadow-md leading-tight mb-2"
            style={{ textShadow: '2px 2px 0 #000' }}
          >
            YOUR PET DESERVES
          </h1>
          <h2
            className="text-8xl font-extrabold text-[#FFA800] mb-4"
            style={{ textShadow: '2px 2px 0 #000' }}
          >
            THE BEST
          </h2>
          <p className="italic text-lg font-bold text-gray-700 mb-6">
            “Connecting hearts with adoptive pets,
            <br />
            one paw at a time”
          </p>
          {loggedIn ? (
            <Link
              href="/adoption/apply"
              className="inline-block bg-[#FFA800] text-black rounded-full px-8 py-3 text-lg font-semibold shadow hover:bg-black hover:text-white transition"
            >
              Adopt Now
            </Link>
          ) : (
            <Link
              href="/auth/signup/step1"
              className="inline-block bg-black text-white rounded-full px-8 py-3 text-lg font-semibold shadow hover:bg-[#FFA800] hover:text-black transition"
            >
              Join us
            </Link>
          )}
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/example1.png"
            alt="Adopter with a golden retriever"
            className="w-full max-w-md rounded-2xl"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
}
