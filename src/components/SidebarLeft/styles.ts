import styled from "styled-components";

export const Container = styled.aside<Props>`
    width: 350px;
    height: 100vh;
   
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-left: ${Props => Props.props ? '-300px' : 0};
    transition: 2s;
    padding: 10px;
    background-color: var(--Background);
    
   
   

    @media screen and (min-width: 320px) and (max-width: 359px){
        width: 280px;
        height: 400px;

        padding: 5px;
        padding-left: 30px;
        margin-right: 10px;

        margin-left: ${Props => Props.props ? '-265px' : 0};
    }


        
    @media screen and (min-width: 360px) and (max-width: 390px){
       
        height: calc(100vh - 70px);
        margin-left: ${Props => Props.props ? '-310px' : '15px'};
        
    }


         
    @media screen and (min-width: 391px) and (max-width: 400px){
       
       height: calc(100vh - 70px);
       margin-left: ${Props => Props.props ? '-320px' : '35px'};  
    }


        
    @media screen and (min-width: 401px) and (max-width: 500px){
        height: calc(100vh - 70px);
        margin-left: ${Props => Props.props ? '-320px' : '45px'};  
        
    }

    @media screen and (min-width: 501px) and (max-width: 900px){
        width: 100vw;
        height: 300px;
        margin-left: 0;
        margin-top: ${Props => Props.props ? '-300px' : 0};  
        
    }

    
`

export const AreaInfos = styled.div`

    width: 320px;
    height: 550px;
    border-radius: 30px;
    border: 1px solid var(--ColorGray);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;


    @media screen and (min-width: 320px) and (max-width: 350px){
       
       height: 100%;

    }

    @media screen and (min-width: 360px) and (max-width: 390px){
       
       height: 500px;
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       
       height: 580px;
    }
    
    @media screen and (min-width: 451px) and (max-width: 500px){
        height: 600px;
    }

    @media screen and (min-width: 501px) and (max-width: 900px){
        width: calc(100vw - 20px);
        height: 280px;
        
        
        display: grid;
        grid-template-columns: repeat(2, 1fr );
        
       
    }
 

   

    
    
`

export const ImageArea = styled.div`
    width: 230px;
    height: 250px;
    padding-top: 20px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 30px;
        object-fit: cover;
    
    }

    
   
    @media screen and (min-width: 320px) and (max-width: 350px){
        width: 150px;
        height: 180px;
    }

    @media screen and (min-width: 360px) and (max-width: 390px){
       
       width: 200px;
       height: 250px;

    }

    @media screen and (min-width: 451px) and (max-width: 900px){
        width: 200px;
        height: 250px;
        padding: 10px;

        padding-left: 10px;
        padding-top: 0;
        
        grid-column-start: 1;
        grid-colum-end: 2;

        grid-row-start: 1;
        grid-row-end: 4;
    }

   
   

   
`

export const DescriptionArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 10px;

    h3{
        font-family: 'Poppins', sans-serif;
        color: white;
    }

    p{
        color: var(--ColorPrimary);
        font-family: 'Indie Flower', cursive;
        font-size: 20px;
        font-weight: bold;
    }

    span{
        padding-top: 10px;
        color: white;
        font-family: 'Poppins', sans-serif;

    }

   

    @media screen and (min-width: 320px) and (max-width: 390px){
       span{
        padding-top: 0px;
       }
    }

    @media screen and (min-width: 391px) and (max-width: 450px){
       
       padding-top: 25px;
    }

    @media screen and (min-width: 451px) and (max-width: 500px) {
        padding-top: 30px;
        
    }


    @media screen  and (min-width: 501px) and (max-width: 900px){
        width: 25rem;

        grid-column-start: 2;
        grid-colum-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }



    
`

export const IconsArea = styled.div`
    width: 200px;
    height: auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 950px) and (min-width: 501px){
        
        width: 25rem;
        margin-top: 0;
        padding:  0 80px;
        justify-content: space-around;


        grid-column-start: 2;
        grid-colum-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    @media screen and (min-width: 320px) and (max-width: 390px){
        margin-top: 15px;
    }
`

export const IconeItem = styled.a`
    width: 55px;
    height: 55px;
    
    border-radius: 50%;
    

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .iconeLinkedin, .iconeGithub, .iconeInstagram{
        width: 100%;
        height: 100%;
        color: var(--ColorGray);
        padding: 15px;
        border-radius: 50%;
        border: 2px solid var(--ColorGray);

        &:hover{
            border: 2px solid var(--ColorPrimary);
            color: var(--ColorPrimary);
            transition: 1s ease-out;
        }
    }


    @media screen and (min-width: 320px) and (max-width: 390px){
        width: 40px;
        height: 40px;

        .iconeLinkedin, .iconeGithub, .iconeInstagram{
            padding: 5px;
        }

    }

    
    

    
`
export const ButtonArea = styled.div`
    padding-top: 30px;
    
    @media screen and (max-width: 950px) and (min-width: 501px){
        width: 25rem;
        display: flex;
        justify-content: center;
        padding: 0 0 15px 0;


        grid-column-start: 2;
        grid-colum-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
    }

    @media screen and (min-width: 320px) and (max-width: 350px){
        padding: 0;
        margin-top: 10px;
    }

`

export const Button = styled.button`
    width: 250px;
    height: 50px;
    border-radius: 30px;

    border: 2px solid var(--ColorPrimary);
    background-color: transparent;

    color: white;
    font-size: 20px;

    cursor: pointer;
   
    &:hover{
        background-color: var(--ColorPrimary);
        transition: 1s ease-out;
        color: white;
    }

    a{
        text-decoration: none;
        color: white;
        font-size: 16px;
    }

    @media screen and (min-width: 320px) and (max-width: 390px){
        width: 200px;
        height: 40px;
        font-size: 10px;
    }

`

type Props = {
    props: boolean;
}

export const buttonHidden = styled.div<Props>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--ColorGray);
    opacity: 0.9;
    margin-left: 315px;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--ColorPrimary);

    cursor: pointer;

    transform: ${Props => Props.props ? 'rotate(360deg)' : 'rotate(180deg)'};
    transition: 2s;

    @media screen and (max-width: 950px) and (min-width: 501px){
       margin-left: 0;
       margin-top: 300px;
       transform: ${Props => Props.props ? 'rotate(90deg)' : 'rotate(270deg)'}; 
    }

    @media screen and (min-width: 320px) and (max-width: 350px){
       margin-left: 245px;
    }



  

    
`

