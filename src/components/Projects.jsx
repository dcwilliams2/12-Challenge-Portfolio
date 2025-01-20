import React from 'react';
//, title, link1, link2
//<a href={link1} className="card-link">Card link</a>
//                link1="#"
   //             link2="#"
//<a href={link2} className="card-link">Another link</a>


function Card ({ image, alt, title }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
        <img src={image} class="card-img" alt={alt}></img>
            <div className="card-img-overlay">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div>
            <Card
                image="../assets/app-blog.png"
                alt="blog"
                title="My First Blog"
            />
            <Card
                image="../assets/app-css.png"
                alt="CSS"
                title="CSS Cheat Sheet"
            />
        </div>
    );
}

export default Projects;
