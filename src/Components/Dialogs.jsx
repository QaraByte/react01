import { NavLink } from 'react-router-dom';
import styles from '../css/Dialogs.module.css';

const Dialog=(props)=>{

    let path="/dialogs/"+props.id;

    return(
        <div>
            <NavLink to={path} className={styles.dialog+' '+styles.active}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem=(props)=>{
    return (
        <div className={styles.message}>
            {props.text}
        </div>
    )
}

let Dialogs=(props)=>{

let dialogs=[
    { id:1,name:"Akimzhan"},
    { id:2,name:"Sayran"},
    { id:3,name:"Adeliya"},
    { id:4,name:"Zaure"},
    { id:5,name:"Arlan"}
];

let dialogElements=dialogs.map(d=><Dialog name={d.name} id={d.id}/>);

let messages=[
    { id:1,text:"Hi!"},
    { id:2,text:"How are you"},
    { id:3,text:"Jaksy"},
    { id:4,text:"Ozin"}
];

let messageElements=messages.map(m=><MessageItem text={m.text} id={m.id}/>)

    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;