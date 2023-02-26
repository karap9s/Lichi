import styles from './Empty.module.css';

const Empty: React.FC = () => {
  return (
    <p className={styles.text}>
      Наполните корзину вещами, о которых давно мечтали...
    </p>
  );
};

export default Empty;
