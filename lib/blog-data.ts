export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

import blogs from "@/public/blogs.webp";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "7-tips-for-choosing-the-right-interior-paint-colour-1",
    title: "7 Tips For Choosing The Right Interior Paint Colour!",
    date: "MAR 28, 2022",
    excerpt:
      "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
    imageUrl: blogs as any,
  },
];
