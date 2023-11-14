import { useEffect, useState } from "react"
import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";


const useRepositories = () => {
    // const [repositories, setRepositories] = useState()
    // const [loading, setLoading] = useState(false);

    const {data, error, loading} = useQuery( GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    } )

    if (loading) return 'Loading...'
    if (error) return `Fetching error: ${error.message}`

    console.log('First time data is:', data)
    const repositories = data.repositories

    const fetchRepositories = async () => {
        console.log('Data is:', data)
        setRepositories(data.repositories)
    }

    // const fetchRepositories = async () => {
    //     // console.log('Fetching...')
    //     setLoading(true)
    //     const response = await fetch('http://192.168.0.103:5000/api/repositories')
    //     const json = await response.json();
    //     setLoading(false);
    //     setRepositories(json);
    // }

    // useEffect(() => {
    //     fetchRepositories();
    // }, []);

    // return {repositories, loading, refetch: fetchRepositories}

    return {repositories, loading, refetch: fetchRepositories}

}

export default useRepositories;
