
import TodoCard from "./todoCard/todoCard"
import './todoCard/todoCard.css'

function TodoList({ todoList, removeCardList }) {


    return (

        <ul className='list_finance'>

       
            {todoList.length > 0 ? (
                <>
                    {
                        todoList.map((todo, index) => (

                            <TodoCard key={index} todo={todo} removeCardList={removeCardList}/>

                        ))
                    }
                </>


            ) : (

                <h3>Você ainda não possui nenhum lançamento</h3>
                
            )}


       </ul>
    )
}

export default TodoList