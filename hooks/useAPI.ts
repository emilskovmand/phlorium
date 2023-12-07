import axios from "axios"
import { useEffect, useState } from "react"

const useApi = (route: string, method: string, requestData = null) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response
                if (method.toUpperCase() === "GET") {
                    response = await axios.get(route)
                } else if (method.toUpperCase() === "POST") {
                    response = await axios.post(route, requestData)
                } else {
                    throw new Error("Invalid HTTP method")
                }

                setData(response.data)
                setError(null)
            } catch (error) {
                setData(null)
            }
        }

        fetchData()
    }, [route, method, requestData])

    return { data, error }
}

export default useApi
