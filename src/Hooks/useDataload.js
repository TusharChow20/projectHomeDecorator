import axios from "axios";
import { useEffect, useState } from "react";

export const useDataload = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios("../furnitureData.json")
      .then((d) => setData(d.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
};
