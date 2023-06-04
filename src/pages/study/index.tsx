import * as C from './styles'
import { TagComponent } from '../../components/areaPrincipal/TagComponent'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useEffect, useState } from 'react';
import { ButtonLink } from '../../components/areaPrincipal/buttonLink';
import Slider from '../../components/areaPrincipal/slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';


export const Study = () => {

    const pageAtiva = useAppSelector(state => state.pageAtiva)
    const [ativo, setAtivo] = useState(true)

    useEffect(()=> {
        if(pageAtiva.nomePage === 'StudyIcone'){
            setAtivo(true)
        }else{
            setAtivo(false)
        }
    }, [pageAtiva])


    const settings: SwiperProps = {
        spaceBetween: 50,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                navigation: false,
                
            },
            600: {
                slidesPerView: 2,
                navigation: false,
                
            },
            800: {
                slidesPerView: 3,
                navigation: true,
                
            }
       }
    }


    return (
        <C.Container  props={ativo}>
            <TagComponent name={'Estudos'} icon={<AutoStoriesIcon/>}/>
            <C.AreaSobre>
                <C.Title>Cursos e <span>BootCamps</span></C.Title>
                <C.InfoArea>
                    <Slider settings={settings}>
                        <SwiperSlide>
                            <C.InfoItem>
                                <h4>Orange Tech+ <br/> BootCamp Frontend</h4>
                                <span>Dio + Banco Inter</span>
                                <p>Primeiro bootcamp que participei, onde eu me apaixonei por React. Realizamos um Clone da página da Dio e uma pokedex</p>
                                <ButtonLink data='https://www.dio.me/certificate/BDD12E2E/share'>Ver Certificado</ButtonLink>
                            </C.InfoItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.InfoItem>
                                <h4>ONE <br/>Iniciante em Programação</h4>
                                <span>Alura + Oracle</span>
                                <p>Aproveitei para revisar meus conhecimentos em HTML, CSS e GIT. Criei projeto de um Decodificador em Javascipt</p>
                                <ButtonLink data='https://cursos.alura.com.br/user/euevelynmatos/degree-logica-de-programacao-turma-5-oracle-one-561815/certificate'>Ver Certificado</ButtonLink>
                            </C.InfoItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.InfoItem>
                                <h4>ONE <br/> Desenvolvimento Pessoal</h4>
                                <span>Alura + Oracle</span>
                                <p>Conteúdo fantástico sobre produtividade e foco. Aprendi como me organizar para ser mais produtiva e eficiente. </p>
                                <ButtonLink data='https://cursos.alura.com.br/degree/certificate/0bf195e3-6aa5-4336-ba6c-b633822b9fe1'>Ver Certificado</ButtonLink>
                            </C.InfoItem>
                        </SwiperSlide>
                    </Slider>       
                </C.InfoArea>
            </C.AreaSobre>
        </C.Container>
    )
}