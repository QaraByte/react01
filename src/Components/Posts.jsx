import styles from '../css/Posts.module.css';

let Post=(props)=>{

    return <div className={styles.post}>
        {props.message}
    </div>
}

let Posts=(props)=>{
    return <div className='posts'>
        <div className={styles.postItems}>
            <Post message="My first post"/>
            <Post message="prosto post"/>
        </div>
    </div>
}

export default Posts;