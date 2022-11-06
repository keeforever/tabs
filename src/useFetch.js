import {useState,useEffect,useCallback} from 'react';

const useFetch = (url) => {
  const [apiData, setapiData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(true)
  // get fetch data
  const fetchData=useCallback(()=>{
    fetch(url)
    .then((res)=>{
      if(res.ok){
        return res.json()
      }
    })
    .then((data)=>{
      setapiData(data)
      setIsLoading(false)
      setIsError(false)

    }).catch((err)=>{
      setIsLoading(false)
      console.log(err)
    })
   
  },[url])
  
  useEffect(()=>{
    fetchData()
  },[url,fetchData])
  return [apiData,isLoading,isError]
}

export default useFetch;


