import React, { useState } from 'react';
import useGitHubUser from './useGitHubUser';
import UserDetails from './UserDetails';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const { userData, loading, error } = useGitHubUser(username);

  const handleSearch = (event) => {
    event.preventDefault();
    setUsername(event.target.elements.username.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <h1>GET GITHUB USER</h1>
        <label>
          <h3>GitHub username:</h3>
          <input type="text" name="username" />
        </label>
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {userData && <UserDetails userData={userData} />}
    </div>
  );
};

export default UserSearch;
