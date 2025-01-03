import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './pages/BlogList.tsx';
import GlobalStyle from './styles/GlobalStyle.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { posts } from './data/Posts.tsx';

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Fırat Özkan</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Posts
                                </Link>
                                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                    {
                                        posts.map((post) => (
                                            <li>
                                                <Link className="dropdown-item bg-dark text-white" to={`/posts/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="banner">
                <Routes>
                    <Route path="/" element={<BlogList />} />
                    {
                        posts.map((post) => (
                            <Route path={`/posts/${post.id}`} element={<post.component />} />
                        ))
                    }
                </Routes>
                <br />
            </div>
        </Router>
    </>
);

export default App;
