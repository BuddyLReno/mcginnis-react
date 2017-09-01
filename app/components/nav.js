const React = require('react');
const NavLink = require('react-router-dom').NavLink;

let Nav = () => {
  return (
    <ul className="Nav">
      <li>
        <NavLink exact activeClassName='is-active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='is-active' to='/battle'>Battle</NavLink>
      </li>
      <li>
        <NavLink activeClassName='is-active' to='/popular'>Popular</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
