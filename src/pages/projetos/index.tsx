import * as C from './styles'
import { TagComponent } from '../../components/areaPrincipal/TagComponent'
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useEffect, useState } from 'react';
import Slider from '../../components/areaPrincipal/slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { CardItem } from './cardItem';
import { CardsItem } from './cards';



export const Projetos = () => {

    const settings: SwiperProps = {
        spaceBetween: 50,
        navigation: CardsItem.length >= 2,
        pagination: CardsItem.length >=2 && {
            clickable: true,
        },

        


        
    }

    const pageAtiva = useAppSelector(state => state.pageAtiva);
    const [ativo, setAtivo] = useState(true);

    useEffect(()=> {
        if(pageAtiva.nomePage === 'ProjetosIcone'){
            setAtivo(true)
        }else{
            setAtivo(false)
        }
    }, [pageAtiva])

    return (
        <C.Container  props={ativo}>
            <TagComponent name={'Projetos'} icon={<SplitscreenIcon />}/>
            <C.AreaSobre>
                <C.Title>Meus <span>Projetos</span></C.Title>
                <C.ProjetosArea>
                    <Slider settings={settings}>
                        {CardsItem.map((card)=>(
                            <SwiperSlide>
                                <CardItem
                                    title={card.title}
                                    desc={card.desc}
                                    img={card.img}
                                    tecnologias={card.tecnologias}
                                    github={card.github}
                                    link={card.link}
                                    
                                />
                            </SwiperSlide>
                        ))}
                    </Slider>
                </C.ProjetosArea>
            </C.AreaSobre>
        </C.Container>
    )
}