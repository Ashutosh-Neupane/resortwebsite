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
      <header className="border-b fixed top-0 left-0 right-0 z-100 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Central View Point Resort
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#rooms" className="text-gray-600 hover:text-gray-900">
                Rooms
              </a>
              <a
                href="#amenities"
                className="text-gray-600 hover:text-gray-900"
              >
                Amenities
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Welcome to Paradise
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience luxury and tranquility at Central View Point Resort,
              where breathtaking views meet exceptional hospitality.
            </p>
            <Button size="lg" className="mr-4">
              Book Now
            </Button>
            <Button variant="outline" size="lg">
              View Gallery
            </Button>
          </div>

          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Central View Point Resort"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                About Our Resort
              </h3>
              <p className="text-gray-600 mb-4">
                Nestled in the heart of nature, Central View Point Resort offers
                an unparalleled escape from the ordinary. Our resort combines
                modern luxury with natural beauty, providing guests with an
                unforgettable experience.
              </p>
              <p className="text-gray-600 mb-6">
                With panoramic views, world-class amenities, and personalized
                service, we create memories that last a lifetime. Whether you're
                seeking adventure or relaxation, our resort is your perfect
                destination.
              </p>
              <div className="flex items-center space-x-4">
                <Badge
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <Star className="w-4 h-4" />
                  <span>5-Star Rating</span>
                </Badge>
                <Badge variant="secondary">Est. 2010</Badge>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=320&width=500"
                alt="Resort view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Rooms & Suites
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed accommodations, each offering
              comfort, style, and stunning views.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Deluxe Room"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Deluxe Room</CardTitle>
                <CardDescription>
                  Perfect for couples seeking comfort and elegance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• King-size bed</li>
                  <li>• Mountain view</li>
                  <li>• Private balcony</li>
                  <li>• Modern amenities</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$299/night</span>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Family Suite"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Family Suite</CardTitle>
                <CardDescription>
                  Spacious accommodation for families
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Two bedrooms</li>
                  <li>• Living area</li>
                  <li>• Kitchenette</li>
                  <li>• Garden view</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$449/night</span>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Presidential Suite"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Presidential Suite</CardTitle>
                <CardDescription>
                  Ultimate luxury with panoramic views
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Master bedroom</li>
                  <li>• Private terrace</li>
                  <li>• Jacuzzi</li>
                  <li>• Butler service</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$799/night</span>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Resort Amenities
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy our comprehensive range of facilities designed to make your
              stay memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Waves className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h4 className="font-semibold mb-2">Swimming Pool</h4>
              <p className="text-sm text-gray-600">
                Olympic-size pool with poolside service
              </p>
            </Card>

            <Card className="text-center p-6">
              <Utensils className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h4 className="font-semibold mb-2">Fine Dining</h4>
              <p className="text-sm text-gray-600">
                Multiple restaurants with international cuisine
              </p>
            </Card>

            <Card className="text-center p-6">
              <Dumbbell className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h4 className="font-semibold mb-2">Fitness Center</h4>
              <p className="text-sm text-gray-600">
                State-of-the-art gym equipment
              </p>
            </Card>

            <Card className="text-center p-6">
              <Mountain className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h4 className="font-semibold mb-2">Spa & Wellness</h4>
              <p className="text-sm text-gray-600">
                Relaxing treatments and therapies
              </p>
            </Card>

            <Card className="text-center p-6">
              <Wifi className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h4 className="font-semibold mb-2">Free WiFi</h4>
              <p className="text-sm text-gray-600">
                High-speed internet throughout the resort
              </p>
            </Card>

            <Card className="text-center p-6">
              <Car className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <h4 className="font-semibold mb-2">Parking</h4>
              <p className="text-sm text-gray-600">
                Complimentary valet parking service
              </p>
            </Card>

            <Card className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h4 className="font-semibold mb-2">Event Spaces</h4>
              <p className="text-sm text-gray-600">
                Perfect venues for weddings and conferences
              </p>
            </Card>

            <Card className="text-center p-6">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-brown-600" />
              <h4 className="font-semibold mb-2">24/7 Service</h4>
              <p className="text-sm text-gray-600">
                Round-the-clock room service and concierge
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to book your perfect getaway? Get in touch with our friendly
              team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span>
                    123 Mountain View Drive, Paradise Valley, CA 90210
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span>info@centralviewpointresort.com</span>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h5 className="font-semibold mb-2">Business Hours</h5>
                <p className="text-gray-600">Front Desk: 24/7</p>
                <p className="text-gray-600">
                  Reservations: 8:00 AM - 10:00 PM
                </p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
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
