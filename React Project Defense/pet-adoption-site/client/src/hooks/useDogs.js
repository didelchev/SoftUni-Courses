import { useState, useEffect } from "react";

import dogsAPI from "../api/dogs-api";

export function useGetAllDogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const dogsData = await dogsAPI.getAll();
      setDogs(dogsData);
    };
    getDogs();
  }, []);

  return [dogs, setDogs];
}

export function useGetOneDogs(id) {
    const [dog, setDog] = useState({});

    useEffect (() => {
        const getDog = async () => {
          const result =  await dogsAPI.getOne(id)
          setDog(result)
        }
        getDog()
      },[id])
      
    return [dog,setDog]
}
