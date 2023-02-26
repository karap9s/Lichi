import styles from './Add.module.css';
import AddButton from '../AddButton/AddButton';

const Add: React.FC<any> = ({ setProducts }) => {
  const IdArray = [94668, 88669];

  return (
    <div className={styles.add_wrapper}>
      {IdArray.map((id, index) => (
        <AddButton id={id} key={`${id}-${index}`} setProducts={setProducts} />
      ))}
    </div>
  );
};

export default Add;
