import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='home jumbotron'>
      <h1>This is home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi
        ratione quia aliquid pariatur velit molestias esse nesciunt perferendis
        a!
      </p>
      <Link to='/about' className='btn btn-primary btn-lg'>
        Learn more
      </Link>
    </div>
  );
}

export default HomePage;
