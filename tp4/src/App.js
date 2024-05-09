import React, { useState, useEffect } from 'react';
import './App.css'; // Importer le fichier CSS pour appliquer les styles

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    // Filtrer les produits pour exclure celui avec l'ID spécifié
    const updatedProducts = products.filter(product => product.id !== productId);
    // Mettre à jour l'état avec les produits filtrés
    setProducts(updatedProducts);
  };

  return (
    <div className="app-container">
      <h2>Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
