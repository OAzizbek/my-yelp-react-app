// Import necessary modules
import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import Yelp from './Yelp';
import '@aws-amplify/ui-react/styles.css';

// Configure Amplify with AWS settings
Amplify.configure(awsExports);

// Define App component
export default function App() {
  // Use the Authenticator component to handle user authentication
  return (
    <Authenticator>
      {({ signOut, user }) => ( // Destructure the Authenticator object to use its properties
        <div>
          {/* Render header with the app name and sign out button */}
          <header>
            <h1>My Yelp</h1>
            <button onClick={signOut} className="content">
              Sign out
            </button>
          </header>
          {/* Render the Yelp component */}
          <Yelp />
        </div>
      )}
    </Authenticator>
  );
}
