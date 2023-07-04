import { useEffect, useState } from 'react';

import './App.css';
import ProductList from './components/product-list/ProductList'

export interface ProductProps {
  id?: string;
  name: string;
  imageUrl: string;
  category: string;
  price: number;
}

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5BiGuYkM_No-bWL2Lj_AWEFwZa7mn5rrgnI7AWM&s';

const productList: ProductProps[] = [
  { name: 'non son', category: 'non', price: 10, imageUrl },
  { name: 'non son 1', category: 'non', price: 20, imageUrl },
  { name: 'non son 2', category: 'non', price: 30, imageUrl },
]

const getProductList = (data: ProductProps[], delay: number): Promise<ProductProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

// component App -> component Vinh
function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    setIsLoading(true);

    getProductList(productList, 1000)
    .then(res => {
      console.log('this is resp', res);
      setProducts(res);
    })
    .catch(e => {
      console.log('exception', e);
      setProducts([]);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, [count])

  const handleOnIncreaseSalaryButtonClick = () => {
    // setCount(count + 10); // --> bad 
    setCount(prev => prev + 10); // best practice 
  }

  return (
    <div className="App">
      <main className="App-header">
        <div>My Shop </div>
        <div>{count}</div>
        <h1>{`Current Salary: ${count} $`}</h1>
        {/* <div>{productList[0].name}</div>
        {productList.map(product => {
          return (<div>
            <div>{`Name: ${product.name}`}</div>
            <div>{`Category: ${product.category}`}</div>
            <div>{`Price: ${product.price}`}</div>
          </div>)
        })} */}
        <ProductList isLoading={isLoading} products={products} />
        <button onClick={handleOnIncreaseSalaryButtonClick}>Increase Salary</button>
      </main>
    </div>
  );
}

export default App;
