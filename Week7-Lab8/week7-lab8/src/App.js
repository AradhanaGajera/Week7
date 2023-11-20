// App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import Article from './Article';
import Sidebar from './Sidebar';
import './App.css';


const appTitle = 'JSX and Props Showcase';
const section1Content = 'This is the content of section 1.';
const article1Title = 'Article 1';
const article1Text = 'Content of Article 1.';
const sidebarContent = 'Sidebar content goes here.';
const section2Content = 'This is the content of section 2.';
const footerText = 'Copyright © 2023 JSX Props App';



function App() {
  return (
    <div>
 <div>
      <Header title={appTitle} />
      <Section heading="Section 1" content={section1Content} />
      <Article title={article1Title} text={article1Text} />
      <Sidebar content={sidebarContent} />
      <Section heading="Section 2" content={section2Content} />
      <Footer text={footerText} />
    </div>
    </div>
  );
}

export default App;