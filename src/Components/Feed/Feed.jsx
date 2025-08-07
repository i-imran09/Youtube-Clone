import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY ,value_converter } from '../../data.js'
import moment from 'moment/moment'

const Feed = ({category}) => {

    const [datas,setDats]=useState([]);
    useEffect(()=>{
        const videolist_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
        fetch(videolist_url)
        .then((response) => response.json())
        .then((data) => setDats(data.items));
    },[category])

  return (
    <div className="feed">
        {datas.map((item,index)=>(
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{value_converter(item.statistics.viewCount)} views&bull; {moment(item.snippet?.publishedAt).fromNow()}</p>
    </Link>
        ))}

    </div>

  )
}
export default Feed