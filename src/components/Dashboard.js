import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

const Dashboard = props=>{
    return(
        <div >
            <h3 className='center'>Your Timeline</h3>
            {props.tweetsID.map(id=><li key={id}><Tweet id={id}/></li>)}
        </div>
    );
}

export default connect(({tweets})=>({
    tweetsID:Object.keys(tweets).sort((a,b)=>tweets[b].timestamp-tweets[a].timestamp)
}))(Dashboard)