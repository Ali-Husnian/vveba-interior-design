'use client';
import {useEffect, useRef} from 'react';
import VanillaTilt from 'vanilla-tilt';

const teamMembers = [
 {
  name: 'John Smith',
  role: 'CEO',
  image: 'images/person-1.jpg',
  desc:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!',
 },
 {
  name: 'Ann Brown',
  role: 'Designer',
  image: 'images/person-2.jpg',
  desc:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!',
 },
 {
  name: 'Mary Doe',
  role: 'Architect',
  image: 'images/person-3.jpg',
  desc:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!',
 },
];

export default function Team() {
 const cardContainerRef = useRef(null);

 useEffect(() => {
  const cards = cardContainerRef.current.querySelectorAll('.card');
  VanillaTilt.init(cards, {
   max: 15,
   speed: 400,
   glare: true,
   'max-glare': 0.3,
  });

  return () => {
   cards.forEach((card) => card.vanillaTilt?.destroy());
  };
 }, []);

 return (
  <section className="team">
   <div className="section-header">
    <h1 className="section-heading">Our Team</h1>
    <div className="underline"></div>
   </div>

   <div className="cards-wrapper" ref={cardContainerRef}>
    {teamMembers.map((member, index) => (
     <div className="card" key={index} data-tilt>
      <div className="card-img-wrapper">
       <img src={member.image} alt={member.role} />
      </div>
      <div className="card-info">
       <h2>{member.name}</h2>
       <h3>{member.role}</h3>
       <p>"{member.desc}"</p>
       <button>Read More</button>
      </div>
     </div>
    ))}
   </div>
  </section>
 );
}
