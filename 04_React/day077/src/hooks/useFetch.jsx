import { useEffect, useState } from "react"

export const useFetch = (url = []) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true); // 로딩 상태 설정
    setError(null); // 에러 초기화

    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false) // 로딩 완료
        setError(null) // 에러 없음
      })
      .catch(error => {
        setData([]) // 데이터 초기화
        setLoading(false) // 로딩 완료
        setError('--- ERROR ---') // 에러 설정
      });
  }, [url])

  return { data, loading, error }
}
