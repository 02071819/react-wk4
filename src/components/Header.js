import { Link } from "react-router-dom";
import NavBar from './Navbar';

export default function Header({title}) {
    return (
       <div className="header">
          <Link to="/">
             <h1 className="header-title">
                {title}
             </h1>
          </Link>
 
          <p
             className="header-slogan">
             An example made by Create-React-App.
          </p>
          <hr className="hr-header-line" />
          <NavBar />
       </div>
    );
 }

// export default function Header() {
//     return (
//         <header className="text-center d-flex row flex-column">
//             <h2 className="text-white pt-5 pb-2">
//                 NORDIC NEST Shopping Cart
//             </h2>

//             <p
//                 className="text-light opacity-3">
//                 An example made by Create-React-App.
//             </p>
//             <div className="flex mt-6 justify-center">
//                 <hr className="hr-header-line rounded" />
//             </div>
//         </header>
//     );
// }