import Navigation from './Navigation';
import logo from './static/logo.png'

export default function Header () {
    return (
        <header class="header">
            <Navigation></Navigation>
            <div>
                <img src={logo} alt="logo"></img>
                <div class="hidden"></div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </header>
    );
}