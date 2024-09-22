import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostComponent from './PostComponent';
import { Post } from './types';
import './CommunityPage.css';

const posts: Post[] = [
  // ... (샘플 데이터)
];

const AllPostsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="community-page">
      <header>
        <input type="text" placeholder="커뮤니티" />
        <button className="search-button">🔍</button>
      </header>
      <nav>
        <button className="active" onClick={() => navigate('/')}>전체</button>
        <button onClick={() => navigate('/medical')}>진료</button>
        <button onClick={() => navigate('/local')}>지역</button>
        <button onClick={() => navigate('/free')}>자유</button>
      </nav>
      <main>
        {posts.map(post => <PostComponent key={post.id} post={post} />)}
      </main>
      <footer>
        <button className="active">🏠</button>
        <button>❤️</button>
        <button>➕</button>
        <button>💬</button>
        <button>👤</button>
      </footer>
    </div>
  );
};

export default AllPostsPage;