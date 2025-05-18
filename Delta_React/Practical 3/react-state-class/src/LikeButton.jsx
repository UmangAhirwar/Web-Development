import {useState} from "react";
export default function likeButton(){
    let [like, setLike] = useState(false)
    function liked(){
        setLike(!like);
    }
    return(
        <>
        <p onClick={liked}> 
        {
            like ? (<i class="fa-solid fa-heart"></i>) : (<i class="fa-regular fa-heart"></i>)
        }

        </p>
        </>
    )
}