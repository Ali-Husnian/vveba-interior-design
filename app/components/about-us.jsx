'use client';

const services = [
 {
  icon: 'fas fa-pen-nib',
  title: 'Interior',
  text:
   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
 },
 {
  icon: 'fas fa-paint-roller',
  title: 'Exterior',
  text:
   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
 },
 {
  icon: 'fas fa-pencil-alt',
  title: 'Design',
  text:
   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
 },
 {
  icon: 'fas fa-paint-brush',
  title: 'Decoration',
  text:
   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
 },
 {
  icon: 'fas fa-ruler-combined',
  title: 'Planning',
  text:
   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
 },
 {
  icon: 'far fa-building',
  title: 'Execution',
  text:
   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
 },
];

export default function AboutUs() {
 return (
  <section className="about-us">
   <div className="section-header">
    <h1 className="section-heading">About Us</h1>
    <div className="underline"></div>
   </div>

   <div className="services">
    {services.map((service, index) => (
     <div className="service" key={index}>
      <div className="service-header">
       <i className={service.icon}></i>
       <h3>{service.title}</h3>
      </div>
      <p className="service-text">{service.text}</p>
     </div>
    ))}

    <div className="about-us-img-wrapper">
     <img src="/images/house.png" alt="About us illustration" />
    </div>
   </div>
  </section>
 );
}
