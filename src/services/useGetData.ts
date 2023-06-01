import { useQuery } from "react-query";
import axios from "config/axios";
import { Data } from "types/Data";

const getData = async () => {
  const { data } = await axios.get<Data[]>("/families?skip=0&take=10");
  return data;
};

export const useGetData = () => {
  return useQuery("data", getData);
};
