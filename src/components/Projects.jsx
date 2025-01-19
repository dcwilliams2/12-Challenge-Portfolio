import React from 'react';

function Card ({ image, alt, title, link1, link2 }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
        <img src={image} class="card-img" alt={alt}></img>
            <div className="card-img-overlay">
                <h5 className="card-title">{title}</h5>
                <a href={link1} className="card-link">Card link</a>
                <a href={link2} className="card-link">Another link</a>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div>
            <Card
                image=" "
                alt=" "
                title="Card Title 1"
                link1="#"
                link2="#"
            />
            <Card
                image=" "
                alt=" "
                title="Card Title 2"
                link1="#"
                link2="#"
            />
        </div>
    );
}

export default Projects;
