import React from 'react';
import './MyLikesPage.css';
import Navbar from '../../../components/common/Navbar';

interface LikedPost {
  id: number;
  author: string;
  date: string;
  title: string;
  content: string;
  image: string;
}

const likedPosts: LikedPost[] = [
  {
    id: 1,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    image: 'pizza.png'
  },
  {
    id: 2,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    image: 'pizza.png'
  },
  {
    id: 3,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    image: 'pizza.png'
  }
];

const MyLikesPage: React.FC = () => {
  return (
    <div className="my-likes-page">
      <header>
        <button className="back-button">←</button>
        <h1>좋아요</h1>
      </header>
      <main>
        {likedPosts.map((post) => (
          <div key={post.id} className="liked-post">
            <div className="post-header">
              <div className="author-info">
                <div className="avatar"></div>
                <div>
                  <div className="author-name">{post.author}</div>
                  <div className="post-date">{post.date}</div>
                </div>
              </div>
              <button className="remove-button">×</button>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <div className="post-image">
              <img src={post.image} alt="Post" />
            </div>
          </div>
        ))}
      </main>
      <Navbar text="heart" />
    </div>
  );
};

export default MyLikesPage;