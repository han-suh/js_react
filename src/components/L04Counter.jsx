import {useState} from "react";

export default function L04Counter({cnt}) {
    // useState(매개변수) : 매개변수 초기값 => 마운트
    const [count, setCount] = useState(0);
    return(
        <>
            <h2>카운터를 만들어서 state에 대해 알아보자</h2>
            <hr/>
            <p>
                {cnt} :
                <button onClick={(e)=>{
                    cnt++;
                    console.log(cnt)
                }}>
                    prop.cnt++
                </button>
            </p>
        </>
    )
}