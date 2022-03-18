import React from 'react';
import styles from './TodoList.css'
function TodoList(){
    return(
        <div className="todoList" >
            <ul style={styles.ul}>
                <li style={styles.li}>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>  
    )
}


export default TodoList