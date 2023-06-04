import * as C from './styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ImageDev from '../../public/images/imagedev.jpeg'
import { useState } from 'react';

export const SidebarLeft = () => {

    const [sidebarHidden, setSidebarHidden] = useState(false)


    const handleHiddenSedebar = () => {
        if(sidebarHidden === false){
            setSidebarHidden(true)
        }else{
            setSidebarHidden(false)
        }    
    }
    
    return (

        <C.Container props={sidebarHidden}>
            <C.buttonHidden onClick={handleHiddenSedebar} props={sidebarHidden}>
                <DoubleArrowIcon style={{background:'transparent'}}/>
            </C.buttonHidden>
            <C.AreaInfos>
                <C.ImageArea>
                    <img src={ImageDev} />
                </C.ImageArea>
                <C.DescriptionArea>
                    <h3>Evelyn Matos</h3>
                    <p>Desenvolvedora Frontend</p>
                    <span>Vitória Espirito Santo</span>
                </C.DescriptionArea>
                <C.IconsArea>
                    <C.IconeItem href='https://www.linkedin.com/in/evelyn-mm/' target='_blank'>
                        <LinkedInIcon className='iconeLinkedin' />
                    </C.IconeItem>
                    <C.IconeItem href='https://github.com/evelyn-matos' target='_blank'>
                        <GitHubIcon className='iconeGithub'/>
                    </C.IconeItem>
                    <C.IconeItem href='https://www.instagram.com/velyn.mm/' target='_blank'>
                        <InstagramIcon className='iconeInstagram'/>
                    </C.IconeItem>
                </C.IconsArea>
                <C.ButtonArea>
                    <C.Button><a href='https://wa.me/message/ANISUNMFYS4DG1' target='_blank'>Enviar Mensagem!</a></C.Button>
                </C.ButtonArea>
            </C.AreaInfos>
        </C.Container>
    )
}