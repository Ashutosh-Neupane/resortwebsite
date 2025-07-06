// app/gallery/page.js
"use client"; // This directive is necessary for client-side interactivity in Next.js 13+

import Image from "next/image";
import Link from "next/link"; // Used for navigation between pages
import { Button } from "@/components/ui/button"; // Assuming you want to use your existing Button component

export default function GalleryPage() {
  // Define your image data with paths relative to the `public` directory
  const images = [
    { src: "/gallery/gallery1.jpg", alt: "Stunning Mountain View" },
    { src: "/gallery/gallery2.jpg", alt: "Cozy Room Interior" },
    { src: "/gallery/gallery3.jpg", alt: "Resort Exterior Day" },
    { src: "/gallery/gallery5.jpg", alt: "Delicious Organic Food" },
    { src: "/gallery/gallery6.jpg", alt: "Sunset Panorama" },
    { src: "/gallery/gallery7.jpg", alt: "Lush Agro Farm" },
    { src: "/gallery/gallery8.jpg", alt: "Bonfire Evening" },
    { src: "/gallery/gallery9.jpg", alt: "Nature Trail Path" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header for the gallery page */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Centre View Point Agro Resort
          </Link>
          <nav className="hidden md:flex space-x-10 px-2">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors font-bold py-2"
            >
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in the captivating beauty of Centre View Point Agro
            Resort.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill" // Ensures the image fills the parent container
                objectFit="cover" // Crops the image to cover the container while maintaining aspect ratio
                className="transition-transform duration-300 hover:scale-110" // Subtle zoom effect on hover
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button to go back to home */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button
              size="lg"
              className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
