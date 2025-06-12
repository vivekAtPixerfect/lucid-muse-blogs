
import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "minimal";
}

const BlogCard = ({ post, variant = "default" }: BlogCardProps) => {
  if (variant === "featured") {
    return (
      <Link to={`/blog/${post.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover-scale">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </div>
            </div>
            <h2 className="text-2xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "minimal") {
    return (
      <Link to={`/blog/${post.slug}`} className="group block">
        <article className="py-6 border-b last:border-b-0">
          <div className="flex items-start space-x-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime} min
                </div>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center space-x-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-xs text-muted-foreground">{post.author.name}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-scale">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-3">
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime} min read
            </div>
          </div>
          <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center space-x-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-muted-foreground">{post.author.name}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
