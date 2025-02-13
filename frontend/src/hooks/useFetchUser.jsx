import { useState, useEffect } from "react";
import axios from "axios";
import {default_path, user_info} from './default.jsx'

const useFetchUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${default_path}/${user_info}$`,
          { withCredentials: true }
        );
        setUser(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

  }, []);

  return { user, loading, error };
};

export default useFetchUser;
