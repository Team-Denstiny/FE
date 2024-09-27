import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostComponent from './PostComponent';
import { Post } from './types';
import './CommunityPages.css';
import './FreePage.css';

const freePosts: Post[] = [
  {
    id: 1,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: ['pizza.png'],
    likes: 10,
    comments: 10,
    views: 10
  },
  // ... 더 많은 자유 게시물
];

const FreePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="community-page">
      <header>
        <input type="text" placeholder="커뮤니티" />
        <button className="search-button">🔍</button>
      </header>
      <nav>
        <button onClick={() => navigate('/')}>전체</button>
        <button onClick={() => navigate('/medical')}>진료</button>
        <button onClick={() => navigate('/local')}>지역</button>
        <button className="active">자유</button>
      </nav>
      <main>
        <div className="filter-buttons">
          <button>전체</button>
          <button>최신순</button>
        </div>
        {freePosts.map(post => <PostComponent key={post.id} post={post} />)}
      </main>
      <footer>
        <button>🏠</button>
        <button>❤️</button>
        <button>➕</button>
        <button className="active">💬</button>
        <button>👤</button>
      </footer>
    </div>
  );
};

export default FreePage;