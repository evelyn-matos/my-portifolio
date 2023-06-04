import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 400px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    span{
        font-size: 15px;
    }

    @media screen and (min-width: 320px) and (max-width: 350px){
        height:240px;
        margin-bottom: 35px;
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        height: 400px;
        margin-bottom: 35px;
        
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
        height: 430px;
        margin-bottom: 35px;
        

    }

    @media screen and (min-width: 501px) and (max-width: 900px) {
       width: calc(100vw - 20px);
       height: 400px;
      
    }
   
`

export const AreaCard = styled.div`

    width: 790px;
    height: 330px;
    background-color: rgb(86, 86, 86, .1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width: 320px) and (max-width: 350px){
       width: 100%;
       height: 230px; 
       display: flex;
       align-items: center;
       justify-content: flex-start;
       
        
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        height: 395px;
        width: 270px;
        display: flex;
        flex-direction: column;
        
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
        height: 430px;
        width: 320px;
        display: flex;
        flex-direction: column;
        

    }

    
`

export const AreaImage = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    

    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (min-width: 320px) and (max-width: 350px){
        display: none;
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        width: 280px;
        height: 150px;
        flex: none;
        align-items: start;
        justify-content: center;
    
        padding: 0;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
        
        width: 320px;
        height: 160px;
        flex: none;
        align-items: start;
        justify-content: center;
        
        padding: 0;

    }


`

export const Image = styled.img`
    width: 350px;
    height: 330px;
    border-radius: 10px 0px 0px 10px;
    object-fit: cover;
    
    
    @media screen and (min-width: 320px) and (max-width: 350px){
        display: none;
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
       
        width: 270px;
        height: 150px;
        border-radius: 10px 10px 0 0;
        
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0 0;
    }


`

export const AreaInfo = styled.div`
    flex: 1;
    width: 350px;
    height: 300px;
    padding: 5px 5px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 320px) and (max-width: 350px){
      width: 100%;
      height: 200px;
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        width: 270px;
        height: 400px;
        span{
            font-size: 12px;
        }
        
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
        width: 335px;
        height: 200px;
        span{
            font-size: 15px;
        }
    }

    
`

export const Title = styled.h4`
    color: var(--ColorPrimary);
    font-family: var(--Font_Monst);
    font-weight: bold;

    @media screen and (max-width: 320px) and (min-width: 390px){
        font-size: 15px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
        font-size: 18px;
    }

    
`

export const Descricao = styled.p`
    font-size: 15px;
    padding: 10px;

    @media screen and (min-width: 320px) and (max-width: 350px){
        display: none;
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
        font-size: 12px;
        padding: 0px 5px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
        font-size: 14px;
        padding: 0 10px;
    }
`



export const AreaIcones = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    img{
        width: 30px;
        height: 30px;
    }

    @media screen and (min-width: 320px) and (max-width: 350px){

        height: 10px;
        img{
            width: 20px;
            height: 20px;
        }
    }

    @media screen and (min-width: 360px) and (max-width: 450px){
        height: 30px;

        img{
            width: 25px;
            height: 25px;
        }
    }

  
    
`


export const AreaLinks = styled.div`

    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;


    

    a{
        text-decoration: none;
        color: white;
        font-size: 15px;
        padding: 5px 30px;
        background-color: transparent;
        border-radius: 20px;
        border: 1px solid var(--ColorPrimary);
        

        &:hover{
            background-color: var(--ColorPrimary);
            transition: 2s;
        }

    }

    @media screen and (min-width: 320px) and (max-width: 350px){

        height: 20px;
        a{
            width: 100px;
            font-size: 10px;
            padding: 5px;
            text-align: center;

        }
    }

    @media screen and (min-width: 360px) and (max-width: 450px){
        height: 30px;
        padding-bottom: 5px;

        a{
            width: 120px;
            font-size: 12px;
            padding: 5px;
            text-align: center;
        }
    }
`