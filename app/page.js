'use client';

import {useEffect} from 'react';
import Header from './components/header';
import Sidbar from './components/sidbar';
import AboutUs from './components/about-us';
import Team from './components/team';
import ContactUs from './components/contact-us';
import Footer from './components/footer';
import ClickToTop from './components/click-to-top';
import Spinner from './components/spinner';

export default function Home() {
 useEffect(() => {
  // 1. appers display
  const timeout = setTimeout(() => {
   document.body.classList.add('display');
  }, 4000);
     
  // 2. Sidebar toggle
  const hamburger = document.querySelector('.hamburger-menu');
  const container = document.querySelector('.container');
  const toggleSidebar = () => {
   container?.classList.toggle('change');
  };
  hamburger?.addEventListener('click', toggleSidebar);

  // 3. Scroll to top smooth behavior
  const scrollBtn = document.querySelector('.scroll-btn');
  const handleScrollClick = () => {
   document.documentElement.style.scrollBehavior = 'smooth';
   window.scrollTo({top: 0});
   setTimeout(() => {
    document.documentElement.style.scrollBehavior = 'unset';
   }, 1000);
  };
  scrollBtn?.addEventListener('click', handleScrollClick);

  // Cleanup
  return () => {
   clearTimeout(timeout);
   hamburger?.removeEventListener('click', toggleSidebar);
   scrollBtn?.removeEventListener('click', handleScrollClick);
  };
 }, []);

 return (
  <>
   <Spinner />
   <div className="container">
    <Header />
    <Sidbar />
    <AboutUs />
    <Team />
    <ContactUs />
    <Footer />
    <ClickToTop />
   </div>
  </>
 );
}
