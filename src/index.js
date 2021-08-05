// React Imports
import React, { lazy, Suspense, Fragment } from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

// URL SWITCH
//console.log(location.href)
switch (location.href) {
  case 'https://plataformaesports.com': {
    location.href = 'https://www.plataformaesports.com/#/';
  }
  default:
    '';
}""

// Main Components
const Home = lazy(() => import('./modules/home'));
const Panel = lazy(() => import('./modules/admpanel'));
// Team Mail Register
//import CiudadEsports from './components/customers/ciudadesports/ciudadesports';
// LEGAL IMPORTS
const TermsAndPolitics = lazy(() =>
  import('./modules/termsAndPolitics')
);

const Mision_HH = () => (
  <HashRouter>
    {/* envolvemos nuestra aplicación en el Router --- NOTA: aqui puede usarse el history createBrowserHistory */}
    <Suspense
      fallback={
        <div
          id='loading-div'
          className='loading-div'
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            display: "block",
            height: "768PX",
            width: "100%",
            margin: 0,
            background:"#323346"
          }}>
          <img
            id='loading-img-updating-box'
            className='loading-img'
            style={{
              position: "relative",
              display: "block",
              width: "50%",
              marginLeft: "25%",
              marginTop: "50%",
              background:"#323346"
            }}
            src='https://res.cloudinary.com/versus/image/upload/v1585185745/Statics_images/xxpauscz8misoyrhkjis.gif'>
          </img> 
        </div>
      }>
      <Switch>
        {/* Main Componets */}
        <Route path='/terms-and-politics' component={TermsAndPolitics} exact />
        {/* Customers Components */}
        <Route path='/' component={Home} exact />
        <Route path='/admpanel' component={Panel} exact />
      </Switch>
    </Suspense>
  </HashRouter>
);
//export default userState

render(<Mision_HH />, document.getElementById('responsive-home'));
