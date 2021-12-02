import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
/* 데이터 흐름 : todoList배열은 
                1. Todo 컴포넌트의 state에서 출발
                2. TodoList 컴포넌트
                3. TodoList 컴포넌트에서 Array.map() 함수를 통해 배열의 각 요소가
                4. TodoRow 컴포넌트로 전달
                >> TodoRow 컴포넌트의 할 일 출력은 Todo 컴포넌트가 보내주는 todoList state에 따라 결정 */
class Todo extends React.Component {
    state = {
        todoList: []
    };
    render() {
        return (
            <Container>
                <Input placeholder="오늘 할 일" onKeyPress={this.handleInputKeyPress}></Input>
            <TodoList todoList={this.state.todoList} handleClickRemove={this.handleClickRemove}></TodoList>
            </Container>
        );
    }
    
    componentDidMount(){
        this.setState({
            todoList: JSON.parse(localStorage.getItem("todoList")) || []
            /* todoList를 localStorage에서 불러오고 todoList가 없다면 빈 배열[] 불러옴 */
        });
    }

    handleInputKeyPress = event => {
        const {
            target: { value }
        } = event;
        if (event.key === "Enter") {
            this.setState(state => ({ todoList: [...state.todoList, value] }), /* spread operator라고 함 */ 
            /* state.toList에 있는 모든 요소를 복제 후 맨 뒤의 value값만 추가한 배열 반환 */
            /* 매개변수로 state객체를 보내주지 않고 객체로 반환 > state값의 변경에 기존 state값이 사용된다면 이런 형태로 코딩하는 것이 안전 */
            /* this.state는 비동기 방식이라 내부에서 state의 prop을 참조할 때, 바뀌기 전 값인지 바뀐 후 값인지 보장이 되지 않음 */
            () => localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            ); /* localStorage엔 문자열만 저장 가능(5MB) 저장할때는 JSON.stringify, 불러올 때는 JSON.parse 사용 */
            event.target.value = "";
        }
    };

    handleClickRemove = index => {
        if(window.confirm("목록에서 지우시겠습니까?")){
            this.setState(
                state => ({
                    todoList: [
                        ...state.todoList.slice(0, index),
                        ...state.todoList.slice(index + 1)
                    ]
                }),
                () =>
                localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
                );
            }
    }; /* slice - 해당 배열의 부분배열 추출하는데에 사용
          slice(시작index, 마지막index) 두번 째 인자를 생략하면 배열의 맨 끝 요소까지 추출 (첫번째는 0, 두번째는 +1) */
}

const Container = styled.div`
    margin-top: 44px;
    text-align: center;
`;

const Input = styled.input`
    width: 80%auto;
    height: 33px;
    padding: 7px;
    outline: none;
    border: 1px solid silver;
    border-radius: 11px;
    background: transparent;
    font-size: 22px;
    color: white;
`;

export default Todo;