import { useState, useEffect } from 'react';
import axios from 'axios';

const useGitHubUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [username]);

  return { userData, loading, error };
};

export default useGitHubUser;
