import Image from "next/image";
import logo1 from "../assets/innov8_image.png";
import logo2 from "../assets/tetfund_image_2.png";
import Logo from "../assets/Brand_Logo.png";


export default function LogoCarousel(){

    const sponsors = [
  { name: "Sponsor one", logo: logo1 },
  { name: "Sponsor two", logo: logo2 },
 // { name: "Sponsor three", logo: Logo },
];
// Repeat the 3 logos so one set is wider than the screen, then render it twice for a seamless loop
const REPEATS = 4;
const oneSet = Array.from({ length: REPEATS }, () => sponsors).flat();

    return (
        
      <section className="w-full py-10 bg-white">
      {/* Keyframes live here so no Tailwind config is needed */}
      <style>{`
        @keyframes sponsors-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .sponsors-track { animation: sponsors-scroll 25s linear infinite; }
        .sponsors-viewport:hover .sponsors-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .sponsors-track { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-brand-primary">
          Supported by
        </h2>

        <div
          className="sponsors-viewport overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="sponsors-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
className="flex shrink-0 items-center gap-12 pr-12 sm:gap-20 sm:pr-20"                aria-hidden={copy === 1}
              >
                {oneSet.map((sponsor, i) => (
                  <Image
                    key={`${copy}-${i}`}
                    src={sponsor.logo}
                    alt={copy === 0 ? sponsor.name : ""}
                    width={100}
                    height={100}
  className="h-16 w-auto shrink-0 object-contain sm:h-20 lg:h-22"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}