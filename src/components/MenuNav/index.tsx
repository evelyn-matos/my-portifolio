import * as C from './styles';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import EmailIcon from '@mui/icons-material/Email';
import {SyntheticEvent, useState } from 'react';
import { Tooltip } from '@mui/material';


import { useDispatch } from 'react-redux';
import { setNomePage } from '../../redux/reducers/useReducer';

export const MenuNav = () => {
    
    const Dispatch = useDispatch()
    const [activeItem, setActiveItem] = useState([

        {name: 'HouseIcone', status: true},
        {name: 'SobreIcone', status: false},
        {name: 'StudyIcone', status: false},
        {name: 'SkillsIcone', status: false},
        {name: 'ProjetosIcone', status: false},
        {name: 'ContatoIcone', status: false},
    ])

    

    const handleClick = (e: SyntheticEvent) => {
        const itemAtivado = e.currentTarget.id
        const newActive = [...activeItem]

        let i = 0

        while (i < 6){
            if(itemAtivado === activeItem[i].name){
               newActive[i].status = true
               Dispatch(setNomePage(itemAtivado))

            }else {
                newActive[i].status = false
            }

            i++
        }

        setActiveItem(newActive)
    }
    return (
        <C.Container>
            <C.AreaIcones >

                <C.IconeItem active={activeItem[0].status} id='HouseIcone' onClick={handleClick} >
                    <Tooltip title='Home' placement='left' arrow>
                        <HouseIcon />
                    </Tooltip>
                </C.IconeItem>

                <C.IconeItem active={activeItem[1].status} id='SobreIcone' onClick={handleClick}>
                    <Tooltip title='Sobre' placement='left' arrow>
                        <PersonIcon />
                    </Tooltip>
                </C.IconeItem>

                <C.IconeItem active={activeItem[2].status} id='StudyIcone' onClick={handleClick}>
                    <Tooltip title='Estudos' placement='left' arrow>
                        <AutoStoriesIcon />
                    </Tooltip>
                </C.IconeItem>

                <C.IconeItem active={activeItem[3].status} id='SkillsIcone' onClick={handleClick}>
                    <Tooltip title='Skills' placement='left' arrow>
                        <PsychologyIcon />
                    </Tooltip>
                </C.IconeItem>

                <C.IconeItem active={activeItem[4].status} id='ProjetosIcone' onClick={handleClick}>
                    <Tooltip title='Projetos' placement='left' arrow>
                        <SplitscreenIcon />
                    </Tooltip>
                </C.IconeItem>

                <C.IconeItem active={activeItem[5].status} id='ContatoIcone' onClick={handleClick}>
                    <Tooltip title='Contato' placement='left' arrow>
                        <EmailIcon />
                    </Tooltip>
                </C.IconeItem>
            
            </C.AreaIcones>
        </C.Container>
    )
}