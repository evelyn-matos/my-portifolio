import * as C from './styles'


type props = {
    name: string
    icon: any
}

export const TagComponent = ({name, icon}:props) => {
    return (
        <C.container>
            <C.IconeArea>
                {icon}
            </C.IconeArea>
            <C.NameArea>
                {name}
            </C.NameArea>
        </C.container>
    )
}