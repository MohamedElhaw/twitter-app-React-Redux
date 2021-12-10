import React from "react";
import { connect } from "react-redux";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";

const TweetPage=(props)=>{
    const {id,replies}=props
    return(
        <React.Fragment>
            {console.log(props)}
            <Tweet id={id}/>
            <NewTweet id={id}/>
            {replies.length!==0 && replies.map((replyId)=>
            <li key={replyId}>
                <Tweet id={replyId}/> 
            </li>
            )}
        </React.Fragment>
    );
}

export default connect(({tweets},{...props})=>{
    const id=window.location.pathname.slice(7,);
    return {
        props,
        id,
        tweets,
        replies: tweets[id]? tweets[id].replies.sort((a,b)=>tweets[b].timestamp-tweets[a].timestamp):[]
    }})
    (TweetPage)