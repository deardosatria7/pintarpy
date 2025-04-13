import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { CalendarIcon, Clock, Eye } from "lucide-react";

import BackButton from "@/components/back-button";
import { Button } from "@/components/ui/button";

// Initialize Prisma client
const prisma = new PrismaClient();

// Types based on the provided Prisma model
type BlogPost = {
  id: string;
  title: string;
  slug: string;
  imgLink: string | null;
  content: string;
  createdAt: Date;
  timesOpened: number;
};

// date-fns replacement
function formatDistanceToNow(date: Date | string): string {
  const now = new Date();
  const targetDate = new Date(date);

  const diffInSeconds = Math.floor(
    (now.getTime() - targetDate.getTime()) / 1000
  ); // selisih dalam detik

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? "" : "s"} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears === 1 ? "" : "s"} ago`;
}

// Calculate reading time
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  // Create a brief excerpt for the description
  const excerpt = post.content.substring(0, 160) + "...";

  return {
    title: post.title,
    description: excerpt,
    openGraph: {
      title: post.title,
      description: excerpt,
      images: post.imgLink ? [{ url: post.imgLink }] : [],
    },
  };
}

// Generate static paths
export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    select: { slug: true },
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Get post data
async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
    });

    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Increment view count
async function incrementViewCount(slug: string) {
  try {
    await prisma.blogPost.update({
      where: { slug },
      data: {
        timesOpened: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.error("Error incrementing view count:", error);
  }
}

// Format content paragraphs
function formatContent(content: string) {
  // Split content by double newlines or single newlines
  const paragraphs = content.split(/\n\n|\n/).filter((p) => p.trim() !== "");

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-6">
          {paragraph}
        </p>
      ))}
    </>
  );
}

// Main page component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params object to get the slug
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  // Increment view count (in a real app, you might want to do this client-side)
  await incrementViewCount(slug);

  // Calculate reading time
  const readingTime = calculateReadingTime(post.content);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <BackButton className="hover:cursor-pointer"></BackButton>

        {/* Article header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{formatDistanceToNow(new Date(post.createdAt))}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{readingTime} min read</span>
            <span className="mx-2">•</span>
            <Eye className="h-4 w-4 mr-1" />
            <span>{post.timesOpened} views</span>
          </div>
        </div>

        {/* Featured image */}
        {post.imgLink && (
          <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden">
            <Image
              src={post.imgLink || "/placeholder.svg"}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Article content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {formatContent(post.content)}
        </article>

        {/* Article footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Published{" "}
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <Button asChild>
              <Link href="/blog">More Articles</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
