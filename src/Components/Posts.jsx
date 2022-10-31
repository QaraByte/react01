import styles from '../css/Posts.module.css';

let Posts=(props)=>{
    return <div>
        <div className={styles.post}>{props.message}</div>
    </div>
}

export default Posts;