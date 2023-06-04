import * as C from './styles';

import { PropsCard } from '../../../types/type';
import { Tooltip } from '@mui/material';



export const CardItem = ({title, desc, img, tecnologias, github, link}:PropsCard) => {



    return(
        <C.Container>
            <C.AreaCard>

                <C.AreaImage>
                    <C.Image src={img}/>
                </C.AreaImage>
                
                <C.AreaInfo>
                    <C.Title>
                        {title}
                    </C.Title>

                    <C.Descricao>
                    {desc}
                    </C.Descricao>
                    <span>Tecnologias Utilizadas</span>
                    <C.AreaIcones>
                        {tecnologias.map((item) => (

                            <Tooltip title={item.name} placement='bottom' arrow>
                                <img src={item.icone} alt={item.name} />
                            </Tooltip>

                        ))}

                    </C.AreaIcones>

                    <C.AreaLinks>
                        <a href={github}>Link Código</a>
                        <a href={link}>Link Projeto</a>
                    </C.AreaLinks>

                </C.AreaInfo>
            </C.AreaCard>  
        </C.Container>
    )

}