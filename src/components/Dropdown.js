import * as React from 'react';

import '../App.css';

const Dropdown = ({items}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>{items[0]}</button>
          </li>
          <li className="menu-item">
            <button>{items[1]}</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export {Dropdown};