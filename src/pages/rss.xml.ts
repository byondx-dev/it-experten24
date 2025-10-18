import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("blog");

  return rss({
    title: "IT-Experten 24 Blog",
    description: "Anleitungen, Tipps und Sicherheitswarnungen für München und Umgebung.",
    site: context.site ?? "https://www.it-experten24.de",
    items: posts
      .sort((a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: new Date(post.data.publishedAt),
        description: post.data.excerpt,
        link: `/blog/${post.slug}`,
        categories: post.data.tags
      }))
  });
};

export const prerender = true;
