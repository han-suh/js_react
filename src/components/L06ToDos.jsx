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
            isTodo : false
        }
    ];
}
export default function L06ToDos(){
    const [toDos,setToDos]=useState(callToDos);

    //let title=""; //변수는 생성된 컴포넌트 내에서 불변데이터=>input 요소에 작성 x / title 을 그냥 변수로 사용하게 되면 컴포넌트가 리렌터링 될 때까지는 불변데이터
    //state.toDos : 컴포넌트 내에서는 불변이지만 update 될때 set에 의해 바뀐 데이터를 받는다.
    const [title,setTitle]=useState("");
    const [id,setId]=useState();
    const [time,setTime]=useState("");
    function titleHandler(e){
        setTitle(e.target.value); //이벤트로 input을 바꾼 값
    }
    function timeHandler(e){
        setTime(e.target.value);
    }
    function idHandler(e){
        setId(e.target.value);
    }
    function removeToDo(id){
        // filter 새로운 데이터를 만드는 것!!
        const newTodos=toDos.filter((toDo)=>{
            return toDo.id!==id; // id가 같지 않은 것만 남긴다!
            // return true; // 무조건 새로운걸 가진건 반환. false만 삭제
        });
        setToDos(newTodos); // 그 남을걸 반환
    }


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


    // 등록 버튼 => 비동기식 통신을 하려면 submit의 이벤트를 막아야 한다.
    const toDoPostSubmitHandler=(e)=>{
        e.preventDefault();
        // 임의로 넣는 방법
        // setToDos([...toDos,{title:"퇴근}]) => 현재는 ToDos 를 복제해서 넣고 있는 방법

        // 정리
        // const newToDos=[
        //     ...toDos,
        //     { "title": title, "id":id, "time":time}
        // ];


        // const newToDos=toDos.push({"title": title, "id":id, "time":time}) : 오류 발생 => 리렌더링될 때까지는 불변데이터이기 때문에 그 데이터를 직접 바꾸려고 하는 것은 불가능
        //  => state는 리렌더링 후 변환 값을 반환 그런데 toDos의 데이터는 불변데이터의 값. (변수는 완전 불변데이터)
        // state.toDos는 컴퍼넌트가 리렌더링될 때 바뀐 데이터를 받는데, 컴포넌트가 리렌더링 전까지는 불변데이터.
        // state는 update되면서 데이트가 바뀌지 컴포넌트 내에서는 불변이다.
        // push=> list 를 바꾸는 함수기 때문에 동작하지 않는다.
        // toDos.push({ "title": title, "id":id, "time":time})
        // setToDos(toDos)
        // 결국 state는 데이터를 복제해서 넣어야 한다!! => slice 복제

        const newToDos=toDos.slice();
        // const newToDos=toDos.slice().push();
        // push하면 리턴값을 반환하게 된다. => newToDos는 push의 결과를 반환하기 때문에 리턴값이 없으면 void를 반환
        newToDos.push({ "title": title, "id":id, "time":time});

        // 시간 순으로 정렬 변경
        //Array.sort : 기존 배열을 변경하기 때문에 꼭 배열을 복사해야한다.!(배열을 복사해서 배열을 변경!!)
        newToDos.sort((toDo1,toDo2)=>{
            return toDo1.time.localeCompare(toDo2.time);
        })

        setToDos(newToDos)
    }


    return (
        <>
            <h2>할일 목록 만들기 수업</h2>

            {/* submit이 발생했을 때 toDoPostSubmitHandler 실행! */}
            <form onSubmit={toDoPostSubmitHandler}>
            {/*  <form onSubmit={toDoPostSubmitHandler(event)}> : 작성 X => 실행한 결과를 submit의 콜백함수로 넘기겠다는 의미 => 리턴이 void 라서 onSubmit 이 undefind 가 된다. */}
            {/*  실행을 넘기고 싶으면 : <form onSubmit={(e)=>toDoPostSubmitHandler(e)}>  */}
                <h3>할일 목록 등록</h3>
                <p><label>id<input type="number" onChange={idHandler} value={id}/></label></p>
                <p><label>title<input type="text" onChange={titleHandler} value={title}/></label></p>
                <p><label>time<input type="time" onChange={timeHandler} value={time}/></label></p>
                <p>
                    <button type="submit">등록</button>
                </p>
            </form>

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
                            {toDo.title}&nbsp;
                            {toDo.time}&nbsp;
                            <input type="checkbox"
                                   checked={toDo.isTodo}
                                   onChange={(e)=>{
                                       toDoCheckHandler(e.target.checked,toDo.id)
                            }}/>&nbsp;
                            <button
                                onClick={()=>removeToDo(toDo.id)}
                            >삭제</button>
                            {/* 매개변수로 id가 필요함. 그 중에서도 출력하고 있는 것의 id라서 toDo.id  */}
                            {/* {} 쓰면 정확. 생략 가능 */}

                            {/* 실행한 결과를 넘기는 방법 / 어떤 걸 check 했는지 알아야 해서 toDo.id 도 매개변수로 */}
                        {/* onChange={toDoCheckHandler} : change가 발생하면 toDoCheckHandler을 실행하라 */}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}