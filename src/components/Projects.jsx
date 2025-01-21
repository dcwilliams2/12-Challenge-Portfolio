import React from 'react';

function Card({ title, imageUrl, links }) {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '18rem',
    height: '18rem',
    color: 'white',
    border: '2px solid #5f80abff',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '1rem',
  };

  return (
    <div className="card m-5" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {links.map((link, index) => (
          <a key={index} href={link.url} className="card-link">{link.text}</a>
        ))}
      </div>
    </div>
  );
}

export default Card;

  