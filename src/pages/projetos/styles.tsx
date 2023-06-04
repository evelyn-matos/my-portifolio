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

    
    

    @media screen and (min-width: 320px) and (max-width: 359px){
        padding: 0;
        padding-left: 20px;
    }

    
    @media screen and (min-width: 360px) and (max-width: 390px){
        padding: 0;
        padding-left: 10px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       padding: 0;
       padding-left: 25px;
       
    }
    @media screen and (min-width: 451px) and (max-width: 900px){
        padding: 0 20px;
    }
  
`


export const AreaSobre = styled.div`
    
    height: 300px;
    margin-top: 20px;

    @media screen and (min-width: 320px) and (max-width: 350px){
        margin-top: 5px;
        height: 300px;
        
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        height: 500px;
        margin-top: 5px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){

       height: 530px;
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
`

export const ProjetosArea = styled.div`


    font-family: var(--Font_Inter);
    font-weight: 200;
    margin-top: 30px;
    font-size: 20px;
    color: white;
    
    @media screen and (min-width: 320px) and (max-width: 350px){
       width: 240px;
       height: 280px;
       margin-top: 5px;
       
       
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        
        width: 300px;
        height: 450px;


    }

    @media screen and (min-width: 391px) and (max-width: 450px){
        width: 320px;
        height: 460px;
        
    }

    @media screen and (min-width: 451px) and (max-width: 900px){
     
     margin-top: 10px;
    }


`