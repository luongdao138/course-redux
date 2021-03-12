import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <h1> Oops: Page Not Found </h1>
      <br />
      <br />
      <Link to='/'>
        <button className='btn btn-primary'>Back to home</button>
      </Link>
    </div>
  );
}

export default PageNotFound;
