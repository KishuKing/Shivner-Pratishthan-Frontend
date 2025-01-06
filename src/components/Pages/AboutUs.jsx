'use client'

import { Facebook, Twitter, Linkedin, Play, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-gray-600">Know About Us</h2>
          <h1 className="text-4xl font-bold md:text-5xl lg:w-2/3">
            We are a nonprofit team working worldwide
          </h1>
          <p className="text-gray-600 lg:w-2/3">
            We help senior citizens live with dignity and care by providing shelter, healthcare, and emotional support. Our mission focuses on supporting underprivileged elderly individuals and ensuring they receive the attention and respect they deserve.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg">
          <video 
            className="h-full w-full object-cover"
            poster="/placeholder.svg?height=600&width=1200"
            controls
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 p-4">
            <Play className="h-8 w-8" />
          </button>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-600">Our Mission</h3>
            <h4 className="mb-4 text-2xl font-bold">Empowering the elderly with care and compassion.</h4>
            <p className="text-gray-600">
              We help senior citizens live with dignity and care by providing shelter, healthcare, and emotional support. Our mission focuses on supporting underprivileged elderly individuals and ensuring they receive the attention and respect they deserve.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-600">Our Vision</h3>
            <h4 className="mb-4 text-2xl font-bold">Creating a compassionate world where every senior thrives.</h4>
            <p className="text-gray-600">
              We seek a world of hope, tolerance and social justice, where poverty has been overcome and people live in dignity and security. The villages must be potential enough to develop at a faster pace, the underprivileged sections of society must rise.
            </p>
          </div>
        </div>

        {/* Supporters */}
        <div className="mt-16">
          <h3 className="mb-8 text-sm uppercase tracking-wider text-gray-600">Our Supporters</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt={`Supporter ${i + 1}`}
                  width={120}
                  height={60}
                  className="grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Awards & Recognitions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { year: '2021', award: 'Best NGO Award', location: 'NEW DELHI, INDIA' },
              { year: '2018', award: 'Kashi Award', location: 'VARANASI, INDIA' },
              { year: '2014', award: 'Foresto Award', location: 'NEW DELHI, INDIA' },
              { year: '2010', award: 'Society Saver Award', location: 'VIENNA, AUSTRIA' },
            ].map((award) => (
              <div key={award.year} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-200">
                  <span className="text-xl font-bold">{award.year}</span>
                </div>
                <h3 className="mb-2 font-semibold">{award.award}</h3>
                <p className="text-sm text-gray-600">{award.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Meet our team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Aditya Sawant', role: 'UI/UX Designer' },
              { name: 'Manas Tamboli', role: 'Backend Developer' },
              { name: 'Krish Naik', role: 'Front-End Developer' },
              { name: 'Shreeya Dave', role: 'Database Manager' },
              { name: 'Sangeeta Shirsat', role: 'Project Manager' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt={member.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 font-semibold">{member.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Elderly person"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="mb-8 text-center text-4xl font-bold">
              You can contribute to make the society develop!
            </h2>
            <div className="flex space-x-4">
              <Link
                href="/volunteer"
                className="rounded-md bg-white px-6 py-3 text-black transition-colors hover:bg-gray-100"
              >
                Join as a volunteer
              </Link>
              <Link
                href="/donate"
                className="rounded-md bg-[#26B947] px-6 py-3 transition-colors hover:bg-[#1f9939]"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold">Our Gallery</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt={`Gallery image ${i + 1}`}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Our goal is to make education available for everyone</h3>
                <p className="text-sm text-gray-600">
                  We want our youth to be fully educated and achieve the success
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold">Our Events</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { date: { day: '29', month: 'DEC' }, title: 'Blood Donation Camp' },
              { date: { day: '02', month: 'JAN' }, title: 'Weekly Education Program' },
            ].map((event, i) => (
              <Link
                key={i}
                href="#"
                className="group flex items-center justify-between rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{event.date.day}</div>
                    <div className="text-sm text-gray-600">{event.date.month}</div>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-600">Next Events</h3>
                    <p className="text-lg font-semibold">{event.title}</p>
                  </div>
                </div>
                <ArrowRight className="text-[#26B947] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

