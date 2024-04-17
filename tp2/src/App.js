import './App.css';

const Product = ({ product }) => {
  const addToCart = () => {
    // Logique pour ajouter le produit au panier
    console.log(`Ajouter au panier: ${product.title}`);
  };

  return (
    <div className="p1">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Prix: {product.price} DH</p>
      <button onClick={addToCart}>Ajouter au panier</button>
    </div>
  );
};

const Products = ({ products }) => {
  return (
    <div className="p2">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const products = [ 
  { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', thumbnail : 'HP16D0195NF.jpg' }, 
  { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', thumbnail : 'HP14424U3EA.jpg' }, 
  { id: 3, title: 'Pc Portable Chromebook Acer', price: '3640 DH', thumbnail: 'NXATHEF002.jpg' }, 
  { id: 4, title: 'PC Portable - HUAWEI', price: '1270 DH', thumbnail: 'HUA6901443442959.jpg' }, 
];

function App() {
  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;
