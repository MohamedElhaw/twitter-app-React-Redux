import React from "react";
import { connect } from "react-redux";
import { formatTweet,formatDate } from "../utils/helpers";
import {TiArrowBack} from 'react-icons/ti'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { handleToggleLike } from "../actions/tweets";
import { Link} from "react-router-dom";
import { createBrowserHistory } from "history";


const Tweet=(props)=>{
   const replyTo=(e,id)=>{
        e.preventDefault();
        let history=createBrowserHistory();
        history.push(`/tweet/${id}`);
        window.location.reload(false); //added because history.push doesn't reallocate!
    }       

  const  handleLike=(e)=>{
        e.preventDefault();
        const {dispatch, tweet, authedUser}=props;

        console.log('props',{dispatch, tweet, authedUser})
        dispatch(handleToggleLike({id:tweet.id, hasLiked:tweet.hasLiked, authedUser}))
    }

    const {tweet}=props;
    if (tweet===null){
        return<p>This Tweet doesn't exist</p>
    }
    const {name, timestamp, text, avatar, likes, replies, hasLiked, parent, id}=tweet;
    return(
        <Link to={`/tweet/${id}`}>
        <div className="tweet">
            <img src={avatar} alt={`Avatar of ${name}`} className="avatar"/>
        <div className="tweet-info">
            <div>
                <span>{name}</span>
                <div>{formatDate(timestamp)}</div>
                {parent && (
                    <button className="replying-to" onClick={(e)=>replyTo(e, parent.id)} >
                        replying to @{parent.author}
                    </button>)}
                <p>{text}</p> 
            </div>   
            <div className="tweet-icons">
                <TiArrowBack className="tweet-icon" onClick={(e)=>replyTo(e,id)}/>
                <span>{replies!==0&& replies}</span>
                <button className="heart-button" onClick={handleLike}>
                { hasLiked? 
                <AiFillHeart color="#e0245e" className="tweet-icon"/>
                : <AiOutlineHeart className="tweet-icon"/>
                }
                </button>
                <span>{likes!==0 &&likes}</span>
            </div>

        </div>
        </div>
        </Link>
    );

}
const mapStateToProps=({users, tweets, authorId},{id})=>{
const tweet=tweets[id]
if (tweet!==null){
    const author=users[tweet.author]
    const parentTweet= tweets[tweet.replyingTo]
    return {
        authedUser:authorId,
        tweet: formatTweet(tweet, author,authorId, parentTweet )
    }
}
else{
    return {
        authedUser:authorId,
        tweet:null
    }
}
}
export default connect(mapStateToProps)(Tweet)