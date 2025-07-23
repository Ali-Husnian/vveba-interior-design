'use client';

const menuItems = [
 {label: 'Home', href: '#'},
 {label: 'About Us', href: '#'},
 {label: 'Team', href: '#'},
 {label: 'Pricing', href: '#'},
 {label: 'Contact', href: '#'},
];

const socialLinks = [
 {href: '#', iconClass: 'fab fa-facebook-f', label: 'Facebook'},
 {href: '#', iconClass: 'fab fa-instagram', label: 'Instagram'},
 {href: '#', iconClass: 'fab fa-twitter', label: 'Twitter'},
];

export default function Sidebar() {
 return (
  <section className="sidebar">
   <ul className="menu">
    {menuItems.map((item, index) => (
     <li key={index} className="menu-item">
      <a href={item.href} className="menu-link" data-content={item.label}>
       {item.label}
      </a>
     </li>
    ))}
   </ul>

   <div className="social-media">
    {socialLinks.map((link, index) => (
     <a key={index} href={link.href} aria-label={link.label}>
      <i className={link.iconClass}></i>
     </a>
    ))}
   </div>
  </section>
 );
}
