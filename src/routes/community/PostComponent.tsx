import React from 'react';
import { Post } from './types';
import './PostComponent.css';

interface PostComponentProps {
  post: Post;
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar"></div>
        <div className="post-info">
          <span className="author">{post.author}</span>
          <span className="date">{post.date}</span>
        </div>
        <button className="more-options">⋯</button>
      </div>
      <h3 className="post-title">{post.title}</h3>
      {post.tag && <span className="post-tag">{post.tag}</span>}
      <p className="post-content">{post.content}</p>
      {post.images.length > 0 && (
        <div className={`post-images image-count-${post.images.length}`}>
          {post.images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img src={image} alt={`Post image ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
      <div className="post-footer">
        <button>❤️ {post.likes}</button>
        <button>💬 {post.comments}</button>
        <button>👁️ {post.views}</button>
      </div>
    </div>
  );
};

export default PostComponent;