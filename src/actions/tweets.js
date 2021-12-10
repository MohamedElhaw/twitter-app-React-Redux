import { saveLikeToggle,saveTweet } from "../utils/api";


//Define action types variables
export const LOAD_TWEETS='LOAD_TWEETS';
export const TOGGLE_LIKE='TOGGLE_LIKE';
export const ADD_TWEET='ADD_TWEET';

//Action creators functions
export const loadTweetsData=tweets=>{
    return{
        type:LOAD_TWEETS,
        tweets
    }
}

const toggleLike =({ id, hasLiked, authedUser })=>{
    return{
        type:TOGGLE_LIKE,
        id,
        hasLiked, 
        authedUser
    }
}


export const handleToggleLike=info=>{
    return (dispatch)=>{
        dispatch(toggleLike(info))
        saveLikeToggle(info) 
       .catch((e)=>{
        console.warn('Error in handleToggleLike: ', e);
        dispatch(toggleLike(info));
        alert('There was an error liking the tweet. Try again.');
       }) 
    }
}

const addTweet=tweet=>{
    return{
        type:ADD_TWEET,
        tweet
    }
}

export const handleAddTweet=({ text, author, replyingTo })=>{
    return(dispatch)=>{
        saveTweet({ text, author, replyingTo })
        .then((res)=>{
        dispatch(addTweet(res))}
        )
        .catch((e)=>{
            console.warn('Error in handleAddTweet: ', e)
        })
    }
}