import * as C from './styles'
import { TagComponent } from '../../components/areaPrincipal/TagComponent'
import PersonIcon from '@mui/icons-material/Person';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import CircleIcon from '@mui/icons-material/Circle';
import { useEffect, useState } from 'react';



export const Sobre = () => {

    const pageAtiva = useAppSelector(state => state.pageAtiva)
    const [ativo, setAtivo] = useState(true)

    useEffect(()=> {
        if(pageAtiva.nomePage === 'SobreIcone'){
            setAtivo(true)
        }else{
            setAtivo(false)
        }
    }, [pageAtiva])

    return (
        <C.Container  props={ativo}>
            <TagComponent name={'Sobre'} icon={<PersonIcon/>}/>
            <C.AreaSobre>
                <C.Title>Todo sonho tem um <span>começo</span>, esse é o meu...</C.Title>
                <C.SubTitle>
                    <C.subTitleItem>
                        <CircleIcon style={{fontSize:'small', color: '#b20082'}} /> 
                        <p>Depois de alguns anos trabalhando como operadora de caixa e assistente administrativo decidi seguir meu sonho e estudar programação! <br/><br/></p>
                    </C.subTitleItem>
                    
                    <C.subTitleItem>
                        <CircleIcon style={{fontSize:'small', color: '#b20082'}} /> 
                        <p>Atualmente estou estudando <span>NextJs</span> e me aprofundando em Clean Architecture, TDD, SOLID e Design Patterns <br/><br/></p>
                    </C.subTitleItem>
                    
                    <C.subTitleItem>
                        <CircleIcon style={{fontSize:'small', color: '#b20082'}} /> 
                        <p>Quero me tornar um desenvolvedora Frontend web e Mobile.<br/><br/></p>
                    </C.subTitleItem>
                    
                    <C.subTitleItem>
                        <CircleIcon style={{fontSize:'small', color: '#b20082'}} /> 
                        <p>Estou aberta a novas oportunidades onde eu posso contruibuir com meu conhecimento e aprender com o time.</p>
                    </C.subTitleItem>
                </C.SubTitle>
            </C.AreaSobre>
        </C.Container>
    )
}