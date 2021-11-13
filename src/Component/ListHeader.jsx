import styles from "./header.module.css"

function ListHeader({title}){
    return (
        <h4 className={styles.header}>{title}</h4>
    )
}

export default ListHeader;