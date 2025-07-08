"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export default function HomePage() {
  const form = useRef<HTMLFormElement>(null);

  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!form.current) return;

  //   emailjs
  //     .sendForm(
  //       "service_fn6sugt", // Replace with your EmailJS service ID
  //       "template_4nmg78g", // Replace with your EmailJS template ID
  //       form.current,
  //       "oY9o0PvIv1HBBrb8-" // Replace with your EmailJS public key
  //     )
  //     .then(
  //       () => {
  //         alert("Message sent successfully!");
  //         form.current?.reset();
  //       },
  //       (error) => {
  //         alert("Failed to send message. Please try again.");
  //         console.error(error);
  //       }
  //     );
  // };
  const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();

  const formEl = form.current;
  if (!formEl) return;

  const templateParams = {
    first_name: formEl["first_name"].value,
    last_name: formEl["last_name"].value,
    user_email: formEl["user_email"].value,
    message: formEl["message"].value,
  };

  try {
    await emailjs.send(
      "service_2ttt8mm",        // e.g., "service_xxx"
      "template_c8jirtu",       // e.g., "template_xxx"
      templateParams,
      "-rwsQkdowRRxBoy1s"         // e.g., "user_xxx"
    );
    alert("Message sent successfully!");
    formEl.reset();
  } catch (error) {
    console.error("Email sending failed:", error);
    alert("Failed to send message.");
  }
};


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Centre View Point Agro Resort
            </h1>
            <nav className="hidden md:flex space-x-10 px-2 ">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 transition-colors font-bold py-2"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors font-bold py-2"
              >
                About
              </a>
              <a
                href="#rooms"
                className="text-gray-600 hover:text-blue-600 transition-colors font-bold py-2"
              >
                Rooms
              </a>
              <a
                href="#amenities"
                className="text-gray-600 hover:text-blue-600 transition-colors font-bold py-2"
              >
                Amenities
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors font-bold py-2"
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
              Experience authentic serenity and natural beauty at Centre View
              Point Agro Resort
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              where panoramic mountain views meet warm hospitality and peaceful
              agro surroundings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg"
                onClick={() =>
                  window.open(
                    "https://www.booking.com/searchresults.html?ss=Central+View+Point+Resort",
                    "_blank"
                  )
                }
              >
                Book Your Stay
              </Button>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-2 hover:bg-gray-50 shadow-lg bg-transparent"
                >
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/about.jpg"
              alt="Centre View Point Agro Resort"
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
                Nestled in the serene hills of Nagarkot at Kalamashi Height,
                Centre View Point Agro Resort offers a peaceful escape into
                nature’s embrace. Blending rustic charm with modern comfort, our
                resort is designed to reconnect you with the land, the
                mountains, and yourself.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Surrounded by breathtaking Himalayan view, City view and lush
                agro landscapes, we provide a unique experience rooted in Nepali
                hospitality. Whether you're here to relax, explore, or immerse
                yourself in local culture, Centre View Point Agro Resort is your
                perfect getaway—where every sunrise feels like a new beginning.
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
                  Est. 2024
                </Badge>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero.jpg"
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
                  src="/rooms/room1.jpg"
                  alt="Couples Room"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Couples Room</CardTitle>
                <CardDescription className="text-base">
                  Perfect for couples seeking comfort and elegance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    King-Sized Bed
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Appealing Valley View
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Private Balcony
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Modern Amenities
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">
                    Rs. 3500
                    <span className="text-lg text-gray-500">/night</span>
                  </span>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() =>
                      window.open(
                        "https://www.booking.com/searchresults.html?ss=Central+View+Point+Resort&room1=A%2CA&sb_travel_purpose=leisure&room_type=deluxe",
                        "_blank"
                      )
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src="/rooms/room3.jpg"
                  alt="Family Suite"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Family Suite</CardTitle>
                <CardDescription className="text-base">
                  Spacious accommodation for families looking to relax and
                  reconnect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Two Large-Sized Beds
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Scenic Mountain & Forest Views
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Cozy Seating
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Modern Amenities
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">
                    Rs. 4800
                    <span className="text-lg text-gray-500">/night</span>
                  </span>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() =>
                      window.open(
                        "https://www.booking.com/searchresults.html?ss=Central+View+Point+Resort&room1=A%2CA%2C2&sb_travel_purpose=leisure&room_type=family_suite",
                        "_blank"
                      )
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src="/rooms/room2.jpg"
                  alt="Group Room"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Group Room</CardTitle>
                <CardDescription className="text-base">
                  Ideal for groups of friends or trekkers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Four Comfortable Beds
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Private Terrace with View
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Shared Lounge Space
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Bonfire Area Access
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">
                    Rs. 5500
                    <span className="text-lg text-gray-500">/night</span>
                  </span>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() =>
                      window.open(
                        "https://www.booking.com/searchresults.html?ss=Central+View+Point+Resort&room1=A%2CA&sb_travel_purpose=leisure&room_type=presidential_suite",
                        "_blank"
                      )
                    }
                  >
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
              Enjoy our thoughtfully curated amenities designed to make your
              stay relaxing, comfortable, and truly memorable:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Panoramic Mountain & Valley Views
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Enjoy breathtaking vistas from various points.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Organic Farm-to-Table Dining
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Savor fresh, local, and organic meals.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Free Wi-Fi Access</h4>
              <p className="text-gray-600 leading-relaxed">
                Stay connected throughout your stay.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Room Service</h4>
              <p className="text-gray-600 leading-relaxed">
                Enjoy convenience delivered to your door.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Private Balconies & Terraces
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Relax with your own personal view.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="w-8 h-8 text-red-600" />{" "}
                {/* Reusing Dumbbell for Bonfire, can be replaced */}
              </div>
              <h4 className="text-xl font-semibold mb-3">Bonfire & BBQ Area</h4>
              <p className="text-gray-600 leading-relaxed">
                Enjoy cozy evenings under the stars.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indigo-600" />{" "}
                {/* Reusing Users for Nature Walks, can be replaced */}
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Guided Nature Walks & Hiking Trails
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Explore the natural surroundings with expert guides.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Ample Parking Space
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Secure parking for your convenience.
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

              <CardContent>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700"
                  >
                    Send Message
                  </Button>
                </form>
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
              Centre View Point Agro Resort
            </h4>
            <p className="text-gray-400 mb-4">
              Creating unforgettable memories since 2024
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
              © 2024 Centre View Point Agro Resort. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
