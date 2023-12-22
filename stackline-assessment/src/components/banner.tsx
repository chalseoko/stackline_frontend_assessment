import logo from './../images/logo.svg';

export function Banner() {
    return (
        <div className="banner">
            <header>
                <img src={logo} className="logo" alt="Stackline company logo" />
            </header>
        </div>
    )
}