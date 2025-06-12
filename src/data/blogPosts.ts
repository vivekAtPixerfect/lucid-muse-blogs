
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "minimalist-design-principles",
    title: "The Art of Minimalist Design: Less is More",
    excerpt: "Exploring the fundamental principles that make minimalist design so powerful and timeless in our modern digital world.",
    content: `# The Art of Minimalist Design: Less is More

Minimalism isn't just a design trend—it's a philosophy that emphasizes the power of simplicity. In our increasingly complex digital world, minimalist design offers a breath of fresh air, creating experiences that are both beautiful and functional.

## The Philosophy Behind Minimalism

At its core, minimalist design is about **intentionality**. Every element serves a purpose, and anything that doesn't contribute to the user's goals is eliminated. This approach creates interfaces that are:

- **Clear and focused**
- **Easy to navigate**
- **Aesthetically pleasing**
- **Performant and fast**

## Key Principles of Minimalist Design

### 1. White Space is Your Friend

White space, or negative space, isn't empty space—it's a powerful design element that:
- Improves readability
- Creates visual hierarchy
- Reduces cognitive load
- Makes content more scannable

### 2. Typography Takes Center Stage

With fewer visual elements competing for attention, typography becomes crucial:
- Choose fonts that reflect your brand's personality
- Maintain consistent hierarchy
- Ensure optimal readability across devices
- Use font weights strategically

### 3. Color with Purpose

Minimalist design doesn't mean colorless design:
- Stick to a limited color palette
- Use color to guide attention
- Ensure sufficient contrast
- Let color communicate emotion

## Implementing Minimalism in Practice

The key to successful minimalist design lies in understanding what to remove and what to keep. Start with everything you think you need, then systematically eliminate elements that don't serve your core objectives.

> "Simplicity is the ultimate sophistication." - Leonardo da Vinci

Remember, minimalism isn't about having less—it's about making room for more of what matters.`,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Design Director with 10+ years of experience in creating beautiful, user-centered digital experiences."
    },
    category: "Design",
    tags: ["minimalism", "design principles", "ui/ux"],
    publishedAt: "2024-03-15",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "2",
    slug: "future-of-web-development",
    title: "The Future of Web Development: Trends to Watch",
    excerpt: "A deep dive into emerging technologies and methodologies that are shaping the future of web development.",
    content: `# The Future of Web Development: Trends to Watch

The web development landscape is evolving at an unprecedented pace. From new frameworks to revolutionary approaches to building applications, developers need to stay ahead of the curve.

## Revolutionary Technologies

### WebAssembly (WASM)
WebAssembly is changing how we think about web performance:
- Near-native performance in browsers
- Language-agnostic development
- Complex applications in the browser
- Gaming and multimedia experiences

### Edge Computing
Bringing computation closer to users:
- Reduced latency
- Better user experiences
- Global content distribution
- Real-time applications

## Development Methodologies

The way we build applications is also evolving:

1. **Component-driven development**
2. **JAMstack architecture**
3. **Serverless computing**
4. **Progressive Web Apps**

## The Rise of AI in Development

Artificial intelligence is becoming an integral part of the development process:
- Code generation and completion
- Automated testing
- Performance optimization
- User experience personalization

The future of web development is bright, filled with opportunities for those willing to embrace change and continuous learning.`,
    author: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Full-stack developer and technology enthusiast with a passion for emerging web technologies."
    },
    category: "Technology",
    tags: ["web development", "future", "trends"],
    publishedAt: "2024-03-12",
    readTime: 12,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "3",
    slug: "mindful-productivity",
    title: "Mindful Productivity: Working Smarter, Not Harder",
    excerpt: "Discover how mindfulness practices can transform your productivity and lead to better work-life balance.",
    content: `# Mindful Productivity: Working Smarter, Not Harder

In our always-on culture, the pursuit of productivity has become almost obsessive. But what if the key to getting more done isn't about doing more, but about being more present with what we're already doing?

## The Mindfulness Revolution

Mindful productivity isn't about cramming more tasks into your day. It's about:
- **Being fully present** in your current task
- **Reducing mental clutter** and distractions
- **Making intentional choices** about how you spend your time
- **Cultivating awareness** of your energy patterns

## Practical Mindfulness Techniques

### 1. The Single-Tasking Practice
Despite what we've been told, multitasking is a myth. Our brains are designed to focus on one thing at a time.

### 2. Mindful Breaks
Instead of scrolling through social media:
- Take three deep breaths
- Look out the window
- Do a quick body scan
- Practice gratitude

### 3. The Two-Minute Rule
If something takes less than two minutes, do it now. This prevents small tasks from accumulating and becoming overwhelming.

## Creating Mindful Work Environments

Your environment shapes your state of mind:
- **Declutter your workspace** regularly
- **Use natural light** when possible
- **Incorporate plants** or natural elements
- **Minimize digital distractions**

Remember, productivity isn't about perfection—it's about progress with presence.`,
    author: {
      name: "Maya Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Mindfulness coach and productivity consultant helping professionals find balance in their work and life."
    },
    category: "Lifestyle",
    tags: ["productivity", "mindfulness", "work-life balance"],
    publishedAt: "2024-03-10",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    featured: false
  }
];

export const categories = [
  "All",
  "Design",
  "Technology", 
  "Lifestyle",
  "Business",
  "Travel",
  "Food"
];
