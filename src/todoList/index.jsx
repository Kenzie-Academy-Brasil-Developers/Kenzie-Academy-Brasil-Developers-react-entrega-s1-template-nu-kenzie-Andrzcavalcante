
import TodoCard from "./todoCard/todoCard"

function TodoList({ todoList }) {


    return (

        <>

            {todoList.length > 0 ? (
                <>
                    {
                        todoList.map((todo, index) => (

                            <TodoCard key={index} todo={todo}/>

                        ))
                    }
                </>


            ) : (

                <h3>Você ainda não possui nenhum lançamento</h3>
                
            )}


        </>
    )
}

export default TodoList