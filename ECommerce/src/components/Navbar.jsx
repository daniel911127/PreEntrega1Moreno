import '../styles/components/NavBar.css'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div className='containerNav'>
      <img src="logo.jpeg" alt="logo" />
      <CartWidget/>
    </div>
  )
}

export default Navbar