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
    images: ['pizza.png', 'pizza.png'],
    likes: 10,
    comments: 5,
    views: 100
  },
  {
    id: 2,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: ['pizza.png', 'pizza.png'],
    likes: 15,
    comments: 8,
    views: 120
  },
  {
    id: 3,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: [],
    likes: 5,
    comments: 2,
    views: 80
  },
  {
    id: 4,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: ['pizza.png'],
    likes: 20,
    comments: 10,
    views: 150
  }
];

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="community-page">
      <header>
        <div className="search-bar">
          <input
            type="text"
            placeholder="커뮤니티"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">🔍</button>
        </div>
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
              <div>
                <div className="author">{post.author}</div>
                <div className="date">{post.date}</div>
              </div>
            </div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.images.length > 0 && (
              <div className="post-images">
                {post.images.map((image, index) => (
                  <img key={index} src={image} alt={`Post image ${index + 1}`} />
                ))}
              </div>
            )}
            <div className="post-footer">
              <span>❤️ {post.likes}</span>
              <span>💬 {post.comments}</span>
              <span>👁️ {post.views}</span>
            </div>
          </div>
        ))}
      </main>
      <footer>
        <button>🏠</button>
        <button>❤️</button>
        <button>➕</button>
        <button>💬</button>
        <button>👤</button>
      </footer>
    </div>
  );
};

export default CommunityPage;