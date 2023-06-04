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
        padding-left: 5px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       
       padding-left: 25px;
    }
`


export const AreaSobre = styled.div`
    
    height: 300px;
    margin-top: 40px;

    @media screen and (min-width: 320px) and (max-width: 350px){
        margin-top: 10px;
        
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        margin-top: 10px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       margin-top: 15px;
       
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
        font-size: 45px;
    }
    
`

export const SubTitle = styled.div`

    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;

    color: white;
    font-size: 20px;
    font-weight: 200;
    font-family: var(--Font_Inter);
    

    margin-top: 30px;
    padding: 30px;

    @media screen and (min-width: 320px) and (max-width: 350px){
        font-size: 12px;
        
        margin-top: 5px;
        padding: 0;
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        font-size: 15px;
        margin-top: 10px;
        padding: 8px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       font-size: 18px;
       margin-top: 10px;
       padding: 5px;
       
    }

    @media screen and (min-width: 450px) and (max-width: 900px){
        font-size: 20px;
        margin-top: 10px;
        padding: 10px;
    }

`

export const subTitleItem = styled.div`
   
   p{
        margin-left: 10px;
        display: inline;
     }
`

