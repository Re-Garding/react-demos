import troll from "../assets/Troll.png"

export default function Header() {
    return (

            <ul className="headList">
                <img src={troll} />
                <li className="memeGen"><b>Meme Generator</b></li>
                <li className="push">React Course - Project 3</li>               
            </ul>

    )
}