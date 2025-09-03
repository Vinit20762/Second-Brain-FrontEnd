import './App.css'
import { Button } from './Components/Button'
import { Card } from './Components/Card'
import { CreateContentModal } from './Components/CreateContentModal'
import { PlusIcon } from './icons/Plus'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return <div>
      <CreateContentModal open={true} />
      <Button variant='primary' text='Add Brain' startIcon={<PlusIcon/>}/>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}/>
      <Card type="youtube" title="RMA Favs" link="https://www.youtube.com/watch?v=ZvjT9zY6_EI" />
      <Card type="twitter" title="First Tweet" link="https://x.com/rajscriptsX/status/1962749759502053626"/>
      <Card type="document" title="First PDF" link="https://www.drishtiias.com/images/pdf/NCERT-Class-10-Science.pdf"/>
      <Card type="github" title="Github Profile" link="https://github.com/blackmamba1231"/>
      <Card type="github" title="Repo" link="https://github.com/Vinit20762/100xDevs-Cohort3-WebDev-and-Devops"/>
     </div>
}

export default App
