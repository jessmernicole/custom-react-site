import React from 'react';
import { Layout } from 'antd';
import about from './assets/images/about.png'
import portfolio from './assets/images/portfolio.svg'
import exemplar from './assets/images/exemplar.svg'
import './App.scss';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
        <Layout>
          <Content>
            <div>
              <p>Jessmer Nicole</p>
            </div>
            <div className="text-links">
              <span>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ABOUT
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BLOG
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PORTFOLIO
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EXEMPLAR
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CONTACT
                </a>
              </span>
            </div>
            <div className="image-links">
              <img src={about} alt="about-me-link"/>
              <img src={portfolio} alt="portfolio-link" style={{ width: 80 }} />
              <img src={exemplar} alt="exemplar-link" style={{ width: 80 }} />
            </div>
          </Content>
        </Layout>
    </div>
  );
}

export default App;
