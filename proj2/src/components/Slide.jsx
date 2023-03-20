import star from "../static/Star 1.png"
export default function Slide(props) {
let badgeText 
if (props.openSpots === 0) {
    badgeText = 'SOLD OUT'
} else if (props.location === "Online") {
    badgeText = 'ONLINE'
}

    return (
        <div id='column'>
        <img src={props.pic} alt='slide' id='slidePic'></img>
        {badgeText && <div className="topLeft">
                    {badgeText}
        </div>}
        <p id="slideContent">
            <span className='inline'>
                <img src={star} alt='star'/>

                <span id='rate'>
                    {props.rating}
                </span>
                <span id='country'>
                    ({props.reviews}) - {props.location}
                </span>
            </span> <br></br>
            <span id='blurb'>
                {props.blurb}
            </span> <br></br>
            <span>
                <span className='bold'> 
                    From {props.cost}
                </span> / person
            </span>
        </p>
        </div>
    )
}