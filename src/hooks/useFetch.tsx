import React, {useState} from 'react';
import axios from 'axios';

type IError = {
  state: boolean;
  message: string | string[] | undefined;
};

export const useGetFetch = (url: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError>({
    state: false,
    message: '',
  });

  async function fetchData() {
    if (loading) return;
    if (error.state) {
      return setError({
        ...error,
        state: false,
        message: '',
      });
    }

    try {
      setLoading(false);
      const {data} = await axios.get(url);
      setData(data);
    } catch (err) {
      setError({
        ...error,
        state: true,
        message: 'error fetching data',
      });
    }
  }

  return {
    data,
    fetchData,
    loading,
    error,
  };
};
