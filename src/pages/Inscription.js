import React from 'react';
import { useHistory } from 'react-router-dom';

function Inscription() {

  return (
    <div class="container">
      <h2>Login</h2>
      <form class="registration-form">
        <input type="text" id="nom" name="nom" placeholder="Nom" />
        <input type="text" id="prenom" name="prenom" placeholder="Prenom" />
        <input type="date" id="naissance" name="naissance" placeholder="Date de naissance" />
        <div class="radio-group">
            <span>Genre :</span>
            <label><input type="radio" name="genre" value={1} /> Homme </label>
            <label><input type="radio" name="genre" value={2} /> Femme </label>
        </div>
        <input type="text" id="username" name="username" placeholder="Username" /> 
        <input type="password" id="password" name="password" placeholder="Password" />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Inscription;
