// src/pages/HomePage.tsx

import React, { useState, useEffect } from 'react';
import { NewsItem } from '../types/newsItem';
import useNewsItems from '../hooks/useNewsItems';
import { NewsCard } from '../components/NewsCard';

const HomePage: React.FC = () => {
  const { newsItems, isLoading } = useNewsItems();
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);

  // Define dummy handler functions
  const handleLike = () => {
    console.log("Liked news:", activeNews?.id);
  };

  const handleEditLabels = () => {
    console.log("Edit labels for news:", activeNews?.id);
  };

  const handleForward = () => {
    console.log("Forward news:", activeNews?.id);
  };

  // Use useEffect to update the active news when new items are fetched
  useEffect(() => {
    if (newsItems.length > 0) {
      setActiveNews(newsItems[0]);
    }
  }, [newsItems]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!activeNews) {
    return <div>No news items available.</div>;
  }

  return (
    <div>
      <NewsCard 
        newsItem={activeNews} 
        onLike={handleLike}
        onEditLabels={handleEditLabels}
        onForward={handleForward}
      />
      {/* NewsQueue component and other content */}
    </div>
  );
};

export default HomePage;
