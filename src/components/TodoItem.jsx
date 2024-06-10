import styles from "./todoitem.module.css"

export default function TodoItem({item, todos, setTodos}) {


    // to delete task which is completed
    function handleDelete(item) {
        console.log("Delete Button Clicked for item", item);
        setTodos(todos.filter((todo) => todo !== item  ));
    }

    // Marking Todo Items As Complete functionality
    function handleClick(name) {
        // const newArray = todos.map((todo) => 
        //     todo.name === name ? {...todo, done:!todo.done} : todo );
        // setTodos(newArray);


        // or we can write as 

        setTodos(todos.map((todo) => 
            todo.name === name ? {...todo, done:!todo.done} : todo ));
    }

    const className = item.done ? styles.completed : "";

    return (
        <div className={styles.item}>

            <div className={styles.itemName}>


                <span
                    className={className}
                    onClick={() => handleClick(item.name)}
                >

                    {item.name}

                </span>

                <span> 

                    <button 
                        onClick = {() =>handleDelete(item)} 
                        className={styles.deleteButton}
                    >
                    
                        x

                    </button>

                </span>

            </div>


            <hr className={styles.line}/>

        </div>
    );
}