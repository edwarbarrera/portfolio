import "./testimonials.scss"

export default function Testimonials() {
    const data = [

        {
            id: "1",
            name:"Cléo",
            icon: "./assets/mobile.png",
            title: "Dev Java",
            desc: "Wip",
            img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?cs=srgb&dl=pexels-ike-louie-natividad-2709388.jpg&fm=jpg",

        },
        {
            id: "2",
            name:"Pascal",
            icon: "./assets/writing.png",
            title: "Senior dev",
            desc: "Wip",
            img: "https://images.pexels.com/photos/2796273/pexels-photo-2796273.jpeg?cs=srgb&dl=pexels-mehrad-vosoughi-2796273.jpg&fm=jpg",
            featured:"true",

        },
        {
            id: "3",
            name:"Roberto",
            icon: "./assets/discord.png",
            title: "SpringBoot Dev",
            desc: "Wip",
            img: "https://images.pexels.com/photos/1194196/pexels-photo-1194196.jpeg?cs=srgb&dl=pexels-brett-sayles-1194196.jpg&fm=jpg",

        }]
    
        return (
        <div className="testimonials" id="testimonials">
            <h1>Temoignages</h1>
            <div className="container">
            {data.map((d)=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img   className="left" 
                        src="assets/right-arrow.png"alt="" />
                        <img className="user"
                         src={d.img} alt="" />
                        <img  className="right" 
                        src={d.icon}  alt="" />
                    </div>
                    <div className="center">
                       {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4> {d.title}</h4>
                    </div>

                </div>))}
            </div>
            
        </div>
            
       
    )
}
