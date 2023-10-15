import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css'; 

const Header = () => {
  return (
    <div className='Header'>
      <nav className='nav'>
        <Link to='/api' className="nav-link">Данные</Link>
        <Link to='/' className="nav-link">Главная</Link>
        <Link to='/chat' className="nav-link">Чат</Link>
      </nav>
    </div>
  );
}

export default Header;


