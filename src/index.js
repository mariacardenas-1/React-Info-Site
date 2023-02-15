import React from 'react';
import ReactDOM from 'react-dom/client';
// import Header from "./Header"
// import Footer from "./Footer"
// import MainContent from "./MainContent"

//---------------PROJECT PART 1-----------------------------------------------------------------
// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))


// ---------------------CUSTOM COMPONENTS PART 2---------------------------------------------------
// function ReasonToLearnReact() {
//     return (
//         <div>
//             <h1>Reasons To Learn React</h1>
//             <ol>
//                 <li>Working with components, allows you to create scalable and maintainble applications</li>
//                 <li>Being written in JavaScript curve is fast</li>
//                 <li>Gives us the perfect balance between profit and performance</li>
//                 <li>The community is very active</li>
//             </ol>
//         </div>
//     )
// }

// ReactDOM.render(<ReasonToLearnReact />, document.getElementById("root"))

// function Page() {
//   return (
//       <div>
//           <header>
//               <nav>
//               <img src="./react-logo.png" width="50px"/>
//               </nav>
//           </header>
//           <h1>Reasons to learn React</h1>
//           <ol>
//               <li>It's a popular library, so I'll be 
//               able to fit in with the cool kids!</li>
//               <li>I'm more likely to get a job as a developer
//               if I know React</li>
//           </ol>
//           <footer>© 2023 cardenas development. All rights reserved.</footer>
//       </div>
//   )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

// --------------------------PARENT/CHILD COMPONENTS----------------------------------------------

// function Header() {
//   return (
//       <header>
//           <nav>
//               <img src="./react-logo.png" width="40px" />
//           </nav>
//       </header>
//   )
// }

// function Page() {
//   return (
//       <div>
//          <Header />
//           <h1>Reasons I'm excited to learn React</h1>
//           <ol>
//               <li>It's a popular library, so I'll be 
//               able to fit in with the cool kids!</li>
//               <li>I'm more likely to get a job as a developer
//               if I know React</li>
//           </ol>
//           <footer>
//               <small>© 2021 Ziroll development. All rights reserved.</small>
//           </footer>
//       </div>
//   )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

// --------------------------PARENT/CHILD COMPONENTS (PART 2)----------------------------------------------

// function Header() {
//   return (
//       <header>
//           <nav>
//               <img src="./react-logo.png" width="40px" />
//           </nav>
//       </header>
//   )
// }

// function Footer(){
//   return (
//       <footer>
//           <small>© 2021 Ziroll development. All rights reserved.</small>
//       </footer>
//   )
// }
// function MainContent(){
//   return (
//       <div>
//           <h1>Reasons I'm excited to learn React</h1>
//           <ol>
//               <li>It's a popular library, so I'll be 
//               able to fit in with the cool kids!</li>
//               <li>I'm more likely to get a job as a developer
//               if I know React</li>
//           </ol>
//       </div>
//   )
// }

// function Page() {
//   return (
//       <div>
//           <Header />
//           <MainContent />
//           <Footer />
//       </div>
//   )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

// --------------------------STYLING WITH CLASSES (PART 1/3)----------------------------------------------

// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//                 <ul>
//                     <li>Princing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>© 2021 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }

// function MainContent() {
//     return (
//         <div>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be 
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//         </div>
//     )
// }

// function Page() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

// --------------------------STYLING WITH CLASSES (PART 2/3)----------------------------------------------

// // // // // function Header() {
// // // // //   return (
// // // // //       <header>
// // // // //           <nav className="nav">
// // // // //               <img src="./react-logo.png" width="40px" />
// // // // //               <ul className="nav-items">
// // // // //                   <li>Pricing</li>
// // // // //                   <li>About</li>
// // // // //                   <li>Contact</li>
// // // // //               </ul>
// // // // //           </nav>
// // // // //       </header>
// // // // //   )
// // // // // }

// // // // function Footer() {
// // // //   return (
// // // //       <footer>
// // // //           <small>© 2021 Ziroll development. All rights reserved.</small>
// // // //       </footer>
// // // //   )
// // // // }

// // // function MainContent() {
// // //   return (
// // //       <div>
// // //           <h1>Reasons I'm excited to learn React</h1>
// // //           <ol>
// // //               <li>It's a popular library, so I'll be 
// // //               able to fit in with the cool kids!</li>
// // //               <li>I'm more likely to get a job as a developer
// // //               if I know React</li>
// // //           </ol>
// // //       </div>
// // //   )
// // // }

// // function Page() {
// //   return (
// //       <div>
// //           <Header />
// //           <MainContent />
// //           <Footer />
// //       </div>
// //   )
// // }

// ReactDOM.render(<Page />, document.getElementById("root"))

// --------------------------STYLING WITH CLASSES (PART 3/3)----------------------------------------------

// function Header() {
//   return (
//       <header>
//           <nav className="nav">
//               <img src="./react-logo.png" className="nav-image"/>
//               <ul className="nav-items">
//                   <li>Pricing</li>
//                   <li>About</li>
//                   <li>Contact</li>
//               </ul>
//           </nav>
//       </header>
//   )
// }

// function Footer() {
//   return (
//       <footer>
//           <small>© 2021 Ziroll development. All rights reserved.</small>
//       </footer>
//   )
// }

// // // function MainContent() {
// // //   return (
// // //       <div>
// // //           <h1>Reasons I'm excited to learn React</h1>
// // //           <ol>
// // //               <li>It's a popular library, so I'll be 
// // //               able to fit in with the cool kids!</li>
// // //               <li>I'm more likely to get a job as a developer
// // //               if I know React</li>
// // //           </ol>
// // //       </div>
// // //   )
// // // }

// // function Page() {
// //   return (
// //       <div>
// //           <Header />
// //           <MainContent />
// //           <Footer />
// //       </div>
// //   )
// // }

// ReactDOM.render(<Page />, document.getElementById("root"))

// --------------------------ORGANIZE COMPONENTS----------------------------------------------


// function Page() {
//   return (
//       <div>
//           <Header />
//           <MainContent />
//           <Footer />
//       </div>
//   )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

import App from './App';

ReactDOM.render(<App />, document.getElementById("root"))