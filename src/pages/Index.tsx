
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const trendingPosts = blogPosts.slice(0, 4); // First 4 posts as trending
  const latestPosts = blogPosts.slice().sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, 6);
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-cursive font-bold mb-6 animate-fade-in">
            Stories Worth
            <span className="block text-primary">Reading</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in [animation-delay:200ms]">
            Discover thoughtful articles on design, technology, and lifestyle. 
            Written by passionate creators for curious minds.
          </p>
          <Button asChild size="lg" className="animate-fade-in [animation-delay:400ms]">
            <Link to="#trending">Start Reading</Link>
          </Button>
        </div>
      </section>

      {/* Featured Hero Cards */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
            Featured Articles
          </h2>
          {featuredPosts.length > 0 && (
            <div className="max-w-7xl mx-auto mb-8">
              {/* Main Featured Post */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="lg:col-span-1">
                  <BlogCard post={featuredPosts[0]} variant="featured" />
                </div>
                <div className="lg:col-span-1 space-y-6">
                  {featuredPosts.slice(1, 3).map((post, index) => (
                    <div 
                      key={post.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 200}ms` }}
                    >
                      <BlogCard post={post} variant="minimal" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trending Section */}
      <section id="trending" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">Trending Now</h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/category/all" className="flex items-center space-x-2">
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {trendingPosts.map((post, index) => (
              <div 
                key={post.id}
                className="animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <article className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          Trending
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.author.name}</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">Latest News</h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/category/all" className="flex items-center space-x-2">
                <span>All Articles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Latest Posts Grid */}
          <div className="max-w-7xl mx-auto">
            {/* First Row - 2 Large Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {latestPosts.slice(0, 2).map((post, index) => (
                <div 
                  key={post.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <BlogCard post={post} variant="featured" />
                </div>
              ))}
            </div>

            {/* Second Row - 4 Small Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestPosts.slice(2, 6).map((post, index) => (
                <div 
                  key={post.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
            Explore by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Filtered Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.slice(0, 9).map((post, index) => (
              <div 
                key={post.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {filteredPosts.length > 9 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to={selectedCategory === "All" ? "/category/all" : `/category/${selectedCategory.toLowerCase()}`}>
                  View More Articles
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Stay Inspired
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Get the latest articles delivered to your inbox. No spam, just quality content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-cursive font-semibold mb-4">Ethereal</h3>
          <p className="text-muted-foreground mb-6">
            Crafting stories that matter, one word at a time.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary blog-link">
              Home
            </Link>
            <Link to="/category/design" className="text-muted-foreground hover:text-primary blog-link">
              Design
            </Link>
            <Link to="/category/technology" className="text-muted-foreground hover:text-primary blog-link">
              Technology
            </Link>
            <Link to="/category/lifestyle" className="text-muted-foreground hover:text-primary blog-link">
              Lifestyle
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t text-xs text-muted-foreground">
            © 2024 Ethereal Blog. Crafted with care and attention to detail.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
