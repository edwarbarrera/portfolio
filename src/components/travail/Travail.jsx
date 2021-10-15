import { useState } from "react";
import "./travail.scss"

export default function Travail() {

        const[currentSlide, setCurrentSlide]=useState(0)
    const data = [

        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Mobile Application",
            desc: "Wip",
            img: "https://vupartout.com/public/uploads/services/Mobile-App-Development.png",

        },
        {
            id: "2",
            icon: "./assets/writing.png",
            title: "branding",
            desc: "Wip",
            img: "https://www.whiteriverdesign.com/wp-content/uploads/2016/11/Branding-v-marketing.png",

        },
        {
            id: "3",
            icon: "./assets/globe.png",
            title: "SpringBoot react",
            desc: "Wip",
            img: "./assets/spring boot app.png",

        }
    ]
const handleClick= (way)=>{
    way==="left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 :2) :
    setCurrentSlide(currentSlide<data.length-1? currentSlide +1:0)
}
    return (
        <div className="travail" id="travail">
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map(d => (
                    <div className="container">

                        <div className="item">
                            <div className="left">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={d.icon} alt={d.desc} />
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>
                                            <h2>Description</h2>
                                            {d.desc}  
                                        </p>
                                        <span>Projects</span>


                                    </div>
                                </div>
                                <div className="right">
                                    <img src={d.img} alt="projects" />

                                </div>
                            </div>
                        </div>
                    </div>))}

            </div>
            <img src="assets/right-arrow.png" className="arrow left" alt="left arrow"  onClick= {()=>handleClick("left")}/>
            <img src="assets/right-arrow.png" className="arrow right" alt="right arrow" onClick= {()=>handleClick()} />
        </div>
    );
}
