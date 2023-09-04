import React, { useEffect, useState } from 'react'

const useLocalStorage = (action:string, key: string, data: any,  ) => {

    const actionTypes = {
        'set': () => {
            const res = localStorage.setItem(key, JSON.stringify(data))

            console.log(res)
        }
    }

    const [localData, setLocalData] = useState<any>('')

    useEffect(() => {

        const res = localStorage.setItem('items', JSON.stringify(data));

        console.log(res)

    }, [data])


  return (
    <div>useLocalStorage</div>
  )
}

export default useLocalStorage