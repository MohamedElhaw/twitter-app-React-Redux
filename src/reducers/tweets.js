import {LOAD_TWEETS, TOGGLE_LIKE, ADD_TWEET} from '../actions/tweets'

export default function tweets (state={}, action){
    switch (action.type){
        case LOAD_TWEETS:
            return action.tweets
        case TOGGLE_LIKE:
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    likes: action.hasLiked? 
                    state[action.id].likes.filter((id)=>id!==action.authedUser):
                    state[action.id].likes.concat([action.authedUser])
                }
            }
        case ADD_TWEET:
            let replyingto={}
            if (action.tweet.replyingTo!==null){
                console.log('action replying to',action)
                replyingto = {
                    [action.tweet.replyingTo]:{...state[action.tweet.replyingTo], 
                    replies:state[action.tweet.replyingTo].replies.concat([action.tweet.id])
                }
                }
            }
            
            return{
                ...state,
                [action.tweet.id]:action.tweet,
                ...replyingto
            }
        default:
            return state;
    }
}