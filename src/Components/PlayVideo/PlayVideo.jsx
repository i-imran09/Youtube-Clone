import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {

  const{videoId}=useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChanneldata] = useState(null);
  const [commentData,setCommentData]=useState([]);

  useEffect(() => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  }, [videoId]);

  useEffect(() => {
    if (!apiData?.snippet?.channelId) return;
    const ChannelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    fetch(ChannelDetails_url)
      .then((response) => response.json())
      .then((data) => setChanneldata(data.items));
  }, [apiData]);

  useEffect(() => {
    if (!videoId) return;
    const commentDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    fetch(commentDetails_url)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items))
      .catch((err) => console.error("Comment fetch error:", err));
  }, [videoId]);


  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {value_converter(apiData ? apiData.statistics.viewCount : "16k")} view
          &bull; {moment(apiData ? apiData.snippet.publishedAt : "").fromNow()}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {value_converter(apiData ? apiData.statistics.likeCount : "155")}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={
            channelData && channelData[0]?.snippet?.thumbnails?.default?.url
              ? channelData[0].snippet.thumbnails.default.url
              : jack
          }
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel name"}</p>
          <span>{value_converter(channelData && channelData[0]?.statistics?.subscriberCount
              ? channelData[0].statistics?.subscriberCount
              : "1M")} subscribers</span>
        </div>
        <button>Subscripe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Video description"}
        </p>
        <hr />
        <h4>
          {value_converter(apiData ? apiData.statistics.commentCount : "16k")}{" "}
          comments
        </h4>
        {commentData.map((iteam,index)=>{
           return(
            <div key={index}className="comment">
            <img src={iteam.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
              <h3>
                {iteam.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(iteam.snippet.topLevelComment.snippet.publishedAt).fromNow()}day ago</span>{" "}
              </h3>
              <p>
                {(iteam.snippet.topLevelComment.snippet.textDisplay).slice(0,150)}
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>{value_converter(iteam.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
           )
           })}
      </div>
    </div>
  );
};
export default PlayVideo;
