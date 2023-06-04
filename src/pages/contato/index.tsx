import * as C from './styles'
import { TagComponent } from '../../components/areaPrincipal/TagComponent'
import EmailIcon from '@mui/icons-material/Email';
import CircleIcon from '@mui/icons-material/Circle';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useEffect, useState } from 'react';
import { ButtonLink } from '../../components/areaPrincipal/buttonLink';

export const Contato = () => {

    const pageAtiva = useAppSelector(state => state.pageAtiva)
    const [ativo, setAtivo] = useState(true)

    useEffect(()=> {
        if(pageAtiva.nomePage === 'ContatoIcone'){
            setAtivo(true)
        }else{
            setAtivo(false)
        }
    }, [pageAtiva])

    return (
        <C.Container  props={ativo}>
            <TagComponent name={'Contato'} icon={<EmailIcon />}/>
            <C.AreaSobre>
                <C.Title>Vamos trabalhar <span>juntos!</span></C.Title>
                <C.SubTitle>
                    <C.SubTitleItem>
                        <CircleIcon style={{fontSize:'small', color: '#b20082'}} /> 
                        <p>Atualmente tenho disponibilidade para trabalhar tanto como PJ quanto CLT.<br/><br/></p>
                    </C.SubTitleItem>
                    <C.SubTitleItem>
                        <CircleIcon style={{fontSize:'small', color: '#b20082'}} /> 
                        <p>Estou aberta a aprender novas tecnologias e me dedicar ao máximo para evoluir e contribuir com a empresa.<br/><br/></p>
                    </C.SubTitleItem>
                    <C.SubTitleItem>
                        <CircleIcon style={{fontSize:'small', color: '#b20082'}} /> 
                        <p>Se você gostou do meu portifólio e precisa de alguem no seu time, entre em contato comigo, tenho certeza que eu possso contribuir muito na equipe.<br/><br/></p>
                    </C.SubTitleItem>    
                </C.SubTitle>
                <C.buttonsArea>
                    <ButtonLink  data='https://www.linkedin.com/in/evelyn-mm/'>Enviar Proposta no Linkedin</ButtonLink>  
                </C.buttonsArea>
                
            </C.AreaSobre>
        </C.Container>
    )
}