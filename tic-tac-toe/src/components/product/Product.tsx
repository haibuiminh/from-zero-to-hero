import { ProductProps } from '../../App';

const Product = (props: ProductProps) => {
  return (
    <div className='flex bg-slate-300 text-green-600 shadow-slate-200 shadow'>
      <div>
        <img src={props.imageUrl} alt="Image avatar" />
      </div>
      <div>
        <div className='mt-4'>{`Name: ${props.name}`}</div>
        <div>{`Category: ${props.category}`}</div>
        <div>{`Price: ${props.price}`}</div>
      </div>      
    </div>
  )
}

export default Product;
