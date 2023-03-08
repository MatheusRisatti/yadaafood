import { useCallback, useState } from "react"

export function App() {

  const [count, setCount] = useState(0) 

  return(
    
    <>
    <button onClick={() => setCount(count + 1)}>Contar + 1</button>
    <h1>{count}</h1>
    </>

    )
  
}

