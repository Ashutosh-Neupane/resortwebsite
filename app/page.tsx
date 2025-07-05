import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Wifi,
  Car,
  Utensils,
  Waves,
  Mountain,
  Coffee,
  Dumbbell,
  Users,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm px-3">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Central View Point Resort
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#rooms"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Rooms
              </a>
              <a
                href="#amenities"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Amenities
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Paradise
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Experience luxury and tranquility at Central View Point Resort,
              where breathtaking views meet exceptional hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg"
              >
                Book Your Stay
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-2 hover:bg-gray-50 shadow-lg bg-transparent"
              >
                View Gallery
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Central View Point Resort"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                About Our Resort
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nestled in the heart of nature, Central View Point Resort offers
                an unparalleled escape from the ordinary. Our resort combines
                modern luxury with natural beauty, providing guests with an
                unforgettable experience.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With panoramic views, world-class amenities, and personalized
                service, we create memories that last a lifetime. Whether you're
                seeking adventure or relaxation, our resort is your perfect
                destination.
              </p>
              <div className="flex items-center space-x-6">
                <Badge
                  variant="secondary"
                  className="flex items-center space-x-2 px-4 py-2 text-sm bg-blue-100 text-blue-800"
                >
                  <Star className="w-4 h-4" />
                  <span>5-Star Rating</span>
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-green-100 text-green-800"
                >
                  Est. 2010
                </Badge>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Resort view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Our Rooms & Suites
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully designed accommodations, each offering
              comfort, style, and stunning views.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src="/placeholder.svg?height=224&width=400"
                  alt="Deluxe Room"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Deluxe Room</CardTitle>
                <CardDescription className="text-base">
                  Perfect for couples seeking comfort and elegance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    King-size bed
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Mountain view
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Private balcony
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Modern amenities
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">
                    $299<span className="text-lg text-gray-500">/night</span>
                  </span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src="/placeholder.svg?height=224&width=400"
                  alt="Family Suite"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Family Suite</CardTitle>
                <CardDescription className="text-base">
                  Spacious accommodation for families
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Two bedrooms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Living area
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Kitchenette
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Garden view
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">
                    $449<span className="text-lg text-gray-500">/night</span>
                  </span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src="/placeholder.svg?height=224&width=400"
                  alt="Presidential Suite"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Presidential Suite</CardTitle>
                <CardDescription className="text-base">
                  Ultimate luxury with panoramic views
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Master bedroom
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Private terrace
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Jacuzzi
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Butler service
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">
                    $799<span className="text-lg text-gray-500">/night</span>
                  </span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Resort Amenities
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enjoy our comprehensive range of facilities designed to make your
              stay memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Swimming Pool</h4>
              <p className="text-gray-600 leading-relaxed">
                Olympic-size pool with poolside service
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Fine Dining</h4>
              <p className="text-gray-600 leading-relaxed">
                Multiple restaurants with international cuisine
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Fitness Center</h4>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art gym equipment
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Spa & Wellness</h4>
              <p className="text-gray-600 leading-relaxed">
                Relaxing treatments and therapies
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Free WiFi</h4>
              <p className="text-gray-600 leading-relaxed">
                High-speed internet throughout the resort
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Parking</h4>
              <p className="text-gray-600 leading-relaxed">
                Complimentary valet parking service
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Event Spaces</h4>
              <p className="text-gray-600 leading-relaxed">
                Perfect venues for weddings and conferences
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">24/7 Service</h4>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock room service and concierge
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to book your perfect getaway? Get in touch with our friendly
              team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-2xl font-semibold mb-8">Get in Touch</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Address</h5>
                    <span className="text-gray-600">
                      123 Mountain View Drive, Paradise Valley, CA 90210
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Phone</h5>
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Email</h5>
                    <span className="text-gray-600">
                      info@centralviewpointresort.com
                    </span>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h5 className="text-lg font-semibold mb-4">Business Hours</h5>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Front Desk:</span> 24/7
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Reservations:</span> 8:00 AM -
                    10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Card className="shadow-xl border-0">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-base">
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <Button className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">
              Central View Point Resort
            </h4>
            <p className="text-gray-400 mb-4">
              Creating unforgettable memories since 2010
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Cancellation Policy
              </a>
            </div>
            <Separator className="my-6 bg-gray-700" />
            <p className="text-gray-400 text-sm">
              © 2024 Central View Point Resort. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
