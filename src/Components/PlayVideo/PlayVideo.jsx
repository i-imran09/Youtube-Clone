import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


const PlayVideo = () => {
  return (
    <div className="play-video">
        <video src={video1} controls autoPlay muted></video>
        <h3>Best youtube channel to learn web development</h3>
        <div className="play-video-info">
            <p>1523 view &bull; 2 days ago</p>
        <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />2</span>
            <span><img src={share} alt="" />share</span>
            <span><img src={save} alt="" />save</span>
        </div>
        </div>
        <hr/>
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Imranstack</p>
                <span>1M subscribers</span>
            </div>
            <button>Subscripe</button>
        </div>
        <div className="vid-description">
            <p>Channel that make learning esay</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <hr />
            <h4>130 comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Imran <span>1 day ago</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor, qui odio optio ullam veritatis rerum assumenda quidem iste placeat aliquid, eius nostrum neque sint? Facilis tempore odio qui excepturi, at numquam quis asperiores assumenda temporib
                        us eos minus nam culpa totam. </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo