import React from "react";
import styled from "styled-components";
import TodoRow from "./TodoRow";

const TodoList = ({ todoList, handleClickRemove }) => (
    <Container>
        {todoList.map((todo, index) => ( /* map함수 - todoList 내에 모든 원소를 순차적으로 돌면서 TodoRow 컴포넌트를 반환 */
                                /* map메소드로 반복적으로 컴포넌트를 생성할 때에는 key prop을 설정해줘야 함(겹치지 않는 고유한 값 ex) 배열요소의 index값 */
            <TodoRow 
            todo={todo} 
            key={index} 
            index={index}
            handleClickRemove={handleClickRemove}/>
            /* key prop은 React에서 식별만 할뿐 우리가 사용하지 못하기 때문에 index 추가해줌 */
        ))}
    </Container>
);

const Container = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center; /* flexbox를 이용하여 TodoRow 컴포넌트를 세로로 정렬 */
`;

export default TodoList;