import logo from './static/logo.png'

export default function Header () {
    return (
        <header class="header">
            <img src={logo} alt="logo"></img>
        </header>
    );
}