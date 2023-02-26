import { FC } from 'react';
import { ProductsType } from '../../pages';
import Empty from '../Empty';
import List from '../List';
import styles from './Cart.module.css';

interface PropsType {
  products: ProductsType;
  setProducts: any;
}

const Cart: FC<PropsType> = ({ products, setProducts }) => {
  return (
    <>
      <h2 className={styles.cart}>Моя корзина</h2>
      <div className={styles.hr}></div>
      {(products.iCount === 0 || Object.keys(products).length === 0) && <Empty />}
      {products.iCount > 0 && (
        <List products={products} setProducts={setProducts} />
      )}
    </>
  );
};

export default Cart;
