import { useEffect, useState } from "react"

export const useFetch2 = (url = []) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)




    const getData = async () => {
        try {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
            setLoading(true)
            setError(null)
        }
        catch (error) {
            setData([])
            setLoading(false)
            setError('--- ERROR ---')
        }
    }

    return { data, loading, error }
}