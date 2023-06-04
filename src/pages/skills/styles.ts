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
    position: relative;

    @media screen and (max-width: 950px) and (min-width: 800px){
        
        max-width: 800px ;
    }

    @media screen and (min-width: 320px) and (max-width: 350px){
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


export const AreaSobre = styled.div`
    
    height: 450px;
    margin-top: 20px;

    @media screen and (min-width: 320px) and (max-width: 350px){
        margin-top: 5px;
        height: 280px;

        
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
`

export const SkillsArea = styled.div`

    height: 400px;
    display: flex;
    align-items: center;
    
    margin: 15px 0;
    
    
    @media screen and (min-width: 320px) and (max-width: 350px){
        width: 250px;
        height: 200px;
        margin: 15px 0px 30px 0;
        
  
    }

    @media screen and (min-width: 451px) and (max-width: 900px){
        margin: 0px 0px ;
       
    }
   
   
`








