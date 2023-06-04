import * as C from './styles'
import { TagComponent } from '../../components/areaPrincipal/TagComponent'
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useEffect, useState } from 'react';
import { SkillCardItem } from './skillItem';
import Slider from '../../components/areaPrincipal/slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { SkillItem } from './skill';


export const Skills = () => {

    const pageAtiva = useAppSelector(state => state.pageAtiva)
    const [ativo, setAtivo] = useState(true)

    useEffect(()=> {
        if(pageAtiva.nomePage === 'SkillsIcone'){
            setAtivo(true)
        }else{
            setAtivo(false)
        }
    }, [pageAtiva])

    const settings: SwiperProps = {
        spaceBetween: 0,
        navigation: SkillItem.length >= 2,
        pagination: SkillItem.length >= 2 && {
            clickable: true,
        },

        breakpoints: {
            200: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                
            },

            600: {
                slidesPerView: SkillItem.length >= 2 ? 2 : SkillItem.length,
                slidesPerGroup: SkillItem.length >= 2 ? 2 : SkillItem.length,
                
            },

            800: {
                slidesPerView: SkillItem.length >= 3 ? 3 : SkillItem.length,
                slidesPerGroup: SkillItem.length >= 3 ? 3 : SkillItem.length,
                
            }




            

            
        }
       
    };
    

    
    return (
        <C.Container  props={ativo}>
            <TagComponent name={'Skills'} icon={<PsychologyIcon/>}/>
            <C.AreaSobre>
                <C.Title>Minhas <span>habilidades</span></C.Title>
                
                <C.SkillsArea>
                    <Slider settings={settings}>
                        {SkillItem.map((skill)=>(
                                <SwiperSlide>
                                    <SkillCardItem
                                        title={skill.title}
                                        tecnologias={skill.tecnologias}
                                    />
                                </SwiperSlide>
                            ))}
                    </Slider>
                </C.SkillsArea>
            </C.AreaSobre>
        </C.Container>
    )
}