import React from 'react';
import { User } from 'auth0';
import { useUser, UserProfile } from '@auth0/nextjs-auth0';

interface IdentifiedUser {
  id: string;
  email: string;
}
 
const getUserId = (user: UserProfile): string | null => {
  return user?.sub || null;
}

const getUserEmail = (user: UserProfile): string | null => {
  return user?.email || null;
}




const UserInfoContainer = () => {
  const {user, error, isLoading }= useUser();
  

  const logUser = () => {
    if (user) {
      const id = getUserId(user);
    }
  }
  
  if (user) {
    return (
      <>
        <p>{user.name}</p>
        <button onClick={logUser}>Push</button>
      </>
    )
  }

  return null;

}

export default UserInfoContainer;
