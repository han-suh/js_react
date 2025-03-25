import {useState} from "react";

export default function L03State(){
    return (
        <>
            <h2>컴포넌트의 상태 state</h2>
            <hr/>
            <ul>
                <li>hook : user*로 작성된 함수를 hook 이라 부른다.
                    hook 은 리액트에서 제공하는 함수로 함수형 컴포넌트에서만 사용된다.
                </li>
                <li>useState : 컴포넌트에 state 필드를 생성하고
                    state 의 상태를 변경하는 set 함수를 반환합니다.</li>
                <li>setState : set 함수로 state를 변경하면
                    컴포넌트가 리렌더링 됩니다.</li>
            </ul>
            <hr/>
            <PropsCounter></PropsCounter>
            <hr/>
            <StateCounter></StateCounter>
        </>
    )
}
function StateCounter(){
    let [cnt,setCnt]=useState(0);
    // useState : 컴포넌트에 state 필드를 정의할 수 있는 함수
    // useState 경우 2개 값 반환 - 초기값, 변경값
    // cnt : 컴포넌트에 생성된 state
    // setCnt : cnt state 를 변경하는 함수 - setCnt 로 값을 변경!!
    // state 가 변경되면 컴포넌트가 리렌더링 됩니다.

    // 마운트 : 최초의 출력. 최초의 로드
    // update : 리렌더링. state로 인해서 값이 변경된 것을 다시 출력
    // 어마운트 : 필요가 없어져서 리렌더링 과정에서 삭제된 것

    return (
        <>
            <h3>state 카운터</h3>
            <p>
                {cnt}
                <button onClick={(e)=>{
                    setCnt(cnt+1);
                    // setCnt(cnt++);
                //  컴포넌트는 값 자체를 변경하는걸 선호하지 않음
                }}>cnt++</button>
            </p>
        </>
    )
}

function PropsCounter(){
    let cnt = 0;
    return (
        <>
            <h3>props 카운터</h3>
            <p>
                {cnt}
                <button onClick={(e)=>{
                    cnt++;
                    console.log(cnt);
                }}>cnt++</button>
            </p>
        </>
    )
}