
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React in 2025",
    excerpt: "Learn how to build modern web applications with React, the popular JavaScript library for building user interfaces.",
    content: `
      <p>React has evolved significantly since its initial release by Facebook in 2013. As we move into 2025, it continues to be one of the most popular JavaScript libraries for building user interfaces.</p>
      
      <h2>Why React?</h2>
      <p>React offers a component-based architecture that makes it easy to build and maintain complex UIs. With its virtual DOM and efficient rendering system, React applications are fast and responsive.</p>
      
      <h2>Setting Up Your Environment</h2>
      <p>Getting started with React has never been easier. With tools like Create React App, Vite, and Next.js, you can have a new React application running in minutes.</p>
      
      <pre><code>
      # Using Vite (recommended)
      npm create vite@latest my-react-app -- --template react-ts
      
      # Navigate to your new app
      cd my-react-app
      
      # Install dependencies
      npm install
      
      # Start the development server
      npm run dev
      </code></pre>
      
      <h2>React Hooks</h2>
      <p>React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have revolutionized how developers write React components.</p>
      
      <p>The most commonly used hooks include:</p>
      <ul>
        <li><strong>useState</strong>: For managing local component state</li>
        <li><strong>useEffect</strong>: For handling side effects</li>
        <li><strong>useContext</strong>: For accessing context values</li>
        <li><strong>useReducer</strong>: For more complex state management</li>
        <li><strong>useRef</strong>: For accessing DOM elements directly</li>
      </ul>
      
      <h2>Moving Forward</h2>
      <p>As React continues to evolve, staying updated with the latest features and best practices is essential for building high-quality applications. The React documentation is an excellent resource for learning about new features and patterns.</p>
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    date: "April 15, 2025",
    readingTime: "5 min read",
    category: "Frontend Development",
    tags: ["React", "JavaScript", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: "2",
    title: "Exploring the Power of Tailwind CSS",
    excerpt: "Discover why Tailwind CSS has become a favorite among web developers and how it can improve your workflow.",
    content: `
      <p>Tailwind CSS has revolutionized how developers approach styling web applications. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind gives you utility classes that you can compose to build custom designs.</p>
      
      <h2>The Utility-First Approach</h2>
      <p>Tailwind's utility-first approach allows you to build complex components without ever leaving your HTML. This approach may seem verbose at first, but it offers unmatched flexibility and speed in development.</p>
      
      <pre><code>
      <!-- Before: Custom CSS -->
      <div class="chat-notification">
        <div class="chat-notification-logo-wrapper">
          <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">ChitChat</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>

      <!-- After: With Tailwind -->
      <div class="p-4 bg-white rounded-lg shadow-md flex items-center">
        <div class="flex-shrink-0">
          <img class="h-10 w-10" src="/img/logo.svg" alt="ChitChat Logo">
        </div>
        <div class="ml-4">
          <h4 class="text-lg font-semibold">ChitChat</h4>
          <p class="text-gray-600">You have a new message!</p>
        </div>
      </div>
      </code></pre>
      
      <h2>Configuration and Customization</h2>
      <p>One of Tailwind's strongest features is its extensive customization options. Through the tailwind.config.js file, you can customize colors, spacing, breakpoints, and much more to match your project's design requirements.</p>
      
      <h2>The Future of Tailwind CSS</h2>
      <p>With the growing popularity of Tailwind CSS, we can expect to see more tools and integrations built around it. The ecosystem is already vibrant, with plugins, UI component libraries, and design tools specifically made for Tailwind.</p>
    `,
    author: {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?u=michael"
    },
    date: "April 10, 2025",
    readingTime: "4 min read",
    category: "CSS",
    tags: ["CSS", "Tailwind", "Web Design"],
    coverImage: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: "3",
    title: "The Future of JavaScript: What to Expect in 2025",
    excerpt: "JavaScript continues to evolve. Learn about the upcoming features and changes that will shape the language in 2025.",
    content: `
      <p>JavaScript has come a long way since its inception in 1995. From being a simple scripting language to becoming the backbone of modern web development, JavaScript's evolution has been remarkable.</p>
      
      <h2>ECMAScript Updates</h2>
      <p>The ECMAScript standard, which specifies JavaScript's syntax and features, continues to evolve with annual updates. Some of the proposed features for upcoming versions include:</p>
      
      <ul>
        <li><strong>Record and Tuple Types</strong>: Immutable data structures that can be used as object keys</li>
        <li><strong>Pattern Matching</strong>: A powerful way to match and destructure complex data structures</li>
        <li><strong>Decorators</strong>: A way to annotate and modify classes and class members</li>
        <li><strong>Top-level await</strong>: The ability to use await outside of async functions</li>
      </ul>
      
      <h2>WebAssembly Integration</h2>
      <p>WebAssembly (Wasm) continues to grow in importance, offering a way to run high-performance code in the browser. The integration between JavaScript and WebAssembly is becoming more seamless, allowing developers to leverage the strengths of both technologies.</p>
      
      <h2>Type Safety with TypeScript</h2>
      <p>TypeScript has become an essential tool for JavaScript developers, offering type safety and improved tooling. As TypeScript continues to evolve, we can expect even better type inference and more powerful features to enhance the development experience.</p>
      
      <pre><code>
      // Example of TypeScript features
      type User = {
        id: number;
        name: string;
        email: string;
        role: "admin" | "user" | "guest";
      };

      function getUser(id: number): Promise<User> {
        return fetch(`/api/users/${id}`)
          .then(response => response.json());
      }

      // Using top-level await (available in modern environments)
      const currentUser = await getUser(1);
      console.log(currentUser.name);
      </code></pre>
    `,
    author: {
      name: "Alex Rodriguez",
      avatar: "https://i.pravatar.cc/150?u=alex"
    },
    date: "April 5, 2025",
    readingTime: "6 min read",
    category: "JavaScript",
    tags: ["JavaScript", "ECMAScript", "WebAssembly"],
    coverImage: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to make your web applications more accessible to users with disabilities.",
    content: `
      <p>Web accessibility is about ensuring that websites and web applications are usable by everyone, including people with disabilities. Building accessible web applications is not only a legal requirement in many jurisdictions but also a moral obligation and a good business practice.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility encompasses a wide range of disabilities, including visual, auditory, physical, speech, cognitive, and neurological disabilities. By designing with accessibility in mind, we can ensure that our web applications are usable by as many people as possible.</p>
      
      <h2>Key Accessibility Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a set of recommendations for making web content more accessible. The guidelines are organized around four principles:</p>
      
      <ul>
        <li><strong>Perceivable</strong>: Information and user interface components must be presentable to users in ways they can perceive.</li>
        <li><strong>Operable</strong>: User interface components and navigation must be operable.</li>
        <li><strong>Understandable</strong>: Information and the operation of the user interface must be understandable.</li>
        <li><strong>Robust</strong>: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
      </ul>
      
      <h2>Practical Tips for Building Accessible Web Applications</h2>
      
      <h3>Semantic HTML</h3>
      <p>Using semantic HTML is one of the simplest and most effective ways to improve accessibility. Semantic HTML provides meaning to your content, making it easier for assistive technologies to understand and navigate your web applications.</p>
      
      <pre><code>
      <!-- Not semantic -->
      <div class="header">
        <div class="title">Page Title</div>
      </div>

      <!-- Semantic -->
      <header>
        <h1>Page Title</h1>
      </header>
      </code></pre>
      
      <h3>ARIA Attributes</h3>
      <p>Accessible Rich Internet Applications (ARIA) attributes can be used to provide additional information about the structure and behavior of your web applications to assistive technologies.</p>
      
      <pre><code>
      <button aria-expanded="false" aria-controls="menu-list">
        Menu
      </button>
      <ul id="menu-list" role="menu" hidden>
        <li role="menuitem"><a href="/">Home</a></li>
        <li role="menuitem"><a href="/about">About</a></li>
        <li role="menuitem"><a href="/contact">Contact</a></li>
      </ul>
      </code></pre>
      
      <h3>Keyboard Navigation</h3>
      <p>Ensuring that all interactive elements are accessible via keyboard is crucial for users who cannot use a mouse. This includes managing focus states and ensuring a logical tab order.</p>
      
      <h2>Testing for Accessibility</h2>
      <p>Regular testing is essential to ensure that your web applications meet accessibility standards. This can be done using automated tools like Lighthouse or axe, as well as manual testing with screen readers and other assistive technologies.</p>
    `,
    author: {
      name: "Priya Sharma",
      avatar: "https://i.pravatar.cc/150?u=priya"
    },
    date: "March 28, 2025",
    readingTime: "7 min read",
    category: "Accessibility",
    tags: ["Accessibility", "WCAG", "HTML"],
    coverImage: "https://images.unsplash.com/photo-1584697964328-b1e7c32ee59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "5",
    title: "Modern Backend Development with Node.js",
    excerpt: "Explore advanced patterns and practices for building robust backend services with Node.js.",
    content: `
      <p>Node.js has become a popular choice for building backend services, thanks to its non-blocking I/O model and the vast ecosystem of packages available on npm. In this article, we'll explore some advanced patterns and practices for building robust backend services with Node.js.</p>
      
      <h2>Asynchronous Patterns</h2>
      <p>Node.js is built around an event-driven, non-blocking I/O model, making it efficient for handling asynchronous operations. Modern Node.js applications often use async/await to handle asynchronous code, making it more readable and maintainable.</p>
      
      <pre><code>
      // Using async/await with Express
      app.get('/users/:id', async (req, res) => {
        try {
          const user = await User.findById(req.params.id);
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.json(user);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      });
      </code></pre>
      
      <h2>API Design Patterns</h2>
      <p>Well-designed APIs are crucial for building scalable and maintainable backend services. RESTful APIs and GraphQL are two popular approaches for designing APIs in Node.js applications.</p>
      
      <h3>RESTful APIs</h3>
      <p>RESTful APIs use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources. Express.js is a popular framework for building RESTful APIs in Node.js.</p>
      
      <h3>GraphQL</h3>
      <p>GraphQL provides a more flexible approach to API design, allowing clients to request only the data they need. Apollo Server is a popular choice for building GraphQL APIs in Node.js.</p>
      
      <pre><code>
      // GraphQL schema definition
      const typeDefs = gql\`
        type User {
          id: ID!
          name: String!
          email: String!
          posts: [Post!]!
        }
        
        type Post {
          id: ID!
          title: String!
          content: String!
          author: User!
        }
        
        type Query {
          user(id: ID!): User
          users: [User!]!
          post(id: ID!): Post
          posts: [Post!]!
        }
      \`;
      </code></pre>
      
      <h2>Database Integration</h2>
      <p>Node.js applications can work with various types of databases, including relational databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB, Redis). ORMs (Object-Relational Mappers) like Sequelize and Mongoose provide a higher-level API for working with databases.</p>
      
      <h2>Error Handling and Logging</h2>
      <p>Proper error handling and logging are essential for building robust backend services. Using error middleware in Express.js can help centralize error handling logic.</p>
      
      <pre><code>
      // Error handling middleware in Express
      app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({
          message: 'Something went wrong!',
          ...(process.env.NODE_ENV === 'development' && { error: err.message })
        });
      });
      </code></pre>
      
      <h2>Testing</h2>
      <p>Testing is crucial for ensuring the reliability of your backend services. Jest, Mocha, and SuperTest are popular tools for testing Node.js applications.</p>
      
      <h2>Containerization and Deployment</h2>
      <p>Docker and Kubernetes have become the go-to tools for containerizing and deploying Node.js applications. Containerization ensures that your application runs consistently across different environments.</p>
    `,
    author: {
      name: "David Wilson",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    date: "March 20, 2025",
    readingTime: "8 min read",
    category: "Backend",
    tags: ["Node.js", "API", "Backend"],
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
  },
  {
    id: "6",
    title: "Mastering CSS Grid Layout",
    excerpt: "Learn how to create complex layouts with CSS Grid, the most powerful layout system available in CSS.",
    content: `
      <p>CSS Grid Layout is a two-dimensional layout system designed for organizing content on web pages. It allows you to create complex layouts that were previously difficult or impossible to achieve with CSS.</p>
      
      <h2>Basic Concepts</h2>
      <p>CSS Grid Layout works by applying CSS rules both to a parent element (the Grid Container) and its children (the Grid Items).</p>
      
      <pre><code>
      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        gap: 20px;
      }
      </code></pre>
      
      <h2>Creating a Basic Grid</h2>
      <p>To create a basic grid, you need to define the grid container and specify the number and size of columns and rows.</p>
      
      <pre><code>
      .container {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: auto auto;
        gap: 10px;
      }
      </code></pre>
      
      <h2>Placing Items on the Grid</h2>
      <p>You can place items on the grid using grid-column and grid-row properties. These properties specify which grid lines the item should start and end at.</p>
      
      <pre><code>
      .item1 {
        grid-column: 1 / 3; /* Start at column line 1 and end at column line 3 */
        grid-row: 1 / 2; /* Start at row line 1 and end at row line 2 */
      }
      </code></pre>
      
      <h2>Creating Complex Layouts</h2>
      <p>CSS Grid allows you to create complex layouts by placing items across multiple grid cells.</p>
      
      <pre><code>
      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto auto auto;
        gap: 10px;
      }

      .header {
        grid-column: 1 / -1; /* Span all columns */
        grid-row: 1 / 2;
      }

      .sidebar {
        grid-column: 1 / 2;
        grid-row: 2 / 4;
      }

      .main {
        grid-column: 2 / -1;
        grid-row: 2 / 3;
      }

      .footer {
        grid-column: 2 / -1;
        grid-row: 3 / 4;
      }
      </code></pre>
      
      <h2>Responsive Grids</h2>
      <p>You can create responsive grids using the minmax() function and the auto-fill or auto-fit keywords.</p>
      
      <pre><code>
      .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
      }
      </code></pre>
      
      <h2>Grid Areas</h2>
      <p>Grid areas provide a more visual way of defining grid layouts using the grid-template-areas property.</p>
      
      <pre><code>
      .container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
          "header header"
          "sidebar main"
          "footer footer";
        gap: 10px;
      }

      .header { grid-area: header; }
      .sidebar { grid-area: sidebar; }
      .main { grid-area: main; }
      .footer { grid-area: footer; }
      </code></pre>
    `,
    author: {
      name: "Emily Taylor",
      avatar: "https://i.pravatar.cc/150?u=emily"
    },
    date: "March 15, 2025",
    readingTime: "6 min read",
    category: "CSS",
    tags: ["CSS", "Grid", "Layout"],
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];
