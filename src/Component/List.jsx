import ListHeader from "./ListHeader";
import ListItems from "./ListItems";
import styles from "./List.module.css";

function List(){
    return (
        <>
        <div className={styles.list}>
            <ListHeader title="Shop by Category" />
            <ListItems />
        </div>
        </>
    )
}

export default List;