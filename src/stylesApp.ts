import styled from "styled-components";

export const mainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--Background);
    
    display: flex;

    /* Responsividade */ 

    @media screen  and (min-width: 501px) and (max-width: 900px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

  
    

`

export const InfosArea = styled.div`
    flex: 1;
    margin: 50px 10px;
    overflow: hidden;
    

    
    @media screen and (min-width: 320px) and (max-width: 350px){
       
      

    }

    @media screen and (min-width: 360px) and (max-width: 390px){
       
     
    }

    @media screen and (min-width: 391px) and (max-width: 500px){
       margin: 10px;
       margin-top: 30px;
       
       
       
    }
    
    @media screen and (min-width: 501px) and (max-width: 600px){
        margin: 10px;
        width: 100vw;
    }

    @media screen and (min-width: 601px) and (max-width: 900px){
        width: 100vw;
        margin: 10px;
        
    }



`

