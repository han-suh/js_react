import {useState,useEffect,useRef} from "react";

export default function L08UseEffectClock () {
    // 1초마다 화면을 리렌더링 - useState
    const [now, setNow] = useState(new Date());


    // 외부에서 setInterval 참조 => 외부에서 참조하면 항상 초기화되서 소용없음
    // let intervalNum=null; // null 로 초기화!!


    // useRef : 렌더링을 유발하지 않고 전역 변수처럼 저장되는 값을 쓰거나 document 객체를 참조할 때 사용
    // useRef : 렌더링되어도 유지되는 데이터로, 데이터가 바껴도 update 되지 않는다.
    // (node 개체를 참조할 때 많이 사용, 전역변수 처럼 사용)
    const intervalRef = useRef(null);
    // useRef 는 current 에다 값을 참조 또는 바꾸는 것. useRef.current 를 바꾸거나 참조


    // 1초마다 실행되는 디지털 시계 함수 / 1초마다 실행 : setInterval
    const clock=()=>{
        intervalRef.current=setInterval(()=>{ // useRef.current 를 바꾸거나 참조
            setNow(new Date()); // 렌더링을 1초마다 => setNow 호출
            console.log(intervalRef.current+"인터벌 실행 중..")
        },1000);
    }
    //clock(); // 함수 실행 => 렌더링 수가 기하급수적으로 증가
    //setNow()호출되면 해당 컴포넌트가 update 되면서
    //다시 clock() 호출 => interval 함수를 한 번 더 생성(2개 생성된 interval)
    //2개의 interval 함수가 1초 뒤에 setNow()호출
    //4개 ...
    //.......기하급수적으로 증가


    // 마운트 되었을 때만 실행
    useEffect(()=>{
        clock(); // 마운트 되었을 때 1번만 실행

        // 언마운트
        // 언마운트되었을 때 interval을 삭제하지 않으면 계속 실행  // interval==소켓통신
        // interval 은 React가 아닌 js에서 관리
        return ()=>{ //clean up(useEffect가 return으로 콜백함수 사용)
            //clearInterval : interval을 삭제하는 함수
            clearInterval(intervalRef.current);
        }
    },[]);


    return(
        <>
            <h2>useffect 와 타이밍 함수(비동기코드)</h2>
            <hr/>
            <h3>1초마다 실행되는 디지털 시계</h3>
            <p>{now.toLocaleString()}</p>
        {/*  toLocaleString() : 문자열로 날짜와 시간 출력  */}
        </>
    )
}