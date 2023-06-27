import React, { useState } from 'react';
import Product from './components/product/Product';
import logo from './logo.svg';
import './App.css';

export interface ProductProps {
  name: string;
  category: string;
  price: number;
}

const productList: ProductProps[] = [
  { name: 'non son', category: 'non', price: 10 },
  { name: 'non son 1', category: 'non', price: 20 },
  { name: 'non son 2', category: 'non', price: 30 },
]

// const Product = (props: ProductProps) => {
//   return (
//     <div>
//       <div>{`Name: ${props.name}`}</div>
//       <div>{`Category: ${props.category}`}</div>
//       <div>{`Price: ${props.price}`}</div>
//     </div>
//   )
// }

// component App -> component Vinh
function App() {
  const [count, setCount] = useState<number>(0);

  const handleOnIncreaseSalaryButtonClick = () => {
    // setCount(count + 10); // --> bad 
    setCount(prev => prev + 10); // best practice 
  }

  return (
    <div className="App">
      <header className="App-header">
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

        {productList.map(product => {
          return (<Product 
            key={product.name}
            name={product.name} 
            category={product.category} 
            price={product.price} />
          )
        })}
        <button onClick={handleOnIncreaseSalaryButtonClick}>Increase Salary</button>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
