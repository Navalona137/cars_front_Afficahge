import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import HomeBack from './pages/HomeBack';
import FormMarque from './pages/FormMarque';
import FormCarburant from './pages/FormCarburant';
import FormCaracteristique from './pages/FormCaracteristique';
import FormModele from './pages/FormModele';
import ListAnnonce from './pages/ListAnnonce';
import DetailAnnonce from './pages/DetailAnnonce';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/backhome" component={HomeBack} />
        <Route exact path="/formMarque" component={FormMarque} />
        <Route exact path="/formCarburant" component={FormCarburant} />
        <Route exact path="/formCaracteristique" component={FormCaracteristique} />
        <Route exact path="/formModele" component={FormModele} />
        <Route exact path="/listAnnonce" component={ListAnnonce} />
        <Route exact path="/detailAnnonce" component={DetailAnnonce} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

