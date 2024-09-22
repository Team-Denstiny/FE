import React, { useState } from 'react';
import './CommunityPage.css';

interface Post {
  id: number;
  author: string;
  date: string;
  title: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  views: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: ['pizza.png', 'pizza.png', 'pizza.png'],
    likes: 10,
    comments: 10,
    views: 10
  },
  {
    id: 2,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: ['pizza.png', 'pizza.png'],
    likes: 10,
    comments: 10,
    views: 10
  },
  {
    id: 3,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: [],
    likes: 10,
    comments: 10,
    views: 10
  },
  {
    id: 4,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: ['pizza.png'],
    likes: 10,
    comments: 10,
    views: 10
  }
];

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('전체');

  return (
    <div className="community-page">
      <header>
        <input type="text" placeholder="커뮤니티" />
        <button className="search-button">🔍</button>
      </header>
      <nav>
        {['전체', '진료', '지역', '자유'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <main>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <div className="avatar"></div>
              <div className="post-info">
                <span className="author">{post.author}</span>
                <span className="date">{post.date}</span>
              </div>
              <button className="more-options">⋯</button>
            </div>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
            {post.images.length > 0 && (
              <div className={`post-images image-count-${post.images.length}`}>
                {post.images.map((image, index) => (
                  <img key={index} src={image} alt={`Post image ${index + 1}`} />
                ))}
              </div>
            )}
            <div className="post-footer">
              <button>❤️ {post.likes}</button>
              <button>💬 {post.comments}</button>
              <button>👁️ {post.views}</button>
            </div>
          </div>
        ))}
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

export default CommunityPage;