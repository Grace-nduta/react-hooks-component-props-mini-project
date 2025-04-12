import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const posts = [
  { id: 1, title: "Post 1", date: "April 1, 2025", preview: "This is the first post." },
  { id: 2, title: "Post 2", date: "April 2, 2025", preview: "This is the second post." },
  { id: 3, title: "Post 3", date: "April 3, 2025", preview: "This is the third post." },
];

function App() {
  return (
    <div className="App">
      <Header name="My Awesome Blog" />
            <About 
                image="https://example.com/my-image.jpg" 
                about="This is a blog about awesome things!" 
            />
            <ArticleList posts={posts} />
    </div>
    
  );
}

export default App;
