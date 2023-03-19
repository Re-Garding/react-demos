export default function Header(src) {
    return (

        <nav>
            <img className="reactLogo" src={src['src']}></img>
            <h3 className="navHeader">ReactFacts</h3>
            <h4 className="navH4">React Course - Project 1</h4>
        </nav>

    )
}