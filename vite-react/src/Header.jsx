import logo from './React-icon.png';

export default function Header() {
    return (
    <div>
        <nav className="nav-head">
            <img className="logo" src={logo} alt='react-logo'></img>
            <ul className="nav-items">
                <li>Pricing </li>
                <li>About </li>
                <li>Contact </li>
            </ul>
        </nav>
    </div>)
  }