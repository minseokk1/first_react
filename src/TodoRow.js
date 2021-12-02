import React from "react";
import styled from "styled-components";

class TodoRow extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.todo === nextProps.todo) { /* 현재의 todo값(this.props.todo)이 새로운 todo값(nextProps.todo)과 같으면 랜더링 수행 x */
            return false;
        }
        return true;
    }
    render() {
        const { index, todo, handleClickRemove } = this.props;
        return (
            <Container>
                <Text onClick={() => handleClickRemove(index)}>{todo}</Text>
            </Container>
        );
    }
}
/* React는 컴포넌트의 state나 props에 변화가 생기면 이를 감지하고 컴포넌트를 재랜더링 함 
    그 과정에서 하위 컴포넌트들도 전부다 재랜더링 되기 때문에 상위 컴포넌트가 재랜더링 되면서 불필요한 재랜더링이 이루어짐*/
/* shouldComponentUpdate 를 통해 불필요한 재랜더링을 없애줄 수 있음
   매개변수로 새로운 props와 state를 받음, 컴포넌트가 랜더링하기 직전에 실행됨
   true를 반환하면 랜더링 수행, false를 반환하면 랜더링 수행x, 따로 구현하지 않으면 항상 true  */    

/*constTodoRow = ({ index, todo, handleClickRemove }) => {
    return (
    <Container>
         <Text onClick={() => handleClickRemove(index)}>{todo}</Text>
        { {index}---{todo} }
    </Container>
         );
    };*/

const Container = styled.div`
    margin: 13px 0;
    width: 80%;
    text-align: left;
`;

const Text = styled.div`
    display: inline-block; /* 글자 외의 공간에 마우스가 있을 때 이벤트 발생하는 것을 막아줌 */
    cursor: pointer;
    font-size: 32px;
    &:hover {
        opacity: 0.4;
    }
`;

export default TodoRow;