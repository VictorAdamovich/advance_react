import { useState } from "react"
import classes from './counter.module.scss'

export const Counter =()=>{
    const [count,setCount]=useState(0)

    const increment = ()=>setCount(prev=>prev+1)
    return(
        <div className={classes.wrap}>
           <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    )
}