import Calendly from "@/components/calendly";
import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title: "Booking | Alberta Colour Painting",
  description:
    "Looking for affordable Calgary painters? Our top-rated house painting company in Calgary offers professional interior and exterior painting services to meet all your needs.",
  keywords: [
    "calgary painters",
    "painting companies calgary",
    "painting companies calgary alberta",
    "calgary painting companies",
    "house painting calgary",
    "painting services calgary",
    "painters in calgary alberta",
    "painting contractors calgary",
    "alberta painting contractors calgary",
  ],
  alternates: {
    canonical: "https://www.albertacolourpainting.com/booking",
  },
  openGraph: {
    title: "Need Calgary Painters?",
    description:
      "Book your free estimate today with Alberta Colour Painting, the top-rated painting company in Calgary.",
    images: [
      {
        url: "https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      },
    ],
    url: "https://www.albertacolourpainting.com",
    siteName: "Alberta Colour Painting",
    type: "website",
  },
};
export default function bookingPage() {
  return (
    <>
      <Calendly />
    </>
  );
}
