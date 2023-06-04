import * as C from './styles'
import { TagComponent } from '../../components/areaPrincipal/TagComponent';
import HouseIcon from '@mui/icons-material/House';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useEffect, useState } from 'react';



export const Home = () => {

    const pageAtiva = useAppSelector(state => state.pageAtiva)
    const [ativo, setAtivo] = useState(true)

    useEffect(()=> {
        if(pageAtiva.nomePage === 'HouseIcone'){
            setAtivo(true)
        }else{
            setAtivo(false)
        }
    }, [pageAtiva])

    return (
        <C.Container props={ativo} >
            <TagComponent name={'Home'} icon={<HouseIcon/>}/>
            <C.AreaIntro>
                <C.Title >Hey, meu nome é <span>Evelyn</span>, sou Desenvolvedora Frontend</C.Title>
                <C.SubTitle>
                    Aqui você descobrirá um pouco sobre mim e os meus projetos.<br/>
                    Fique a vontade para entrar em contato comigo se desejar!
                </C.SubTitle>
            </C.AreaIntro>
        </C.Container>
    )
}