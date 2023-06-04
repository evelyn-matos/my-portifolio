import styled from "styled-components";

export const container = styled.a`

    color: white;
    


    display: block;
    padding: 5px 30px;
    text-decoration: none;
    border: 1px solid var(--ColorPrimary);
    border-radius: 20px;
    cursor: pointer;
    background-color: transparent;
    

    &:hover{
        background-color: var(--ColorPrimary);
        color: white;
        transition: 1s;
    }

   

`