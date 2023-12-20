// src/components/NewsQueue.tsx

import React from 'react';
import { NewsItem } from '../types/newsItem';

type Props = {
  queue: NewsItem[];
  onSelect: (newsItem: NewsItem) => void;
};

export const NewsQueue: React.FC<Props> = ({ queue, onSelect }) => {
  return (
    <div className="newsQueue">
      {queue.map(news => (
        <div key={news.id} className="queuedNews" onClick={() => onSelect(news)}>
          <h3>{news.title}</h3>
          <p>{news.summary}</p>
        </div>
      ))}
    </div>
  );
};
