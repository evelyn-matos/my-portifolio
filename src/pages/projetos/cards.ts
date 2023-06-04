import { PropsCard } from "../../types/type"

import Html from '../../public/icones/html5.svg';
import Css from '../../public/icones/css3.svg';
import Javascript from '../../public/icones/javascript.svg';
import Typescript from '../../public/icones/typescript.svg';
import React from '../../public/icones/react.svg';
import StyledComponents from '../../public/icones/styledComponents.svg';
import MaterialUi from '../../public/icones/materialUi.svg';
import Swiper from '../../public/icones/swiper.svg';

import ProjetoPortifolio from '../../public/images/projeto-portifolio.jpeg';
import ProjetoCodificador from '../../public/images/projeto-codificador.png';
import ProjetoJogoMemoria from '../../public/images/projeto-jogoMemoria.png';
import ProjetoPokedex from '../../public/images/projeto-pokedex.png';


export const CardsItem: PropsCard[] = [

    {   
        title: 'Portifólio Pessoal',
        desc: 'Esse projeto foi foi pensado em trazer algo diferente do habitual, não apenas no sentido estético mas para que eu pudesse praticar meus conhecimentos e poder mostra-los assim que meu portifólio fosse aberto. ',
        img: ProjetoPortifolio, 
        github: 'github.com/evelyn',
        link: 'projeto.com',

        tecnologias: [
            {name: 'React', icone: React},
            {name: 'Typescript', icone: Typescript},
            {name: 'Swiper',  icone: Swiper },
            {name: 'StyledComponents', icone: StyledComponents},
            {name: 'Material UI', icone: MaterialUi},
        ]
    },

    {
        title: 'Projeto Codificador', 
        desc: 'Projeto realizado no Programa One, onde realizamos um codificador que criptografa e descriptografa a mensagem digitada.',
        img: ProjetoCodificador, 
        github: 'https://github.com/evelyn-matos/ProjetosOne/tree/main/Decodificador',
        link: 'https://evelyn-matos.github.io/ProjetosOne/Decodificador/',
        tecnologias: [
            {name: 'Html', icone: Html},
            {name: 'Css', icone: Css},
            {name: 'JavaScript', icone: Javascript}
            
        ]

        
    },

    {
        title: 'Projeto Pokedex', 
        desc: 'Esse projeto foi realizado no BootCamp da Dio. Fizemos junto a listagem dos pokemons e o exercício era ao clicar no Card mostrar as informações de cada pokemon. Foi muito desafiador mas no final consegui finalizar',
        img: ProjetoPokedex, 
        github: 'https://github.com/evelyn-matos/DIO-OrangeTech/tree/main/Pokedex',
        link: 'https://evelyn-matos.github.io/DIO-OrangeTech/Pokedex/',
        tecnologias: [
            {name: 'Html', icone: Html},
            {name: 'Css', icone: Css},
            {name: 'JavaScript', icone: Javascript}
            
        ]

        
    },

    {
        title: 'Projeto Jogo da Memória', 
        desc: 'Esse foi um dos primeiros projetos que realizei, um jogo da memória inspirado em Game Of Thrones',
        img: ProjetoJogoMemoria, 
        github: 'https://github.com/evelyn-matos/jogo-memoria-got',
        link: 'https://evelyn-matos.github.io/jogo-memoria-got/',
        tecnologias: [
            {name: 'Html', icone: Html},
            {name: 'Css', icone: Css},
            {name: 'JavaScript', icone: Javascript}
            
        ]

        
    },

    
]