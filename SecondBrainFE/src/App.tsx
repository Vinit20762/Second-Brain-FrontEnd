import './App.css'
import { Button } from './Components/Button'
import { Card } from './Components/Card'
import { PlusIcon } from './icons/Plus'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return <div>
      <Button variant='primary' text='Add Brain' startIcon={<PlusIcon/>}/>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}/>
      <Card />
     </div>
}

export default App
