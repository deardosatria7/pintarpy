import Image from "next/image";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { CalendarIcon, Clock, ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Initialize Prisma client
const prisma = new PrismaClient();

// Types
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

// Generate excerpt from content
function generateExcerpt(content: string, maxLength = 150): string {
  if (content.length <= maxLength) return content;

  // Try to cut at a space to avoid cutting words in half
  const truncated = content.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  return truncated.substring(0, lastSpaceIndex) + "...";
}

// Calculate reading time
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Get all blog posts
async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Featured post component
function FeaturedPost({ post }: { post: BlogPost }) {
  const excerpt = generateExcerpt(post.content);
  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-1">
      <div className="relative h-64 lg:h-auto overflow-hidden rounded-lg">
        <Image
          src={
            post.imgLink ||
            "/placeholder.svg?height=600&width=800&text=Featured Post"
          }
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-6">
        <Badge variant="secondary" className="w-fit mb-4">
          Featured
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-50">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{formatDistanceToNow(new Date(post.createdAt))}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{readingTime} min read</span>
          <span className="mx-2">•</span>
          <span>{post.timesOpened} views</span>
        </div>
        <Button asChild className="w-fit">
          <Link href={`/blog/${post.slug}`}>
            Read Article <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

// Blog post card component
function BlogPostCard({ post }: { post: BlogPost }) {
  const excerpt = generateExcerpt(post.content, 120);
  const readingTime = calculateReadingTime(post.content);

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image
          src={
            post.imgLink ||
            `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(
              post.title
            )}`
          }
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="flex-grow pt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-50">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter className="pt-0 pb-6 flex items-center justify-between">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <CalendarIcon className="h-3 w-3 mr-1" />
          <span>{formatDistanceToNow(new Date(post.createdAt))}</span>
          <span className="mx-2">•</span>
          <Clock className="h-3 w-3 mr-1" />
          <span>{readingTime} min</span>
        </div>
        <Button variant="ghost" size="sm" asChild className="text-primary">
          <Link href={`/blog/${post.slug}`}>Read</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

// Main page component
export default async function BlogPage() {
  const posts = await getBlogPosts();

  // No posts case
  if (posts.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          No posts yet
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md">
          Check back soon for new content!
        </p>
      </div>
    );
  }

  // Get featured post (most viewed) and remaining posts
  const featuredPost = [...posts].sort(
    (a, b) => b.timesOpened - a.timesOpened
  )[0];
  const remainingPosts = posts.filter((post) => post.id !== featuredPost.id);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and updates from our team
          </p>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-12">
          <div className="relative w-full sm:w-64 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>

          <Tabs defaultValue="all" className="w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Featured post */}
        <section className="mb-16">
          <FeaturedPost post={featuredPost} />
        </section>

        {/* All posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8">
            All Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination - only show if we have enough posts */}
          {remainingPosts.length > 9 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary text-primary-foreground"
                >
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
