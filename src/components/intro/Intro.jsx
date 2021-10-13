import "./intro.scss"
import {init} from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef=useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor:false,
            backDelay:1500,
            backSpeed:50,
            showCursor:true,
            strings:["Concepteur", "Java", "JavaScript"]
        })

    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer" >
                    <img src="assets/Photo_Edwar.png" alt="Photo edwar" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, je suis </h2>
                    <h1>Edwar Barrera</h1>
                    <h3> Développeur <span ref={textRef}></span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="fleche vers le bas" />
                </a>
            </div>
        </div>
    )
}
