import React, { useState } from 'react';
import './App.css';

const Product = ({ product, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
  };

  return (
    <div className="p1">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Prix: {product.price} DH</p>
      {addedToCart ? (
        <p>Ajouté au panier</p>
      ) : (
        <button onClick={handleAddToCart}>Ajouter au panier</button>
      )}
    </div>
  );
};

const Products = ({ products, addToCart }) => {
  return (
    <div className="p2">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" id='Search' placeholder="Rechercher par titre..." onChange={e => handleSearch(e.target.value)} />
    </div>
  );
};

const productsData = [ 
  { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', thumbnail : 'HP16D0195NF.jpg' }, 
  { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', thumbnail : 'HP14424U3EA.jpg' }, 
  { id: 3, title: 'Pc Portable Chromebook Acer', price: '3640 DH', thumbnail: 'NXATHEF002.jpg' }, 
  { id: 4, title: 'PC Portable - HUAWEI', price: '1270 DH', thumbnail: 'HUA6901443442959.jpg' }, 
];

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = product => {
    setCart([...cart, product]);
  };

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <Products products={filteredProducts} addToCart={addToCart} />
      <p id='pf'>Nombre de produits dans le panier : {cart.length}</p>
    </div>
  );
}

export default App;
