import {useState} from "react";

export default function L04Counter({cnt}) {
    // useState(매개변수) : 매개변수 초기값 => 컴포넌트가 마운트될 때만 지정됨
    // 컴포넌트의 마운트  : 컴포넌트가 최초로 렌더링되는 시점
    // update : 컴포넌트가 재렌더링될때 => 함수 자체가 재렌더링 되어서 state 빼고 초기값으로 바뀐다.
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
            <hr/>
            <p>
                {count} :
                <button onClick={(e)=>{
                    //setCount(count++);
                    setCount(count + 1);
                    // count를 상수로 정해놔서 ++ 불가.
                    console.log(count) //누른 즉시 카운트는 증가하지 않는다.
                }}>state.count++</button>
            </p>
            <hr/>
            <Counter/>
        </>
    )
}

// 위에서 버튼이 모두 useState에 포함되어 있어서 전부 리렌더링 되는데 필요한 부분만 리렌더링 할 수 있다.
//
function Counter(){
    // 초기값을 직접 준 경우
    // const [count,setCount] = useState(-10);


    // 초기값을 함수로 주는 경우 - 잘못된 경우
    // const callCountResult=useState(callCount());
    // const [count,setCount]=useState(callCountResult());
    // function callCount() {
    //     // 계산...
    //     console.log("callCount() 호출");
    //     return -10;
    // }
    // 하지만 매 번 callCount 함수가 호출되는 문제가 발생
    // 아래 코드와 같은 코드
    // == const [count,setCount]=useState(callCount());
    // 이 코드의 문제점 : 초기값이 매 번 호출 => Counter가 업데이트 될 때마다 카운트를(callCountResult) 실행하는 과정이 포함되어 있어서
    // useState 의 초기값으로 함수의 실행을 참조하면
    // 컴포넌트가 업데이트될때 마다 함수가 실행된다.
    // (초기값은 마운트될때 한번만 실행되는 것이 맞다.)


    // 초기값을 함수로 주는 경우 - 올바른 경우
    //const [count, setCount]=useState(callCount);
    // callCount 함수를 실행하는 것이 아니라 그대로 주는 것.
    // useState 의 초기값으로 함수자체를 참조 (함수 실행x) 초기에만 함수 실행
    // function callCount(){
    //     /////계산한 결과를 state의 초기값으로 주고 싶을 때
    //     console.log("callCount() 호출")
    //     return -10;
    // }


    // 초기값을 함수로 주는데 실행을 명시적으로 보여주는 경우 - 올바른 경우
    const [count, setCount]=useState(
        ()=>callCount());
    //위 방식과 동일한데 함수를 화살표함수로 하고 반환값으로 함수를 실행

    function callCount(){
        /////계산한 결과를 state의 초기값으로 주고 싶을 때
        console.log("callCount() 호출")
        return -10;
    }

    return (
        <p>
            {count} :
            <button onClick={(e)=>{
                // setCount(count++);
                // state 를 직접 바꾸는 것은 좋은 방법이 아니다.

                // setCount(count + 1);
                // setCount(count + 1);
                // 여러번 state를 바꾸기 위해 set을 호출해도
                // 모든 set 함수는 바뀌기 전의 state를 각자 참조하고 잇기 때문에
                // 한번만 바뀐다.

                // 이전 state == prevCount => 2씩 증가
                // setCount 로 콜백함수를 리턴하면 바뀐 값을 받는다..
                setCount((prevCount)=>prevCount+1);
                setCount((prevCount)=>prevCount+1);

                console.log(count) //누른 즉시 카운트는 증가하지 않는다.
            }}>state.count+2</button>
        </p>
    )
}