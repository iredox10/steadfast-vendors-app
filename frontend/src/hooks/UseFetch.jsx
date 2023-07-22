import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fetchData = async() =>{
            try {
                const res = await axios.get(url)
                setLoading(true)
                if(res.status !== 200){
                    throw new Error('something went wrong')
                }
                setData(res.data)
                // console.log(data);
                setLoading(false)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchData()
    },[])
    return {data, error, loading}
}

export default UseFetch