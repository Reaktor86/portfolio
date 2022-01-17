import styled from 'styled-components';

export const WrappedEnglishTraining = styled.div`
  width: 100%;
  height: 100vh;
  background: #d4d4d4;

  p, span {
    font-family: 'Gill Sans', sans-serif;
    font-size: 14px;
  }

  .cont {
    margin: 0 auto;
    width: 60%;
    height: 100%;
    padding: 20px;
    background: #f8ffd5;

    h2 {
      text-align: center;
    }

    .word-for-training {
      margin-right: 15px;
    }

    .word-selected {
      color: #b78334;
      font-weight: bold;
      margin-right: 15px;
    }

    .btn-start {
      display: block;
      margin-top: 20px;
    }

    .task {
      color: red;
    }
  }
`