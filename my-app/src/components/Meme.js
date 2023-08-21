import React from "react";
import memesData from "../memesData";
import { useState } from "react";

let url;


export default function Meme ()
{
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages,setAllMemeImages]=useState(memesData)
    function imageclick()
    {

        const memesArray=allMemeImages.data.memes;
        const randomNumber=Math.floor(Math.random() * memesArray.length)
        const url=memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        })) 
        }
    return(
        <div className="meme">
            <form className="form">
                <input className="form-input" type="text" placeholder="Shut up"></input>
                <input className="form-input" type ="text" placeholder="and take my money"></input>
                <div>
                <button className="form-button" onClick={imageclick}>Get a new meme image 🖼</button>
                </div>
                <img src={meme.randomImage} className="meme-image" alt="" />
            </form>
        </div>
    )
}
