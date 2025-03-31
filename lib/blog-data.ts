export interface BlogPost {
  id: number
  slug: string
  title: string
  date: string
  excerpt: string
  imageUrl: string
}

import blogs from "@/public/blogs.png"

export function getBlogPosts(): BlogPost[] {
  return [
    {
      id: 1,
      slug: "7-tips-for-choosing-the-right-interior-paint-colour-1",
      title: "7 Tips For Choosing The Right Interior Paint Colour!",
      date: "MAR 28, 2022",
      excerpt:
        "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
      imageUrl: blogs,
    },
    {
      id: 2,
      slug: "7-tips-for-choosing-the-right-interior-paint-colour-2",
      title: "7 Tips For Choosing The Right Interior Paint Colour!",
      date: "MAR 28, 2022",
      excerpt:
        "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
      imageUrl: blogs,
    },
    {
      id: 3,
      slug: "7-tips-for-choosing-the-right-interior-paint-colour-3",
      title: "7 Tips For Choosing The Right Interior Paint Colour!",
      date: "MAR 28, 2022",
      excerpt:
        "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
      imageUrl: blogs,
    },
    {
      id: 4,
      slug: "7-tips-for-choosing-the-right-interior-paint-colour-4",
      title: "7 Tips For Choosing The Right Interior Paint Colour!",
      date: "MAR 28, 2022",
      excerpt:
        "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
      imageUrl: blogs,
    },
    {
      id: 5,
      slug: "7-tips-for-choosing-the-right-interior-paint-colour-5",
      title: "7 Tips For Choosing The Right Interior Paint Colour!",
      date: "MAR 28, 2022",
      excerpt:
        "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
      imageUrl: blogs,
    },
    {
      id: 6,
      slug: "7-tips-for-choosing-the-right-interior-paint-colour-6",
      title: "7 Tips For Choosing The Right Interior Paint Colour!",
      date: "MAR 28, 2022",
      excerpt:
        "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
        imageUrl: blogs,
    },
    {
      id: 7,
      slug: "7-tips-for-choosing-the-right-interior-paint-colour-7",
      title: "7 Tips For Choosing The Right Interior Paint Colour!",
      date: "MAR 28, 2022",
      excerpt:
        "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
        imageUrl: blogs,
    },
    {
      id: 8,
      slug: "7-tips-for-choosing-the-right-interior-paint-colour-8",
      title: "7 Tips For Choosing The Right Interior Paint Colour!",
      date: "MAR 28, 2022",
      excerpt:
        "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
        imageUrl: blogs,
    },
    {
        id: 9,
        slug: "7-tips-for-choosing-the-right-interior-paint-colour-9",
        title: "7 Tips For Choosing The Right Interior Paint Colour!",
        date: "MAR 28, 2022",
        excerpt:
          "Picking the colors for the interior of your home can be stressful overwhelming. Flicking through magazines and looking at Pinterest for hours can make you feel inspired, but just as anxious about choosing the wrong colour.",
          imageUrl: blogs,
      },

      
  ]
}

