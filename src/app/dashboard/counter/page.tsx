import CartCounter from '@/shopping-cart/components/cartCounter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Counter",
  description: "Counter",
};

const Counter = () => {

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  )
}

export default Counter