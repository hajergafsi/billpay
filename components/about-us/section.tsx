"use client";
import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type Props = {
  title: string;
  images?: ReactImageGalleryItem[];
  extra?: any;
  children?: any;
  id: string;
};

const Section = ({ title, images, extra, id, children }: Props) => {
  return (
    <section
      id={id}
      className="w-full py-16 md:h-auto flex flex-col justify-evenly gap-7 md:gap-10 bg-gradient-to-r from-slate-50 from-5% via-slate-100 via-25% to-slate-200 to-95%"
    >
      <h3 className="font-viga text-center text-[#74B3CE] font-semibold text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h3>

      {/* Image Grid */}
      {images && (
        <div className="px-5 md:px-20">
          <ImageGallery
            items={images}
            showFullscreenButton={true}
            showPlayButton={false}
            showThumbnails={true}
            thumbnailPosition="bottom"
          />
        </div>
      )}

      {/* Children */}
      <div className="text-center">{children}</div>
    </section>
  );
};

export default Section;
