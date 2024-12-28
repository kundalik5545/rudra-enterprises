import {
  featuresData,
  howItWorksData,
  servicesData,
  statsData,
  testimonialsData,
} from "@/data/landingPage";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Youtube } from "lucide-react";

export default function Home() {
  const websiteName = process.env.NEXT_PUBLIC_WEBSITE_NAME;
  const callMe = process.env.NEXT_PUBLIC_CALL;
  const ytLink = process.env.NEXT_PUBLIC_YOUTUBE_LINK;
  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="mt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
            <span>Welcome to</span> <br />
            <span className="gradient-subTitle">{websiteName}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto pt-3">
            <span className="pen-effect text-3xl">
              Fast, Reliable, Affordable!
            </span>
            <br />
            <span className="gradient-title text-2xl tracking-widest ">
              From Drips to Pipes, We Handle It All
            </span>
          </p>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0  gap-3 items-center justify-center">
            <Link href={`tel:${callMe}`}>
              <Button variant="call" size="lg">
                <Phone />
                <span>Book Service</span>
              </Button>
            </Link>
            <Link href={ytLink}>
              <Button size="lg" variant="demo">
                <Youtube className="w-24 h-24" />
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
            Our Plumbing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div className="bg-white shadow-md rounded-lg p-6" key={index}>
                <div className="flex justify-center">
                  {/* Image-based Icon */}
                  <Image
                    src={service.icon}
                    width={80}
                    height={80}
                    alt={service.title}
                  />
                </div>
                <p>
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-semibold text-center text-blue-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {service.description}
                    </p>
                  </div>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=" py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How We Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Reliable Plumbing Services?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of happy customers in Mumbai who trust us for fast,
            professional, and affordable plumbing solutions.
          </p>
          <Link href={`tel:${callMe}`}>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-pulse"
            >
              <Phone />
              Book Your Service Today!
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
