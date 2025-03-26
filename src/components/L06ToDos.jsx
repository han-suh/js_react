import {useState} from "react";

// 받아온 데이터 => 바뀐 값이 리렌더링 되어야하기 때문에 state가 참조하고 있어야 한다!
// 여기서도 check를 state로 줘야 변경 가능!!
// 그리고 object 중 어느 것이 체크되었는지 알아야 한다. => 1) index를 줘서 확인 가능
                                            //   => 2) 데이터베이스에서 가져왔다면 고유ID를 줘서 확인 가능
function callToDos(){
    return [
        {
            id: 10,
            title : "양치",
            time :"07:00",
            isTodo : false
        }, {
            id: 11,
            title : "출근",
            time :"08:00",
            isTodo : false
        }, {
            id: 12,
            title : "점심",
            time :"13:00",
            isTodo : true
        }
    ];
}
export default function L06ToDos(){
    const [toDos,setToDos]=useState(callToDos);

    // 초기값을 계속 렌더링하게 되서 이렇게 작성하면 안됨.
    // const callToDosResult=callToDos();
    // == const [toDos,setToDos]=useState(callToDos());

    // object 로 출력!
    // return (
    //     <>
    //         <h2>할일 목록 만들기 수업</h2>
    //         {/* 보통은 받아온 데이터를 출력 */}
    //         {/* <ul> */}
    //         {/*    <li>양치 07:00*/}
    //         {/*        <input type="checkbox"/>*/}
    //         {/*    </li>*/}
    //         {/*    <li>출근 08:00</li>*/}
    //         {/*    <li>점심 13:00</li>*/}
    //         {/*</ul>*/}
    //         {toDos.toString()}
    //     </>
    // )

    // 체크박스에 대한 콜백함수 정의
    // 매개 변수 2개! - check 와 어느 걸 check 했는지
    // Map : 기존 데이터를 다른 데이터로 바꿔서 새로운 배열로 만드는 것(return 하는 값으로 바꾸는 것)
    function toDoCheckHandler(checked,toDoId){
        console.log(checked,toDoId);
        const newToDos=toDos.map((toDo)=>{
            if(toDo.id===toDoId) toDo.isTodo=checked;
            return toDo;
        });
        setToDos(newToDos);
    //  바꾼 데이터로 state를 변경!
    }

    return (
        <>
            <h2>할일 목록 만들기 수업</h2>

            {/* object를 list로 반환 => map */}
            <ul>
                {/*  {toDos.map((toDo)=>{
                      return (
                             // li 에 key 값(고유값)을 줘야 함.
                             // React 의 경우 li의 key 값을 가지고 렌더링할 대상을 찾음.
                                <li style={
                                    toDo.isTodo ?
                                    {textDecoration:'line-through'} :
                                    {}
                                // && 사용 불가. 스타일로 null 값을 줄 수 없기 때문.
                                // object??? 값을 줘야해서.
                                }>
                                    {toDo.title}
                                    &nbsp;{toDo.time}
                                    &nbsp;<input type="checkbox"
                                    // 여기서도 check를 state로 줘야 변경 가능!!
                                    // 그리고 object 중 어느 것이 체크되었는지 알아야 한다.
                                                 checked={toDo.isTodo} />
                                </li>
                                )
                     })}  */}
                {toDos.map((toDo)=>{
                    return (
                        <li key={toDo.id} style={
                            toDo.isTodo ?
                                {textDecoration:'line-through'} :
                                {}
                        }>
                            {toDo.title}
                            &nbsp;{toDo.time}
                            &nbsp;<input type="checkbox"
                                         checked={toDo.isTodo}
                                         onChange={(e)=>{
                                             toDoCheckHandler(e.target.checked,toDo.id)
                                         }}/>
                        {/* 실행한 결과를 넘기는 방법 / 어떤 걸 check 했는지 알아야 해서 toDo.id 도 매개변수로 */}
                        {/* onChange={toDoCheckHandler} : change가 발생하면 toDoCheckHandler을 실행하라 */}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}