import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
      return (
            <div style={{height:'500px'}} className='w-100 flex justify-center items-center'>
                  <Spinner animation="grow" variant="secondary" />
            </div>
      );
};

export default Loading;