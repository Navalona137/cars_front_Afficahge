import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
   /*
   const handleSubmit = async (event) => {
    event.preventDefault(); 
    const username = event.target.username.value;
    const password = event.target.password.value;
    
    
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        history.push('/home');
        console.log('Connexion réussie');
      } 
      else {
        history.push('/error');
        console.error('Identifiants incorrects');
      }
    } catch (error) {console.error('Erreur lors de la requête :', error);}
  };
*/
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [mdp, setMdp] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { email, mdp });
            console.log('Connecté avec succès:', response.data);
            // Redirection ou traitement supplémentaire après le login réussi
            history.push('/backhome');
        } catch (error) {
            console.error('Erreur de login :', error);
        }
    };

    

  return (
    <>
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <form className="pt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" value={mdp} onChange={(e) => setMdp(e.target.value)}/>
                </div>
                <div className="mt-3">
                  <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN IN</a>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" className="auth-link text-black">Forgot password?</a>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account? <a href="register.html" className="text-primary">Create</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default Login;
