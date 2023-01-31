
import Delete from '../../assets/delete.svg'
import './todoCard.css'

function TodoCard({ todo, removeCardList }) {


    return (

        <li className={todo.type_value === 'entrada' ? 'list_item__entry' : 'list_item__checkout'}>

            <div className='header_item'>
                <h2>{todo.description}</h2>
                <p>{todo.type_value}</p>
            </div>
            <div className='value_item'>
                <p>R$ {todo.value}</p>
                <img src={Delete} alt="" onClick={()=>removeCardList(todo.id)} />
            </div>
        </li>


    )


}

export default TodoCard