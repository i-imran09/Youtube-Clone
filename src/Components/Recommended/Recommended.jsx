import React, { useEffect, useState } from 'react';
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import { API_KEY ,value_converter} from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId=0 }) => {
  const [recomapi, setRecomapi] = useState([]);

  useEffect(() => {
    const Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=46&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    fetch(Url)
      .then((res) => res.json())
      .then((data) => setRecomapi(data.items || [])) 
      .catch((err) => console.log(err + ' RECOMMEND VIDEO API ERROR'));
  }, [categoryId]); 
  return (
    <div className="recommended">
      {recomapi.map((items, index) => (
        <Link key={index} to={`/video/${items.snippet.categoryId}/${items.id}`} className="side-vide-list" >
          <img src={items?.snippet?.thumbnails?.medium?.url || thumbnail1} alt={items?.snippet?.title} />
          <div className="vid-info">
            <h4>{items?.snippet?.title || 'No title'}</h4>
            <p>{items?.snippet?.channelTitle || 'Unknown channel'}</p>
            <p>{value_converter(items?.statistics?.viewCount) || '0'} views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
