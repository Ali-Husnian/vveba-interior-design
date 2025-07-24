'use client';

const socialLinks = [
 {
  href: '#',
  iconClass: 'fab fa-facebook-f',
  label: 'Facebook',
 },
 {
  href: '#',
  iconClass: 'fab fa-instagram',
  label: 'Instagram',
 },
 {
  href: '#',
  iconClass: 'fab fa-twitter',
  label: 'Twitter',
 },
];

export default function Footer() {
 return (
  <footer className="footer">
   <div className="footer-content">
    <p className="copyright">
     &copy; {new Date().getFullYear()} CodeAndCreate — All Rights Reserved
    </p>

    <div className="social-list">
     {socialLinks.map((link, index) => (
      <a key={index} href={link.href} aria-label={link.label}>
       <i className={link.iconClass}></i>
      </a>
     ))}
    </div>
   </div>
   <a href="#" className="scroll-btn">
    <i className="fas fa-arrow-up"></i>
   </a>
  </footer>
 );
}
