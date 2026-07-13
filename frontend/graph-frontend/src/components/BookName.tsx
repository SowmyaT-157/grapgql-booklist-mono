import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client/react/index.js';
import { gql } from '@apollo/client/core/index.js';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
    }
  }
`;

interface Book {
  title: string;
 
}

interface GetBooksData {
  books: Book[];
}

export const Titles: React.FC = () => {
  const { data } = useQuery<GetBooksData>(GET_BOOKS);
  console.log("display fetched data:", data);
  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← Home</Link>
      <h1>Titles List</h1>
      <ul>
        {data?.books.map((book: Book, index: number) => (
          
          <li key={index} style={{ fontSize: '16px', margin: '8px 0' }}>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
