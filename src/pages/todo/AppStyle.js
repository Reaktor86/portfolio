import styled from "styled-components";

export const StyledApp = styled.div`
  h1 {
    text-align: center;
}

p {
    font-family: "Roboto Light", sans-serif;
    color: #313131;
}

.grid {
    display: grid;
    width: 85%;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    
    & > div {
        padding: 1rem;
    }

    .controls {
        background: #5e5ebb;
        grid-column: 1 / 4;
    }

    .todos_IU {
        background: #d01a14;
    }

    .todos_INU {
        background: #ee8025;
    }

    .todos_UU {
        background: #259aee;
    }

    .todos_UNU {
        background: #2cee25;
    }

    .todos_other {
        background: rgb(98, 98, 98);
        grid-column: 1 / 3;
    }

    .done {
        background: #a86500;
        grid-column: 3 / 4;
        grid-row: 2 / 5;
    }
}

@media all and (max-width: 1000px) {
        
        .grid {
            
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(5, 1fr);
            
            .controls {
        grid-column: 1 / 3;
    }
    
            .done {
                grid-column: 1 / 3;
                grid-row: auto;
            }
        }
    }
    
@media all and (max-width: 500px) {
    
    .grid {
        
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        
        .controls {
    grid-column: auto;
}

.todos_other {
        grid-column: auto;
    }
    
        .done {
            grid-column: auto;
            grid-row: auto;
        }
    }
}
`