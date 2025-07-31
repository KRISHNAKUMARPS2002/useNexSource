import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

type ZigZagSectionProps = {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  bullets?: string[];
};

export default function ZigZagSectionCard({
  title,
  description,
  imageUrl,
  reverse = false,
  bullets = [],
}: ZigZagSectionProps) {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8">
      <div
        className={`max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-dark mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-foreground text-base md:text-lg mb-4">
            {description}
          </p>
          <ul className="space-y-2 md:space-y-4">
            {bullets.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-800 text-sm md:text-base"
              >
                <CircleCheckBig className="text-secondary min-w-[20px]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative transition-transform duration-300 ease-in-out">
          <div className="bg-white p-2 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={400}
                quality={100}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
