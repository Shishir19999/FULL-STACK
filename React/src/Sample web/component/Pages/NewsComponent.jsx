import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

function NewsComponent() {
    const [news,setNews]=useState([]);
  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2024-03-04&sortBy=publishedAt&apiKey=cb025e2b9dfe4a5bb5af386c4f78b7a6'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data.articles)
    })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);
  console.log("News:",news);
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <h1>News List</h1>
        </div>
      </div>
      <div className="row">
        {news.map((item, index) => {
          return (
            <NewsCard item={item} index={index} key={index}/>
          );
        })}
      </div>
    </div>
  );
}

export default NewsComponent;
