import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client/react/index.js';
import { gql } from '@apollo/client/core/index.js';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
    }
  }
`;

interface Book {
  author: string;
}

interface GetBooksData {
  books: Book[];
}

export const Authors: React.FC = () => {
  const { data } = useQuery<GetBooksData>(GET_BOOKS);
  console.log("dispaly fetched data:", data);
  

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← Back Home</Link>
      <h1>Authors List</h1>
      <ul>
        {data?.books.map((book: Book, index: number) => (
          <li key={index} style={{ fontSize: '16px', margin: '8px 0' }}>
            {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};


