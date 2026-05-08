import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/action';

export function useAddPlanToCart() {
  const dispatch = useDispatch();
  return (plan) => {
    // You can customize the qty, color, size as needed
    dispatch(addToCart(plan, 1));
  };
}
