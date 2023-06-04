import { PropsSkill } from "../../types/type";

import Html from '../../public/icones/html5.svg';
import Css from '../../public/icones/css3.svg';
import Git from '../../public/icones/git.svg';
import Github from '../../public/icones/github.svg';
import Javascript from '../../public/icones/javascript.svg';
import Typescript from '../../public/icones/typescript.svg';
import React from '../../public/icones/react.svg';
import Bootstrap from '../../public/icones/bootstrap.svg';
import Tailwind from '../../public/icones/tailwind.svg';
import StyledComponents from '../../public/icones/styledComponents.svg';
import MaterialUi from '../../public/icones/materialUi.svg';
import Sass from '../../public/icones/sass.svg';
import Webpack from '../../public/icones/webpack.svg';
import Swiper from '../../public/icones/swiper.svg';



export const SkillItem: PropsSkill[] = [
    {
        title: 'Básico - Frontend',
        tecnologias: [
            {name: 'HTML', icone: Html},
            {name: 'CSS', icone: Css },
            {name: 'GIT', icone: Git},
            {name: 'Github', icone: Github},        
        ],
        
    },
    {
        title: 'Línguagens e Frameworks',
        tecnologias: [
            {name: 'JavaScript', icone: Javascript},
            {name: 'TypeScript', icone: Typescript},
            {name: 'React', icone: React },
                    
        ],
        
    }, 
    {
        title: 'Estilizadores',
        tecnologias: [
            {name: 'Bootstrap', icone: Bootstrap},
            {name: 'Tailwind', icone: Tailwind},
            {name: 'Material UI', icone: MaterialUi},
            {name: 'Styled Components', icone: StyledComponents},        
        ],
        
    },
    {
        title: 'Ferramentas',
        tecnologias: [
            {name: 'Sass', icone: Sass},
            {name: 'Webpack', icone: Webpack},
            {name: 'Swiper', icone: Swiper },
                   
        ],
        
    },
]