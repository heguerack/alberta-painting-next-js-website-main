import { blogPosts } from "@/lib/blog-data";

import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import homeHero from "@/public/blog-banner.webp";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import BlogHero from "@/components/blog-hero";
import BlogGrid from "@/components/blog-grid";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Header";
import BlogNestedHero from "@/components/BlogNestedHero";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post?.slug,
  }));
}
export type paramsType = Promise<{ slug: string }>;
export default async function BlogPost({ params }: { params: paramsType }) {
  const slug = (await params)?.slug;
  let post;
  if (slug) {
    post = blogPosts?.find((post) => post?.slug === slug);
  }
  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogNestedHero
        title="7 Tips For Choosing The Right Interior Paint Colour!"
        imageSrc={homeHero}
      />
      <div className="relative">
        <div className="absolute  z-[-2]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[500px] z-[-2]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
      </div>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/blogs"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to all posts
        </Link>

        <article className="bg-white rounded-lg overflow-hidden ">
          <div className="p-6">
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
              {post.date}
            </p>
            <h1 className="text-2xl font-bold text-[#0D378D] mt-2 mb-4">
              {post.title}
            </h1>

            <div className="prose max-w-none">
              <p className="text-black text-sm mb-4">{post.excerpt}</p>

              <h2 className="text-xl font-semibold mt-6 mb-3 text-black">
                Why Color Matters
              </h2>
              <p className="text-black mb-4">
                {`The colors you choose for your home can significantly impact your mood, the perceived size of your rooms,
              and even your energy levels. Selecting the right interior paint color is one of the most important
              decisions you'll make during your home renovation project.`}
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3 text-[#0D378D]">
                Our 7 Tips for Choosing the Perfect Paint Color
              </h2>

              <ol className="list-decimal pl-5 space-y-4 mt-4">
                <li className="text-black">
                  <strong>Consider the room purpose:</strong> Different rooms
                  serve different functions and may require different color
                  schemes. Bedrooms often benefit from calming colors, while
                  living areas might use more vibrant tones.
                </li>
                <li className="text-black">
                  <strong>Think about lighting:</strong> Natural and artificial
                  lighting can dramatically affect how a paint color appears.
                  Test colors under different lighting conditions before making
                  a final decision.
                </li>
                <li className="text-black">
                  <strong>Start with color theory:</strong> Understanding basic
                  color theory can help you create harmonious color schemes that
                  flow well throughout your home.
                </li>
                <li className="text-black">
                  <strong>Use the 60-30-10 rule:</strong> In any space, consider
                  using 60% of a dominant color, 30% of a secondary color, and
                  10% of an accent color for balance.
                </li>
                <li className="text-black">
                  <strong>Test before committing:</strong> Always test paint
                  samples on your walls before painting the entire room. Colors
                  can look different on your walls than they do on paint chips.
                </li>
                <li className="text-black">
                  <strong>Consider the existing elements:</strong> Take into
                  account your flooring, furniture, and fixtures when selecting
                  paint colors.
                </li>
                <li className="text-black">
                  <strong>{`Don't rush the decision:`}</strong>{" "}
                  {`Take your time with color selection. It's better to spend
                extra time choosing the right color than to repaint later.`}
                </li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-3 text-black">
                Conclusion
              </h2>
              <p className="text-black">
                {`Choosing the right interior paint color doesn't have to be overwhelming. By following these seven tips and
              taking your time with the decision, you can select colors that will make your home both beautiful and
              comfortable for years to come.`}
              </p>
            </div>
          </div>
        </article>
      </main>
      <main className="container mx-auto px-4 py-8 lg:mb-20  ">
        <BlogGrid
          posts={
            blogPosts && blogPosts.length > 0
              ? blogPosts.filter((post) => post?.slug !== slug).slice(0, 3)
              : []
          }
        />
      </main>
    </>
  );
}
