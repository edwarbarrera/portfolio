import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (

        <div className={"menu " + (menuOpen && "active")} id="menu">
          
            <ul>
            <li onClick={menuOpen = () => setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={menuOpen = () => setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={menuOpen = () => setMenuOpen(false)}>
                <a href="#testimonials">Testiomonials</a>
            </li>
            <li onClick={menuOpen = () => setMenuOpen(false)}>
                <a href="#travail">Works</a>
            </li>
            <li onClick={menuOpen = () => setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
            
            </ul>
        </div>

    )
}
