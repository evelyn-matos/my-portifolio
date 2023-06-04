import styled from "styled-components";

export const Container = styled.aside`
    
    
    width: 100px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    
    
    @media screen and (min-width: 320px) and (max-width: 385px){
        width: 100vw;
        height: 60px;

        position: absolute;

        align-self: flex-end;
        
    }

    @media screen and (min-width: 386px) and (max-width: 450px) {
        width: 100vw;
        height: 70px;
        position: absolute;

        align-self: flex-end;
        
    }

    @media screen and (min-width: 451px) and (max-width: 500px){
       width: 100vw;
       height: 70px;
       position: absolute;
       align-self: flex-end;
  
    }

    @media screen and (min-width: 501px) and (max-width: 900px) {
       width: 100vw;
       height: 100px;
       
    }

   


`

export const AreaIcones = styled.nav`
    width: 60px;
    height: 350px;
    border-radius: 30px;
    border: 1px solid var(--ColorGray);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


    @media screen and (min-width: 320px) and (max-width: 350px){
        flex-direction: row;
        width: calc(100% - 30px);
        height: 40px;
    }


    @media screen and (min-width: 351px) and (max-width: 385px) {
        width: calc(100% - 30px);
        height: 40px;
        margin-bottom: 10px;
        flex-direction: row;
    }

    @media screen and (min-width: 386px) and (max-width: 450px) {
        width: calc(100% - 30px);
        height: 50px;
        margin-bottom: 10px;
        flex-direction: row;
        
    }

    @media screen and (min-width: 451px) and (max-width: 500px) {
        width: calc(100% - 30px);
        height: 60px;

        flex-direction: row;
        
    }


    @media screen  and (min-width: 501px) and (max-width: 900px){
        width: calc(100% - 100px);
        height: 60px;

        flex-direction: row;
    }

    
`

type Props = {
    active?: boolean
}

export const IconeItem = styled.button<Props>`
    color: ${Props => Props.active ? '#b20082' : '#565656'};

    border: none;
    background-color: transparent;

    outline: none;

    &:hover{
        
    }

    :hover{
        cursor: pointer;
        color: var(--ColorPrimary);
        transition: 1s ease;
    }

    
`

