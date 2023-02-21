import React from 'react';

const UserDetails = ({ userData }) => {
  return (
    <div>
      <img src={userData.avatar_url} alt={userData.name} width="150" />
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <ul>
        <li>Followers: {userData.followers}</li>
        <li>Following: {userData.following}</li>
        <li>Public Repos: {userData.public_repos}</li>
        <li>Location: {userData.location}</li>
        <li>Email: {userData.email}</li>
      </ul>
    </div>
  );
};

export default UserDetails;
