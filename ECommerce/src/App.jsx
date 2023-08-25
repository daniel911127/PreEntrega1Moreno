import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
const texto='INICIO';
  return (
    <div className='container'>
      <Navbar/>
      <ItemListContainer greeting={texto}/>
    </div>
  )
}

export default App
