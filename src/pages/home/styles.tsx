import styled from "styled-components";
import 'animate.css'

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
        padding-left: 5px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       
       padding-left: 25px;
    }
    
`

export const AreaIntro = styled.div`
    
    height: 300px;
    margin-top: 20px;

    @media screen and (min-width: 320px) and (max-width: 350px){
        margin-top: 10px;
        
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       
       margin-top: 15px;
    }

   
    
    
    
`

export const Title = styled.h1`
    color: white;
    font-size: 70px;
    font-family: var(--Font_Inter);
    font-weight: 200;

    span{
        color: var(--ColorPrimary);
    }

    animation: 'slideInUp';
    animation-duration: 2s;

    @media screen and (min-width: 320px) and (max-width: 350px){
        font-size: 20px;  
    }

    @media screen and (min-width: 360px) and (max-width: 393px){
        font-size: 25px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       font-size: 30px;
       
    }

    @media screen and (min-width: 450px) and (max-width: 900px){
        font-size: 50px;
    }
`

export const SubTitle = styled.p`


   font-family: var(--Font_Popp);

    margin-top: 50px;
    font-size: 20px;
    color: #838383;
    
    @media screen and (min-width: 320px) and (max-width: 350px){
        font-size: 15px;

    }

    @media screen and (min-width: 360px) and (max-width: 393px){
        font-size: 18px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       font-size: 20px;
       
    }

`

