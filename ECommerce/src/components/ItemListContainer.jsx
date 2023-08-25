import '../styles/components/ItemListContainer.css'


function ItemListContainer({greeting}) {
  return (
    <div>
      <ul className="containerList">
        <li>{greeting}</li>
        <li>PRODUCTOS</li>
        <li>CONTACTANOS</li>
      </ul>
    </div>
  )
}

export default ItemListContainer