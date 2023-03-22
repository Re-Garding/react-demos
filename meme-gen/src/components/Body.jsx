import memes from "../assets/memes"
import { useState } from "react";



export default function Body() {
    const meme = memes['data']['memes'][1]['url']
    const [url, setUrl] = useState(meme);
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");

    function getNewMeme(e) {
        e.preventDefault();
        const memeNumber = Math.floor(Math.random() * 100);
        setUrl(url => (memes['data']['memes'][memeNumber]['url'])); 
    }

    function changeTextTop(e) {
        const text = (document.getElementById('top').value).toUpperCase();
        setTopText(text)
    }

    function changeTextBottom(e) {
        const text = (document.getElementById('bottom').value).toUpperCase();
        setBottomText(text)
    }

    return (
        <main>
            <form className="form">
                <input 
                    type='text' 
                    id ='top' 
                    onChange={changeTextTop} 
                    className="inputForm" 
                    placeholder="Top Line"
                />
                <input 
                    type='text' 
                    id='bottom' 
                    onChange={changeTextBottom}
                    className="inputForm" 
                    placeholder="Bottom Line"
                />
                <button onClick={getNewMeme}  className="newMemeButton">Get a new meme image</button>
            </form>
            <img src={url}/>
            <p className="topText art">{topText}</p>
            <p className="bottomText art">{bottomText}</p>
        </main>
    )
}