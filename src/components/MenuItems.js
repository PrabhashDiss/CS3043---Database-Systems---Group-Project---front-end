import { useState } from "react";
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
const MenuItems = ({ items }) => {
 const [dropdown, setDropdown] = useState(false);
 return (
  <li className="menu-items">
   {items.submenu && items.url ? (
    <>
     <button
      type="button" aria-haspopup="menu"
      aria-expanded={dropdown? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}
     >
      {items.title}{' '}
     </button>
     <Dropdown
      submenus={items.submenu}
      dropdown={dropdown} 
     />
    </>
   ) : !items.url && items.submenu ? (
    <>
      <button>
        {items.title}{' '}
        {/* ... */}
      </button>
    </>
  ) : (
    <Link to={items.url}>{items.title}</Link>
   )}
  </li>
 );
};
export default MenuItems;
