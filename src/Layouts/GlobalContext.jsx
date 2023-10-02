import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("../../data/db.json");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
