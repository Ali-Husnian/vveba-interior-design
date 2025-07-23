'use client'

export default function Header() {
  return (
   <>
    <div className="hamburger-menu">
     <div className="line line-1"></div>
     <div className="line line-2"></div>
     <div className="line line-3"></div>
     <span>Close</span>
    </div>
    <header className="header">
     <div className="img-wrapper">
      <img src="/images/bg.jpg" />
     </div>
     <div className="banner">
      <h1>Architecture & Interior Design</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>Discover now</button>
     </div>
    </header>
   </>
  );
}
