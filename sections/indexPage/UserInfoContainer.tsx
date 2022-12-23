import React, { useState } from 'react';
import { useUser, UserProfile } from '@auth0/nextjs-auth0';
import Button from '../sharedComponents/Button';
interface IdentifiedUser {
  id: string;
  email: string;
}

// const getUserId = (user: UserProfile): string | null => {
//   return user?.sub || null;
// };

// const getUserEmail = (user: UserProfile): string | null => {
//   return user?.email || null;
// };

const UserInfoContainer = (): JSX.Element | undefined => {
  const { user, error, isLoading } = useUser();
  const [showUser, setShowUser] = useState(false);

  const toggleUser = (): void => {
    setShowUser(!showUser);
  };

  const LoggedInUser = (): JSX.Element => {
    if (isLoading) {
      return null;
    }

    if (error !== null) {
      console.log(error);
    }

    return (
      <ul>
        <li>{user?.email}</li>
        <li>{user?.sub}</li>
      </ul>
    );
  };

  if (user != null) {
    return (
      <>
        <div style={{ width: '400px', background: '#222222', color: 'white' }}>
          <Button color="white" onClick={toggleUser}>
            Get Logged in user info
          </Button>
          <div>{showUser && <LoggedInUser />}</div>
        </div>
      </>
    );
  }
};

export default UserInfoContainer;
