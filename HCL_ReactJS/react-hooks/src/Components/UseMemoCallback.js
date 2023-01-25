import React from 'react';
import { useMemo, useCallback } from 'react'

export default function UseMemoCallback() {
 
const values = [3, 9, 6, 4, 2, 1]

// This will always return the same value, a sorted array. Once the values array changes then this will recompute.
const memoizedValue = useMemo(() => values.sort(), [values]);

// This will give me back a function that can be called later on. It will always return the same result unless the values array is modified.
const memoizedFunction = useCallback(() => values.sort(), [values])
  return (
    <div>
        <div><h1>UseMemo Output</h1>
            {memoizedValue.map((v)=>{
                return(
                    <h3 key={v}>{v}</h3>
                );
            })}
        </div>
        <div><h1>UseCallback Output</h1>
        {/* {memoizedFunction.map((v)=>{
                return(
                    <p>{v}</p>
                );
            })} */}
        </div>
    </div>
  )
}
