import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar" >
            <div className="wrapper">
                <div className="left" id="left">
                    <a href="#intro" className="logo" >
                        edDev
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span className="span">0663642926</span>
                    </div><div className="itemContainer">
                        <Mail className="icon" />
                        <span className="span"> <a classNAme="mail" href="mailto:edwarbarrera@gmail.com" >edwarbarrera@gmail.com</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
