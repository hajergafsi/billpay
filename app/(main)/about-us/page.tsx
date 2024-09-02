"use client";
import Section from "@/components/about-us/section";
import { UpperSectionAbout } from "@/components/about-us/upper-section";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <UpperSectionAbout />
      <Section
        title="Section 1: Fully Equiped Role-based access Dashboard"
        id="section-1"
        images={images}
      />
      <Section
        title="Section 2: Cookie-based visit-tracking system"
        id="section-2"
        images={images2}
      />

      <Section
        title="Section 3: Customer messaging system"
        id="section-3"
        images={images3}
      />
      <Section title="Section 4: Technologies used" id="section-4">
        <div className="text-center px-4 md:px-8 lg:px-16">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-4">
            This project leverages a robust tech stack to deliver a seamless and
            efficient user experience.
          </p>
          <ul className="list-disc list-inside text-left text-gray-600 leading-relaxed">
            <li className="mb-2">
              <strong className="text-blue-600">Next.js 14:</strong> The core
              framework that powers the application, offering server-side
              rendering and static site generation.
            </li>
            <li className="mb-2">
              <strong className="text-green-600">MongoDB:</strong> A NoSQL
              database used for storing application data, ensuring scalability
              and flexibility.
            </li>
            <li className="mb-2">
              <strong className="text-yellow-600">Firebase:</strong> Integrated
              for secure and efficient authentication, providing user management
              features.
            </li>
            <li className="mb-2">
              <strong className="text-purple-600">Redux:</strong> Employed for
              state management, allowing for predictable state updates and
              improved application performance.
            </li>
            <li className="mb-2">
              <strong className="text-red-600">Cloudinary:</strong> Utilized for
              storing and managing images and media files, offering fast
              delivery and optimization features.
            </li>
            <Link href={"https://github.com/hajergafsi/billpay"}>
              Click to navigate to the project's repository
            </Link>
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default page;

const images = [
  {
    original:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725316858/about-me/um4x0svarvadtek8pgap.png",
    thumbnail:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725316858/about-me/um4x0svarvadtek8pgap.png",
  },
  {
    original:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725317602/about-me/gfxfp8vm05tguwnrdkpk.png",
    thumbnail:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725317602/about-me/gfxfp8vm05tguwnrdkpk.png",
  },
  {
    original:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725316857/about-me/bmr7asxnvpf7nuxbdr6b.png",
    thumbnail:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725316857/about-me/bmr7asxnvpf7nuxbdr6b.png",
  },
  {
    original:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725316857/about-me/mj6dikhk4cmitv4wsvp4.png",
    thumbnail:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725316857/about-me/mj6dikhk4cmitv4wsvp4.png",
  },
  {
    original:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725316859/about-me/y3bnaezvjyw9nrpufbsw.png",
    thumbnail:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725316859/about-me/y3bnaezvjyw9nrpufbsw.png",
  },
];

const images2 = [
  {
    original:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725317887/about-me/e7wp6zmzfur3tv8szit6.png",
    thumbnail:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725317887/about-me/e7wp6zmzfur3tv8szit6.png",
  },
  {
    original:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725317602/about-me/gfxfp8vm05tguwnrdkpk.png",
    thumbnail:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725317602/about-me/gfxfp8vm05tguwnrdkpk.png",
  },
];

const images3 = [
  {
    original:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725318183/about-me/wmgmvjn8j2qdr5r3yysf.png",
    thumbnail:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725318183/about-me/wmgmvjn8j2qdr5r3yysf.png",
  },
  {
    original:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725318183/about-me/gwy5rmp9comkvi97yady.png",
    thumbnail:
      "https://res.cloudinary.com/dl4vcdoyb/image/upload/v1725318183/about-me/gwy5rmp9comkvi97yady.png",
  },
];
