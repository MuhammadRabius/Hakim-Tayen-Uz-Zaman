import React from 'react';

const Blog = () => {
      return (
            <div className='grid grid-cols-2 gap-16 border-2'>
                  <div className='p-6 text-center'>
                  <h2>Difference between authorization and authentication?</h2>
                  <p>Authentication and authorization are two distinct steps required for access control. Namely, determining whether someone has permission to get access to something. To illustrate the difference between the two concepts, let’s take the example of trying to get into a club. <br />

                   Authentication refers to verifying identity: verifying that the person is who they claim to be. <br />
                   uthorization refers to determining whether a particular identity is allowed to access the thing they are requesting access to</p>
                  </div>
                  <div className='p-6 text-center'>
                     <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                     <p>Firebase is a JSON document store (database) which allows for storing documents (stuff like JSON). It’s really easy to set up an account and have a globally visible database. It’s fantastic for prototyping mobile apps since it’s so quick to get up and running. It’s not a high performance database, nor the cheapest service, but it is one of the easiest I’ve seen. It’s free for very low volume usage. <br /></p>
                  </div>
                  <div className='p-6 text-center'>
                        <h2> What other services does firebase provide other than authentication</h2>
                        <p> we can play around with it and build :

                              Analytics <br />
                              Real Time Database <br />
                              Storage <br />
                              Hosting <br />
                              Cloud Messaging <br />
                              Notifications <br />
                              
                        
                        </p>
                  </div>
            </div>
      );
};

export default Blog;