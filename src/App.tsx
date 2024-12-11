import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './pages/BlogList.tsx';
import BlogPost from './pages/BlogPost.tsx';
import GlobalStyle from './styles/GlobalStyle.ts';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router basename='/personal_blog'>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  </>
);

export default App;
