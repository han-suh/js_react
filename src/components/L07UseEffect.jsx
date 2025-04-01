import {useState,useEffect} from "react";

export default function L07UseEffect(){
    // count 리렌더링 => 렌더링 될 때마다 실행됨.
    const [count,setCount] = useState(0);


    //컴포넌트의 생명주기(생성,수정,삭제)


    // 마운트될 때만 1번만 출력이 되게 하고 싶을 때 => useEffect
    //useEffect(()=>{},[]); : 콜백함수를 컴포넌트가 마운트 되었을때 1번 만 실행
    // [] : 의존성 배열

    //useEffect(()=>{},[props,state]); : props(부모)나 state(자신)가 바뀔때 마다 실행

    //useEffect(()=>{}); :  X 작성이 잘못된 방법 / 동작은 되지만 아무런 의미도 없음


    // 컴포넌트가 삭제(Unmount)되었을때 동작 / cleanup 함수
    //useEffect(()=>{
    //   //소켓통신구현
    //   return ()=>{//통신.close() }//cleanup
    // },[]); :컴포넌트가 삭제(Unmount)되었을때 동작


    // init가 useEffect로 마운트될 때만 출력되게
    // useEffect(()=>{
    //     init();
    // },[]);


    // init가 마운트될 때와 언마운트 될 때
    useEffect(()=>{
        init();
        // useEffect로 언마운트될 때 삭체될 수 있도록
        return ()=>{
            console.log("삭제됩니다.!(cleanup 실행)")
        }
    },[]);


    useEffect(() => {
        console.log("마운트+카운트가 바꼈습니다."+count)
    }, [count]); //[] <=읜존성배열, count <= 의존성 변수


    // 마운트 될 때 실행되는 함수
    function init(){
        console.log("마운트 될 때 만 실행하는 함수")
    }
    // init() // 마운트 될 때만 실행되지 않고 컴포넌트가 업데이트 될 때 마다도 실행된다.
    // console에서 2번 실행되는 이유는 StrictMode(Main.jsx) 로 인해서 2번 렌더링이 될 수도 있기 때문!!


    // count
    const countHandler = () => {
        setCount(count + 1);
    }


    return(
        <>
            <h2>useEffect 훅으로 컴포넌트가 나타나거나(Mount)
                업데이트(Update) 될 때 또는 삭제(Unmount)될 때
                특정 작업을 해보자(생명주기에 따른 작업)
            </h2>
            <hr/>
            <p>
                {count}&nbsp;&nbsp;
                <button onClick={countHandler}>++</button>
            </p>
        </>
    )
}