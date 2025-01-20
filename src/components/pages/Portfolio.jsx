import '../../styles/Portfolio.css';
import React from 'react';
import Card from '../Projects';
import blog from '../../assets/blog.jpg';
import contactMe from '../../assets/contactMe.jpg';
import css from '../../assets/css.jpg';
import tailwinds from '../../assets/tailwinds.jpg';
import tracker from '../../assets/tracker.jpg';
import readMe from '../../assets/readMe.jpg';


function Portfolio() {
  const cardData = [
    {
      title: 'Blog',
      imageUrl: blog,
      links: [
        { text: 'Card link 1', url: '#' },
        { text: 'Another link 1', url: '#' },
      ],
    },
    {
      title: 'Employee Tracker',
      imageUrl: tracker,
      links: [
        { text: 'Card link 2', url: '#' },
        { text: 'Another link 2', url: '#' },
      ],
    },
    {
      title: 'ReadMe Builder',
      imageUrl: readMe,
      links: [
        { text: 'Card link 3', url: '#' },
        { text: 'Another link 3', url: '#' },
      ],
    },
    {
        title: 'Tail Wind',
        imageUrl: tailwinds,
        links: [
          { text: 'Card link 3', url: '#' },
          { text: 'Another link 3', url: '#' },
        ],
      },
      {
        title: 'CSS Style',
        imageUrl: css,
        links: [
          { text: 'Card link 3', url: '#' },
          { text: 'Another link 3', url: '#' },
        ],
      },
      {
        title: 'Contact Me',
        imageUrl: contactMe,
        links: [
          { text: 'Card link 3', url: '#' },
          { text: 'Another link 3', url: '#' },
        ],
      },
    
  ];

  return (
    <div className="m-5">
      <h1 className="underlined-text">Portfolio</h1>
      <p>This is a placeholder for the Portfolio page content.</p>

      <div className="row d-flex justify-content-center">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} links={card.links} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;



