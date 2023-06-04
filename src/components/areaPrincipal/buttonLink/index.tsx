
import * as C from './styles'

type Props = {
    data: string
    children: string
}

export const ButtonLink = ({data, children}:Props) => {
    return(
        <C.container href={data} target='_blank' >
            {children}
        </C.container>
            
    
    )
}