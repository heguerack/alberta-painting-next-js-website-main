import BlogArrow from "@/app/assets/BlogArrow";
import type { BlogPost } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-[#E2E7F1] p-5 overflow-hidden  transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64 ">
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div >
       
        <p className="text-[16px] text-[#0D378D] font-bold uppercase  mt-3 bg-[#CEE4E1]  lg:w-30 w-30 text-center   p-1.5  ">
            {post.date}
          </p>
        

        
        <h2 className="lg:text-[28px] text-[18px] font-bold text-[#0D378D] mt-2">{post.title}</h2>

        <p className="text-black mt-3 font-medium line-clamp-3 text-[18px]">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className=" flex   items-center gap-2.5 mt-4 text-[#0D378D] font-bold hover:underline"
        >
          Read More{" "}
          <BlogArrow/>
        </Link>
      </div>
    </div>
  );
}
