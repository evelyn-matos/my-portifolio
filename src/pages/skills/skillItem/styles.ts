import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 400px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (min-width: 320px) and (max-width: 350px){
        height: 315px;
        margin-top: 20px;
    }
    

`

export const CardItem = styled.div`
    width: 230px;
    height: 320px;
    border: 1px solid #565656;
    border-radius: 20px;
    text-align: center;
    padding: 15px 5px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &:hover{
        border: 1px solid var(--ColorPrimary);
        
    }

    @media screen and (min-width: 320px) and (max-width: 350px){
        
        width: 200px;
        height: 230px;
        
    }

`

export const Title = styled.h4`
    color: var(--ColorPrimary);
    border-bottom: 5px;

    @media screen and (min-width: 320px) and (max-width: 350px){
        font-size: 15px;
    }
`

export const InfoArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    
`

export const tecnologiasArea = styled.div`
    
    
    width: 200px;
    display: flex;
    flex-direction: column;
    
   
    
    
    
`
export const tecnologiaItem = styled.div`
    display: flex;
    align-items: center;
    
    

    padding: 10px;


    img{
        width: 35px;
        height: 35px;
        
    }

    span{
        margin-left: 20px;
        color: white;
    }

    @media screen and (min-width: 320px) and (max-width: 350px){
        
        
        img{
            width: 25px;
            height: 25px;
        }
    }
    
`






    
        



