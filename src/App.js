import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/proyectoState';

import TareaState from './context/tareas/tareaState';


function App() {
  return (
    <ProyectoState>
      <TareaState>
          <Router>
          {/* Lo que coloque por fuera del switch es lo que se va a ver en todas las paginas */}
            <Switch>
          {/* Lo que coloque dentro del switch va a ser cada una de las diferentes páginas */}
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </TareaState>
    </ProyectoState>

  );
}

export default App;
