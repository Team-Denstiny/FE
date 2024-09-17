import React from 'react';
import './MyWritesPage.css';

interface Post {
  id: number;
  author: string;
  date: string;
  title: string;
  content: string;
  images: string[];
}

const posts: Post[] = [
  {
    id: 1,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: ['pizza.png', 'pizza.png', 'pizza.png', 'pizza.png']
  },
  {
    id: 2,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: ['pizza.png', 'pizza.png']
  },
  {
    id: 3,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: []
  },
  {
    id: 4,
    author: '홍길동',
    date: '2024.07.06',
    title: '제목제목제목',
    content: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용...',
    images: ['pizza.png', 'pizza.png', 'pizza.png']
  }
];

const MyWritesPage: React.FC = () => {
  return (
    <div className="my-writes-page">
      <header>
        <button className="back-button">←</button>
        <h1>내가 작성한 글</h1>
      </header>
      <main>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <div className="author-info">
                <div className="avatar"></div>
                <div>
                  <div className="author-name">{post.author}</div>
                  <div className="post-date">{post.date}</div>
                </div>
              </div>
              <button className="more-options">⋯</button>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            {post.images.length > 0 && (
              <div className="post-images">
                {post.images.map((image, index) => (
                  <div key={index} className="image-container">
                    <img src={image} alt={`Post image ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default MyWritesPage;