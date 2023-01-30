
import Delete from '../../assets/delete.svg'

function TodoCard({todo}) {

    <>
        {
            todo.type_value === 'entrada' ? (
                <li className='list_item__entry'>
                    <div className='header_item'>
                        <h2>{todo.description}</h2>
                        <p>{todo.type_value}</p>
                    </div>
                    <div className='value_item'>
                        <p>R$ {todo.value}</p>
                        <img src={Delete} alt="" />
                    </div>
                </li>

            ) : (

                <li className='list_item__ckeckout'>
                    <div className='header_item'>
                        <h2>{todo.description}</h2>
                        <p>{todo.type_value}</p>
                    </div>
                    <div className='value_item'>
                        <p>R$ {todo.value}</p>
                        <img src={Delete} alt="" />
                    </div>
                </li>
            )}
    </>


}

export default TodoCard