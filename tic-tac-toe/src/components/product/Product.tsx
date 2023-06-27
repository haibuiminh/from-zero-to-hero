import { ProductProps } from '../../App';
import './Product.css';

const Product = (props: ProductProps) => {
  return (
    <div className='product'>
      <div>{`Name: ${props.name}`}</div>
      <div>{`Category: ${props.category}`}</div>
      <div>{`Price: ${props.price}`}</div>
    </div>
  )
}

export default Product;
