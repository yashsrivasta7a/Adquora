
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { EdgeGlow } from ".";

const CompanyLogoData= [
  { src: "/company/Picture1.png", alt: "Image 1" },
  { src: "/company/Picture2.png", alt: "Image 2" },
  { src: "/company/Picture3.png", alt: "Image 3" },
  { src: "/company/Picture4.png", alt: "Image 4" },
  { src: "/company/Picture5.png", alt: "Image 13" },
  { src: "/company/Picture6.png", alt: "Image 19" },
  { src: "/company/Picture7.png", alt: "Image 20" },

];

const InfiniteScrollingLogosAnimation = () => {
  return (
    <div className="container p-4 pt-20 mt-10 bg-transparent">
      <h2 className="text-center text-xl text-white/80 font-bold">
        Trusted by the world&apos;s most innovative companies
      </h2>
      
      <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:content-['']">
        <motion.div
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none gap-10 pr-16 pt-4"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {CompanyLogoData.map(({ src, alt }) => (
                <Image
                  width={120}
                  height={122}
                  key={alt}
                  src={src}
                  alt={alt}
                  className="h-32 w-auto flex-none"
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollingLogosAnimation;
