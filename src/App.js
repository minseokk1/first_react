import React from "react";
import styled from "styled-components";

class App extends React.Component {
  state = {
    query: ""
  };
  render() {
    return (
    <Container query={this.state.query}>
      <Input 
        placeholder="테마를 입력하세요"
        onKeyPress={this.handleInputKeyPress} // 키가 눌릴 때마다 handleInputKeyPress 발동
      ></Input>
    </Container>
    );
  }

  handleInputKeyPress = event => {
    if (event.key === "Enter") {
      this.setState({ //state를 변경할 때 this를 써주지 않으면 React가 state 변화 감지 못함
        query: event.target.value
      });
      event.target.value = ""; //검색 enter 후 검색창을 지워주기 위함
    }
  };
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.1) 10%,
    rgba(20, 20, 20, 0.7) 70%,
    rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${props => props.query});
  background-size: cover;
`;
// ``(빽틱) 내부에서는 ${} 구문으로 자바스크립트 값을 사용할 수 있음
const Input = styled.input`
position: absolute;
top: 0;
right: 0;
width: 190px;
height: 33px;
padding: 3px;
background: transparent;
outline: none;
border: none;
font-size: 22px;
color: white;
`

export default App;