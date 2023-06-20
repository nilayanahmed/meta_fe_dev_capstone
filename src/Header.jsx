import Navigation from './Navigation';
import logo from './static/logo.png'

export default function Header () {
    return (
        <header className="header">
            <Navigation></Navigation>
            <div>
                <img src={logo} alt="logo"></img>
                <div className="hidden"></div>
                <p>
                " We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. "
                </p>
            </div>
        </header>
    );
}