// app/masonry/page.jsx
import Image from "next/image";

export default function MasonryGrid() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Mobile: Single column stack */}
      <div className="grid grid-cols-1 gap-4 h-auto sm:hidden">
        {/* Image 1 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/tower/2.webp"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/tower/3.webp"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/tower/4.webp"
            alt="Image 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 4 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/tower/88.webp"
            alt="Image 4"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Tablet: Single column stack */}
      <div className="hidden sm:grid lg:hidden grid-cols-1 gap-4 h-auto">
        {/* Image 1 */}
        <div className="relative h-[300px]">
          <Image
            src="/medias/tower/2.webp"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-[300px]">
          <Image
            src="/medias/tower/3.webp"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="relative h-[300px]">
          <Image
            src="/medias/tower/4.webp"
            alt="Image 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 4 */}
        <div className="relative h-[300px]">
          <Image
            src="/medias/tower/88.webp"
            alt="Image 4"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Desktop: Original complex grid */}
      <div className="hidden lg:grid grid-cols-12 gap-2 h-[100vh]">
        {/* Image 1 - wider */}
        <div className="col-span-5 relative">
          <Image
            src="/medias/tower/2.webp"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="col-span-7 relative">
          <Image
            src="/medias/tower/3.webp"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="col-span-8 relative">
          <Image
            src="/medias/tower/4.webp"
            alt="Image 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 4 - takes the rest */}
        <div className="col-span-4 relative">
          <Image
            src="/medias/tower/88.webp"
            alt="Image 4"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}