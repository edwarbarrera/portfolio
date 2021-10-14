import "./travail.scss"

export default function Travail() {
    return (
        <div className="travail" id="travail">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="mobile" />
                                </div>
                                <h2>Titre</h2>
                                <p>
                                <h2>Description</h2>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </p>
                                <span>Projects</span>


                            </div>
                        </div>
                        <div className="right">
                            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/07/7cd7150cdc497d419515fb465e8088de-e1531145136824.jpg?auto=format&q=60&fit=max&w=930" alt="projects" />

                        </div>
                    </div>
                </div>
            </div>
            
         </div>
         <img src="assets/right-arrow.png" className="arrow left" alt="left arrow" />
            <img src="assets/right-arrow.png" className="arrow right" alt="right arrow" />
            </div>
    );
}
