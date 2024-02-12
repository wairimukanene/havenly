// // BackToTop.tsx

// import React, { useState, useEffect } from 'react';

// const BackToTop: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button when page is scrolled down
//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Set the top cordinate to 0
//   // make scrolling smooth
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <div className="scroll-to-top">
//       {isVisible && 
//         <div onClick={scrollToTop}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 m-2 fixed bottom-5 right-5 cursor-pointer text-white bg-black rounded-full p-2">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//           </svg>
//         </div>}
//     </div>
//   );
// }

// export default BackToTop;
