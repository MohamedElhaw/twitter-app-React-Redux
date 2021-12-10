import React,{Component} from "react";
import { handleAddTweet } from "../actions/tweets";
import {connect} from "react-redux";
import { Navigate } from "react-router";

class NewTweet extends Component{
    state={
        text:'',
        backToHome: false
    }
    handleSubmit=e=>{
        e.preventDefault();
        const {text}=this.state;
        const{author, dispatch, id}=this.props;
        dispatch(handleAddTweet({ text, author, replyingTo:id }))
        this.setState({text:'',
            backToHome: id? false:true
        });
    }
    handleChange=e=>{
        let {text}=this.state;
        text=e.target.value;
        this.setState({text});
    }

    render(){
        const {text,backToHome}=this.state;
        const tweetLeft=280-text.length;
        const {id}=this.props;
        
        if (backToHome){
            return <Navigate to="/"/>
        }

        return(
            <div>
                <h3 className="center">{id?'Replying to Tweet':'Compose New Tweet'}</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea value={this.state.text} maxLength={280} className="textarea" placeholder="What's happening?"
                     onChange={this.handleChange}/>
                     {tweetLeft<=100 && 
                     <div className="tweet-length">
                         {tweetLeft}
                     </div>
                     }
                    <button className="btn" type="submit" disabled={text===""}>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(({authorId},{id})=>({
    author:authorId,
    id
}
    ))(NewTweet)
