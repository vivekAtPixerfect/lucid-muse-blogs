
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const Category = () => {
  const { category } = useParams();
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1);
  
  const filteredPosts = blogPosts.filter(
    post => post.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <Button variant="ghost" asChild className="mb-8 -ml-4">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {categoryName} Articles
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our collection of {categoryName?.toLowerCase()} articles
          </p>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {/* Featured post if any */}
            {filteredPosts.some(post => post.featured) && (
              <section className="mb-16">
                <h2 className="text-2xl font-serif font-semibold mb-8">Featured</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts
                    .filter(post => post.featured)
                    .map(post => (
                      <BlogCard key={post.id} post={post} variant="featured" />
                    ))}
                </div>
              </section>
            )}

            {/* All posts */}
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-8">
                All {categoryName} Articles
              </h2>
              <div className="space-y-6">
                {filteredPosts.map(post => (
                  <BlogCard key={post.id} post={post} variant="minimal" />
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              No articles found
            </h2>
            <p className="text-muted-foreground mb-8">
              We haven't published any {categoryName?.toLowerCase()} articles yet.
            </p>
            <Button asChild>
              <Link to="/">Explore All Articles</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
