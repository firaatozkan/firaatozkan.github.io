import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts.ts';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return <p>Post not found.</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
};

export default BlogPost;
