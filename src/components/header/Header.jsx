import React, {useState} from 'react';
import Navigation from '../Navigation.jsx';
import logoImage from '../../images/logo.png'
function Header  (){
  const [entered, setEntered] = useState('none')
  return (
    <header className="header">
        <picture className="logo">
            <img className="logo__image"src={logoImage} alt="logo" />
        </picture>
        <Navigation />
        <h1>{entered}</h1>
        <input  type="text" className="input" placeholder="Enter"value={entered} onChange={(e) =>setEntered(e.target.value)}/>
    </header>
  )
}

export default Header
