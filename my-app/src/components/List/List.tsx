import { FC } from 'react';
import { ADataType, ProductsType } from '../../pages';
import { AddProduct, DeleteProducts, GetProducts } from '../../services/API';
import Total from '../Total/Total';
import styles from './List.module.css';

interface PropsType {
  products: ProductsType;
  setProducts: any;
}

const List: FC<PropsType> = ({ products, setProducts }) => {
  const AddHandler = async (product: ADataType) => {
    await AddProduct(product.item_id);
    await GetProducts().then((payload: any) =>
      setProducts(payload.data.data.api_data)
    );
  };

  const DeleteHandler = async (product: ADataType, all: boolean) => {
    await DeleteProducts(product.item_id, all);
    await await GetProducts().then((payload: any) =>
      setProducts(payload.data.data.api_data)
    );
  };

  return (
    <>
      {products.aData?.map((product: ADataType, i: number) => (
        <div key={i} className={styles.product_wrapper}>
          <p className={styles.product}>{product.name}</p>
          <p className={styles.count}>{product.count}</p>
          <button
            onClick={() =>
              product.count === '1'
                ? DeleteHandler(product, true)
                : DeleteHandler(product, false)
            }
            className={styles.delete}
          >
            -
          </button>
          <button onClick={() => AddHandler(product)} className={styles.add}>
            +
          </button>
          <button
            onClick={() => DeleteHandler(product, true)}
            className={styles.delete_all}
          >
            Delete all
          </button>
        </div>
      ))}
      <Total products={products}/>
    </>
  );
};

export default List;
