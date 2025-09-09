import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";
import ReactLenis from "lenis/react";
import { Logo } from "../Clients/Page";
import { LogoCarousel } from "@/components/ui/logo-carousel";
StickyCard002
export const BasicDemo = () => {

const cards = [
  {
    id: 1,
    image: "/images/1.jpeg",
    alt: "Image 1",
  },
  {
    id: 2,
    image: "/images/2.jpeg",
    alt: "Image 2",
  },
  {
    id: 3,
    image: "/images/3.jpeg",
    alt: "Image 3",
  },
  {
    id: 4,
    image: "/images/4.jpeg",
    alt: "Image 4",
  },
  {
    id: 13,
    image: "/images/13.jpeg",
    alt: "Image 13",
  },
  {
    id: 19,
    image: "/images/19.jpeg",
    alt: "Image 19",
  },
  {
    id: 20,
    image: "/images/20.jpeg",
    alt: "Image 20",
  },
  {
    id: 21,
    image: "/images/21.jpeg",
    alt: "Image 21",
  },
  {
    id: 32,
    image: "/images/32.jpeg",
    alt: "Image 32",
  },
  
];
return (
     <ReactLenis root>
          <div className="h-screen w-full ">    

            <StickyCard002 cards={cards} className="bg-transparent" />
          </div>
        </ReactLenis>
  );
};