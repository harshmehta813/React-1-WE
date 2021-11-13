import styles from "./ListItems.module.css"

function CategoryItem({
    url,
    title
}){
    return (
        <div className={styles.div}>
            <img src={url} alt={title} />
            <div className={styles.label}>
                {title}
            </div>
        </div>
    )
}

export default CategoryItem