
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const featuredPosts = blogPosts.filter(post => post.featured);
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
            <Link to="#featured">Start Reading</Link>
          </Button>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <BlogCard post={post} variant="featured" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
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

          {/* All Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
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
