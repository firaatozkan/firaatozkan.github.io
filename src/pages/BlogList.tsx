import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts.ts';

const BlogList: React.FC = () => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
