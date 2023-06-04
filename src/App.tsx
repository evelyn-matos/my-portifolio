import { SidebarLeft } from "./components/SidebarLeft";
import { MenuNav } from "./components/MenuNav";
import { Home } from './pages/home';
import { Sobre } from "./pages/sobre";
import { Study } from './pages/study';
import { Skills} from './pages/skills'
import { Projetos } from './pages/projetos'
import { Contato } from './pages/contato'


import * as C from "./stylesApp"




function App() {

  
  
  return (
    <C.mainContainer>
      <SidebarLeft/>
      <C.InfosArea >
        <Home />
        <Sobre />
        <Study/>
        <Skills/>
        <Projetos/>
        <Contato/>
      </C.InfosArea>
      <MenuNav/>
    </C.mainContainer>
  )
}

export default App
