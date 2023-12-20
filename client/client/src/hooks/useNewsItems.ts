// src/hooks/useNewsItems.ts

import { useState, useEffect } from 'react';
import { NewsItem } from '../types/newsItem';

// This is a mock function to simulate fetching data from a database.
const fetchNewsItemsFromDatabase = async (): Promise<NewsItem[]> => {
  // Replace this with your actual database fetching logic
  return [
    { id: 1, title: 'News Item 1', summary: 'Summary of news item 1' },
    { id: 2, title: 'News Item 2', summary: 'Summary of news item 2' },
    { id: 3, title: 'News Item 3', summary: 'Summary of news item 3' },
    // ... more news items
  ];
};

const useNewsItems = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchNewsItemsFromDatabase();
        setNewsItems(data);
      } catch (error) {
        console.error('Error fetching news items:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return { newsItems, isLoading };
};

export default useNewsItems;