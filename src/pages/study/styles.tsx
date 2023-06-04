import styled from "styled-components";

type Props = {
    props: boolean
}

export const Container = styled.div<Props>`
    width: 100%;
    height: 100%;
    padding: 20px;
    
    display: ${Props => Props.props ? 'block' : 'none'};
    animation: fadeInUp;
    animation-duration: 2s;

    @media screen and (max-width: 950px) and (min-width: 800px){
        
        max-width: 800px ;
    }

    @media screen and (min-width: 320px) and (max-width: 350px){
        padding: 0;
        padding-left: 10px; 
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        padding-left: 5px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       
       padding-left: 25px;
    }

    
`


export const AreaSobre = styled.div`
    
    height: 450px;
    margin-top: 40px;
    
    @media screen and (min-width: 320px) and (max-width: 359px){
        margin-top: 5px;
        
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        margin-top: 10px;
    }

    @media screen and (min-width: 451px) and (max-width: 900px){
        margin-top: 15px;
    }


    
`

export const Title = styled.h1`
    color: white;
    font-size: 40px;
    font-family: var(--Font_Inter);
    font-weight: 200;

    span{
        color: var(--ColorPrimary);
    }

    @media screen and (min-width: 320px) and (max-width: 350px){
        font-size: 20px; 
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        font-size: 25px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       
       font-size: 30px;
    }

    @media screen and (min-width: 450px) and (max-width: 900px){
        font-size: 35px;
        
    }
   
`

export const InfoArea = styled.div`
    width: 100%;
    height: 400px;
    
    

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media screen and (min-width: 320px) and (max-width: 350px){
        
        height: 280px;
    }

`

export const InfoItem = styled.div`
    width: 250px;
    height: 330px;
    border: 1px solid #565656;
    border-radius: 20px;
    text-align: center;
    padding: 20px 5px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;
    margin-bottom: 40px;

    &:hover{
        border: 1px solid var(--ColorPrimary);
        
    }

    

    h4{
        color: var(--ColorPrimary);
        border-bottom: 5px;
    }

    span{
        color: var(--ColorGray);
        border-bottom: 5px;

    }

    p{

        color: white;
        text-align: center;
        padding: 10px;
    }
   
    @media screen and (min-width: 320px) and (max-width: 350px){
        width: 200px;
        height: 235px;
        margin: 0 0 30px 0;
        padding: 15px 5px;
        

        p{
            font-size: 12px;
            padding: 5px;
        }
        
    }
`





    
        
