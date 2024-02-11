import React from 'react';
import InputField from './InputField';
import Button from './Button';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import { TbMinusVertical } from "react-icons/tb";
const Login= () => {
    return<div className='login' >
      <div className='titles'>
        <h1>INSTITUT NATIONAL  AGRONOMIQUE DE TUNISIE</h1>
        <h2>Publiez votre offre de stage et trouvez des candidats de tous horizons.</h2>
      </div>
      <form className='form'>
        <h1>Connectez vous</h1>
        <p id='pp'>saisissez votre e-mail et mot de passe</p>
          <FaUser id='user'/>
          <TbMinusVertical id="line1"/>
          <InputField type="email" placeholder=" Entrer ton adresse email" id="email"/>
          <TbMinusVertical id="line2"/>
          <RiLock2Fill id='lock'/>
          <InputField type="password" placeholder=" Mot de passe"  id="pwd"/>
          <Button text="Se connecter" id="butt"/> 
      </form>
    </div>
    };

export default Login;