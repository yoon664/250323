import React, { useEffect, useState } from 'react'

const Step07 = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('컴포넌트가 렌더링');

        return ()=>{
            console.log('컴포넌트 언마운트')
        }
    }, []); // 의존성 배열이 비어있으면 컴포넌트가 처음 렌더링될 때만 실행 
    return (
        <>
            <p>카운트 : {count}</p>
            <button onClick={()=>{setCount(count + 1)}}>CLICK</button>
        </>
    )
}

export default Step07