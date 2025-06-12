
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Heart, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import ReadingProgress from "@/components/ReadingProgress";
import SocialShare from "@/components/SocialShare";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(42);
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Header />
      
      <article className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8 -ml-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Articles
            </Link>
          </Button>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-start justify-between flex-wrap gap-6">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{post.author.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              
              <SocialShare title={post.title} url={`/blog/${post.slug}`} />
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </div>

          {/* Article Footer */}
          <footer className="space-y-8">
            <Separator />
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Interaction Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`${liked ? 'text-red-500' : ''} hover:text-red-500`}
                >
                  <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                  {likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  12 Comments
                </Button>
              </div>
              
              <SocialShare title={post.title} url={`/blog/${post.slug}`} />
            </div>

            <Separator />

            {/* Author Bio */}
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    About {post.author.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Join the Conversation
              </h3>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                    alt="Commenter"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-medium mb-1">Alex Johnson</h4>
                      <p className="text-sm text-muted-foreground">
                        This is such an insightful article! I especially loved the section about minimalist principles. It really changed how I think about design.
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <span>2 hours ago</span>
                      <button className="hover:text-primary">Reply</button>
                      <button className="hover:text-primary">Like</button>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 ml-14">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
                    alt="Commenter"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-medium mb-1">Sarah Chen</h4>
                      <p className="text-sm text-muted-foreground">
                        Thank you Alex! I'm so glad it resonated with you. That's exactly what I was hoping to achieve with this piece.
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <span>1 hour ago</span>
                      <button className="hover:text-primary">Reply</button>
                      <button className="hover:text-primary">Like</button>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="border-t pt-6">
                  <h4 className="font-medium mb-4">Leave a comment</h4>
                  <div className="space-y-4">
                    <textarea
                      placeholder="Share your thoughts..."
                      className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      rows={4}
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">
                        Please be respectful and constructive in your comments.
                      </p>
                      <Button>Post Comment</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
