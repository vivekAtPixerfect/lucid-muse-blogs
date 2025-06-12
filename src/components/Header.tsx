
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import SearchModal from "./SearchModal";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <h1 className="text-2xl font-cursive font-semibold text-primary group-hover:text-primary/80 transition-colors">
                Ethereal
              </h1>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-foreground/80 hover:text-primary transition-colors blog-link"
              >
                Home
              </Link>
              <Link 
                to="/category/design" 
                className="text-foreground/80 hover:text-primary transition-colors blog-link"
              >
                Design
              </Link>
              <Link 
                to="/category/technology" 
                className="text-foreground/80 hover:text-primary transition-colors blog-link"
              >
                Technology
              </Link>
              <Link 
                to="/category/lifestyle" 
                className="text-foreground/80 hover:text-primary transition-colors blog-link"
              >
                Lifestyle
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="hover:bg-primary/10"
              >
                <Search className="h-5 w-5" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default Header;
