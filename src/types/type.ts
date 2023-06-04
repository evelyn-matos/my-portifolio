

interface Tecnologias {
    name: string, icone: string
}

export type PropsCard = {
    title: string,
    desc: string,
    img: string,
    github: string,
    link: string,
    tecnologias: Array<Tecnologias>
     
}



export type PropsSkill = {
    title: string,
    tecnologias: Array<Tecnologias>
}