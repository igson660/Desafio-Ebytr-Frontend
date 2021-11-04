import styled from 'styled-components';

export const Conteiner = styled.div`
  width:100%;
  justify-content:center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  #add-task {
    display: flex;
    flex-basis: auto;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      margin: 5px;
    }

    input {
      margin: 5px;
    }

    button {
      margin: 5px;
    }
  }

  #all-tasks {
    width: 100%;
    display: flex;
    align-items: initial;
    justify-content: center;
    margin: 30px;
    h2 {
      margin: 10px;
    }

    div{

      div{
        display: flex;
        align-items: center;
        justify-content: center;
      } 
    }

    li {
      list-style: none;
      border-style: groove;
      border-bottom: none ;
      border-left: none;
      border-right: none;
    }
}
`;