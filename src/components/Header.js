// import { BookOpen } from "lucide-react";

// export default function Header({ currentPage, onNavigate }) {
//   const navItems = [
//     { label: "Home", page: "home" },
//     { label: "Planner", page: "planner" },
//     { label: "About", page: "about" },
//     { label: "Contact", page: "contact" },
//   ];

//   return (
//     <header className="shadow-sm sticky-top bg-white">
//       <nav className="navbar navbar-expand-lg navbar-light bg-white">
//         <div className="container">
//           <div
//             className="navbar-brand d-flex align-items-center"
//             style={{ cursor: "pointer" }}
//             onClick={() => onNavigate("home")}
//           >
//             <BookOpen size={28} className="text-primary me-2" />
//             <span className="fw-bold fs-4 text-dark">StudyPlanner</span>
//           </div>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navMenu"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navMenu">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               {navItems.map((item) => (
//                 <li key={item.page} className="nav-item">
//                   <button
//                     className={`btn ms-2 ${
//                       currentPage === item.page
//                         ? "btn-primary text-white"
//                         : "btn-light"
//                     }`}
//                     onClick={() => onNavigate(item.page)}
//                   >
//                     {item.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     // prevent body scroll when menu open
//     document.body.style.overflow = open ? 'hidden' : 'auto';
//     return () => { document.body.style.overflow = 'auto'; };
//   }, [open]);

//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//         <div className="container">
//           <div className="d-flex align-items-center">
//             {/* logo — hidden when mobile menu opens */}
//             <img
//               src="/logo192.png"
//               alt="logo"
//               style={{ width: 36, height: 36, transition: 'opacity .25s, transform .3s' }}
//               className={open ? 'opacity-0' : 'me-2'}
//             />
//             <Link
//               className="navbar-brand fw-bold"
//               to="/"
//               style={{ transform: open ? 'translateX(-30px)' : 'translateX(0)', transition: 'transform .3s' }}
//             >
//               Smart Study Planner
//             </Link>
//           </div>

//           {/* Desktop links */}
//           <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/planner">Planner</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/features">Features</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Mobile button opens fullscreen menu */}
//           <div className="d-lg-none">
//             <button
//               className="btn btn-outline-secondary"
//               onClick={() => setOpen(true)}
//               aria-label="Open menu"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Fullscreen mobile menu overlay */}
//       {open && (
//         <div
//           className="mobile-menu-overlay"
//           style={{
//             position: 'fixed',
//             inset: 0,
//             background: '#fff',
//             zIndex: 2000,
//             padding: 20,
//             overflowY: 'auto'
//           }}
//         >
//           <div className="container-fluid">
//             {/* X close button top-right */}
//             <div className="d-flex justify-content-end mb-2">
//               <button
//                 className="btn btn-link text-decoration-none text-dark"
//                 onClick={() => setOpen(false)}
//                 aria-label="Close menu"
//                 style={{ fontSize: '1.5rem' }}
//               >
//                 X
//               </button>
//             </div>

//             {/* Sign in under the X (centered) */}
//             <div className="d-flex justify-content-center mb-4">
//               <button className="btn btn-primary">Sign in</button>
//             </div>

//             {/* Menu title on left, then list of links below it */}
//             <div className="row">
//               <div className="col-12 col-md-6">
//                 <h2 className="fw-bold display-6">Menu</h2>
//                 <ul className="list-unstyled mt-3 fs-5">
//                   <li className="mb-3"><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
//                   <li className="mb-3"><Link to="/planner" onClick={() => setOpen(false)}>Planner</Link></li>
//                   <li className="mb-3"><Link to="/features" onClick={() => setOpen(false)}>Features</Link></li>
//                   <li className="mb-3"><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
//                   <li className="mb-3"><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [open, setOpen] = useState(false);       // controls animations
//   const [visible, setVisible] = useState(false); // keeps overlay mounted

//   useEffect(() => {
//     if (open) {
//       setVisible(true);
//       document.body.style.overflow = 'hidden';
      
      

//     } else {
//       // play closing animation first
//       const timeout = setTimeout(() => setVisible(false), 400);
//       document.body.style.overflow = 'auto';
//       return () => clearTimeout(timeout);
//     }
//   }, [open]);

//   return ( 
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//         <div className="container d-flex align-items-center justify-content-between">

//           <div className="d-flex align-items-center">
//             <img
//               src="/logo192.png"
//               alt="logo"
//               className={`header-logo me-2 ${open ? 'logo-hidden' : ''}`}
//               style={{ width: 36, height: 36 }}
//             />

//             <Link
//               to="/"
//               className="navbar-brand fw-bold header-title"
//               onClick={() => setOpen(false)}
//               aria-label="Home"
//               style={{ transform: open ? 'translateX(-36px)' : 'translateX(0)' }}
//             >
//               Smart Study Planner
//             </Link>
//           </div>

//           {/* Desktop menu */}
//           <div className="d-none d-lg-block">
//             <ul className="navbar-nav d-flex flex-row gap-3 align-items-center">
//               <li><Link className="nav-link nav-plain" to="/">Home</Link></li>
//               <li><Link className="nav-link nav-plain" to="/planner">Planner</Link></li>
//               <li><Link className="nav-link nav-plain" to="/features">Features</Link></li>
//               <li><Link className="nav-link nav-plain" to="/about">About</Link></li>
//               <li><Link className="nav-link nav-plain" to="/contact">Contact</Link></li>
//             </ul>
//           </div>


//           {/* Mobile hamburger */}
//           <div className="d-lg-none">
//             <button
//               className="btn btn-outline-secondary"
//               onClick={() => setOpen(true)}
//               aria-label="Open menu"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Animated overlay */}
//       {visible && (
//         <div
//           className={`mobile-menu-overlay ${open ? "open" : "close"}`}
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="container-fluid overlay-inner">

//             {/* X top right */}
//             <div className="overlay-top">
//               <button
//                 className="btn overlay-close"
//                 onClick={() => setOpen(false)}
//               >
//                 X
//               </button>
//             </div>

//             {/* Sign In under X */}
//             <div className="overlay-signin-wrapper">
//               <button className="btn btn-primary overlay-signin-btn">Sign in</button>
//             </div>

//             {/* Menu */}
//             <div className="overlay-body">
//               <h2 className="overlay-menu-title">Menu</h2>

//               <ul className="list-unstyled overlay-menu-list">
//                 <li className="overlay-item"><Link className="mobile-link" to="/" onClick={() => setOpen(false)}>Home</Link></li>
//                 <li className="overlay-item"><Link className="mobile-link" to="/planner" onClick={() => setOpen(false)}>Planner</Link></li>
//                 <li className="overlay-item"><Link className="mobile-link" to="/about" onClick={() => setOpen(false)}>About</Link></li>
//                 <li className="overlay-item"><Link className="mobile-link" to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
//               </ul>
//             </div>

//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Handle open/close animation
  useEffect(() => {
    if (open) {
      setVisible(true);
      
      const timer = setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 20);

    return () => clearTimeout(timer);


    } else {
      const timeout = setTimeout(() => setVisible(false), 350);
      document.body.style.overflow = "auto";
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo + Title */}
          <div className="d-flex align-items-center">
            <BookOpen size={28} className="text-primary me-2" />
            <Link to="/" className="navbar-brand fw-bold text-dark">
              Smart Study Planner
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="d-none d-lg-block">
            <ul className="navbar-nav d-flex flex-row gap-3 align-items-center">
              <li><Link className="nav-link nav-plain" to="/">Home</Link></li>
              <li><Link className="nav-link nav-plain" to="/planner">Planner</Link></li>
              <li><Link className="nav-link nav-plain" to="/about">About</Link></li>
              <li><Link className="nav-link nav-plain" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Mobile 3 lines */}
          <div className="d-lg-none">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setOpen(true)}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile overlay */}
      {visible && (
        <div
          className={`mobile-menu-overlay ${open ? "open" : "close"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="container-fluid overlay-inner">

            {/* Close button */}
            <div className="overlay-top">
              <button
                className="overlay-close-btn"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Sign In */}
            <div className="overlay-signin-wrapper">
              <button className="btn btn-primary overlay-signin-btn">
                Sign in
              </button>
            </div>

            {/* Mobile menu links */}
            <div className="overlay-body">
              <h2 className="overlay-menu-title">Menu</h2>

              <ul className="list-unstyled overlay-menu-list">
                <li className="overlay-item">
                  <Link to="/" onClick={() => setOpen(false)} className="mobile-link">
                    Home
                  </Link>
                </li>

                <li className="overlay-item">
                  <Link to="/planner" onClick={() => setOpen(false)} className="mobile-link">
                    Planner
                  </Link>
                </li>

                <li className="overlay-item">
                  <Link to="/about" onClick={() => setOpen(false)} className="mobile-link">
                    About
                  </Link>
                </li>

                <li className="overlay-item">
                  <Link to="/contact" onClick={() => setOpen(false)} className="mobile-link">
                    Contact
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}
