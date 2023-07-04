import { ProductProps } from '../../App'

import logo from '../../logo.svg';
import Product from '../product/Product'

interface ProductListProps {
  isLoading: boolean;
  products: ProductProps[]
}

// const ProductList = ({ isLoading, products }: ProductListProps) => {
  const ProductList = (props: ProductListProps) => {
  return (
    <>
    {props.isLoading ? <img src={logo} className="App-logo" alt="logo" /> : <></>}
    
    {!props.isLoading ? props.products.map(product => {
      return (<Product 
        {...product}
        // name={product.name} 
        // category={product.category} 
        // price={product.price}
        key={product.name}
        />
      )
    }) : <></>}
    </>
  )
}

export default ProductList;