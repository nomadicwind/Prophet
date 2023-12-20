// src/components/NewsCard.tsx

import React from 'react';
import { NewsItem } from '../types/newsItem';

type Props = {
  newsItem: NewsItem;
  onLike: () => void;
  onEditLabels: () => void;
  onForward: () => void;
};

export const NewsCard: React.FC<Props> = ({ newsItem, onLike, onEditLabels, onForward }) => {
  return (
    <div className="activeNews">
      <h2>{newsItem.title}</h2>
      <p>{newsItem.summary}</p>
      <button onClick={onLike}>Like</button>
      <button onClick={onEditLabels}>Edit Labels</button>
      <button onClick={onForward}>Forward</button>
    </div>
  );
};
