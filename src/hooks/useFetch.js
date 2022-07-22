import { useEffect, useState } from 'react';

function useFetch(url= "") {
  const [data, setData] = useState([])

  useEffect(()=> {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data);
      });
  }, [url])

  return [data]
}

export default useFetch