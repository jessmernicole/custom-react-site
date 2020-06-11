import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, Link } from 'react-router-dom';
import moment from 'moment';

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import Exemplar from './Pages/Exemplar';
import Contact from './Pages/Contact';

import './App.scss';

const { Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
          <Content>
            <Link to="/">
              <div className="header-title">
                <span>Jessmer Nicole</span>
              </div>
            </Link>
            <div className="text-links">
              <span>
                <Link to="/about">
                  ABOUT
                </Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="/blog">
                  BLOG
                </Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="/portfolio">
                  PORTFOLIO
                </Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="/exemplar">
                  EXEMPLAR
                </Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="/contact">
                  CONTACT
                </Link>
              </span>
            </div>
            <Route component={Home} exact path="/" />
            <Route component={About} path="/about" />
            <Route component={Blog} path="/blog" />
            <Route component={Portfolio} path="/portfolio" />
            <Route component={Exemplar} path="/exemplar" />
            <Route component={Contact} path="/contact" />
          </Content>
          <Footer>
            <span>&copy; {moment().format('YYYY')} Jessmer Nicole</span>
          </Footer>
        </Layout>
    </div>
  );
}

export default App;
