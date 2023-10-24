import styled from 'styled-components';

function TestCom() {
  return <MyStyledComponent>HELLO</MyStyledComponent>;
}

export default TestCom;
const MyStyledComponent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.mainColorLight};
  color: white;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.mainColor};
  }
`;
