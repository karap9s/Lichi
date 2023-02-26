import { FC } from "react";
import { ProductsType } from "../../pages";
import styles from "./Total.module.css";

interface PropsType {
  products: ProductsType;
}

const Total: FC<PropsType> = ({ products }) => {
  return (
    <div className={styles.total}>
      <p className={styles.total_count}>Count: {products.iCount}</p>
      <p className={styles.total_summary}>
        Total summary: {products.iSummaryPrice} ₽
      </p>
    </div>
  );
};

export default Total;