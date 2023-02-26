import { AddProduct, GetProducts } from '@/services/API';
import { FC } from 'react';
import styles from './AddButton.module.css';

interface PropsType {
  id: number;
  setProducts: any;
}

const AddButton: FC<PropsType> = ({ id, setProducts }) => {
  return (
    <button
      onClick={async () => {
        await AddProduct(id).then((data: any) => console.log('add', data));
        await GetProducts()
          .then((payload: any) => setProducts(payload.data.data.api_data));
      }}
      className={styles.add}
    >
      Add {id}
    </button>
  );
};

export default AddButton;
