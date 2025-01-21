import '../../styles/Portfolio.css';
import React from 'react';
import Card from '../Projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import blog from '../../assets/blog.jpg';
import contactMe from '../../assets/contactMe.jpg';
import css from '../../assets/css.jpg';
import tailwinds from '../../assets/tailwinds.jpg';
import tracker from '../../assets/tracker.jpg';
import readMe from '../../assets/readMe.jpeg';


function Portfolio() {
  const cardData = [
    {
      title: 'Blog',
      imageUrl: blog,
      links: [
        { text: <FontAwesomeIcon icon={faGithub}/>, url: 'https://github.com/dcwilliams2/04-Challenge' },
        { text: <FontAwesomeIcon icon={faTv}/>, url: '#' },
      ],
    },
    {
      title: 'Employee Tracker',
      imageUrl: tracker,
      links: [
        { text: <FontAwesomeIcon icon={faGithub}/>, url: 'https://github.com/dcwilliams2/03-Challenge' },
        { text: <FontAwesomeIcon icon={faTv}/>, url: '#' },
      ],
    },
    {
      title: 'ReadMe Builder',
      imageUrl: readMe,
      links: [
        { text: <FontAwesomeIcon icon={faGithub}/>, url: 'https://github.com/dcwilliams2/07-Challenge-README-Generator' },
        { text: <FontAwesomeIcon icon={faTv}/>, url: '#' },
      ],
    },
    {
        title: 'Tail Wind',
        imageUrl: tailwinds,
        links: [
          { text: <FontAwesomeIcon icon={faGithub}/>, url: 'https://github.com/dcwilliams2/project-tailwind' },
          { text: <FontAwesomeIcon icon={faTv}/>, url: 'https://sjhowe1.github.io/project1-team5/' },
        ],
      },
      {
        title: 'CSS Style',
        imageUrl: css,
        links: [
          { text: <FontAwesomeIcon icon={faGithub}/>, url: 'https://github.com/dcwilliams2/mini-challenge-2' },
          { text: <FontAwesomeIcon icon={faTv}/>, url: '#' },
        ],
      },
      {
        title: 'Contact Me',
        imageUrl: contactMe,
        links: [
          { text: <FontAwesomeIcon icon={faGithub}/>, url: 'https://github.com/dcwilliams2/mini-challenge-1' },
          { text: <FontAwesomeIcon icon={faTv}/>, url: '#' },
        ],
      },
    
  ];

  return (
    <div className="m-5">
      <h1 className="underlined-text">Portfolio</h1>

      <div className="row d-flex justify-content-center">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} links={card.links} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;



