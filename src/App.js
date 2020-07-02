import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import Exemplar from './Pages/Exemplar';
import Contact from './Pages/Contact';
import Sider from './shared/Sider';
import HeaderMain from './shared/HeaderMain';

import './App.scss';

const { Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout> 
        <div>
          <Sider />
        </div>

        <div>
          <HeaderMain />
        </div>

        
          <Switch>
            <Route exact path="/">
              <div className="content-container">
                <Home />
              </div>
            </Route>
            
            <Route component={About} path="/about" />
            <Route component={Blog} path="/blog" />
            <Route component={Portfolio} path="/portfolio" />
            <Route component={Exemplar} path="/exemplar" />
            <Route component={Contact} path="/contact" />
          </Switch>
          
          
        </Layout>
    </div>
  );
}

export default App;
