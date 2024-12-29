import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/Posts.tsx';

const BlogList: React.FC = () => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <hr />
            <div>
                {posts.map((post) => (
                    <div key={post.id} style={{ marginBottom: '20px' }}>
                        <Link to={`/posts/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
