import * as C from './styles'

import { PropsSkill } from '../../../types/type'




export const SkillCardItem = ({title, tecnologias}:PropsSkill) => {

 

    return(

        <C.Container>
            <C.CardItem>
                <C.Title>{title}</C.Title>

                {tecnologias.map((item)=>(
                    <C.InfoArea>
                        <C.tecnologiasArea>
                            <C.tecnologiaItem>
                                <img src={item.icone} alt="" />
                                <span>{item.name}</span>  
                            </C.tecnologiaItem>
                        </C.tecnologiasArea>
                    </C.InfoArea>
                ))}
            </C.CardItem>
        </C.Container>
    )
}