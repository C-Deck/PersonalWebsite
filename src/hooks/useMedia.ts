import { useState, useEffect } from "react"

const useMedia = (queries: string[], values: boolean[], defaultValue: boolean) => {
  const [value, setValue] = useState(true)

  useEffect(() => {
    const mediaQueryLists: MediaQueryList[] = queries.map((q) => window.matchMedia(q))

    const getValue = () => {
      const index = mediaQueryLists.findIndex((mql) => mql.matches)
      return typeof values[index] !== `undefined` ? values[index] : defaultValue
    }

    setValue(getValue)
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach((mql) => mql.addListener(handler))
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler))
  }, [defaultValue, queries, values])

  return value
}

export default useMedia
