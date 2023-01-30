import TodoList from '../todoList'
import './homepage.css'
import { useState } from "react"
import Form from './formDataHome/formData'
import { v4 as uuidv4} from 'uuid';
import BoxValue from '../boxValue';




function HomePage() {

    const [todoList, setTodoList] = useState([])

    function addCardList (todo){
        const newTodo = {...todo, id: uuidv4()};
       
        setTodoList([...todoList, newTodo])
    }



   
    return (
        <>
            <header>
                <div className='container_header'>
                    <h1>Nu <span>Kenzie</span></h1>
                    <button type="button">Inicio</button>
                </div>
            </header>
            <main className='container_main'>
                <div>
                    <div className='box_finance'>
                        <section className='form_finance'>
                            
                            <Form todoList={todoList}  addCardList={addCardList} />

                        </section>
                        
                            <BoxValue todoList={todoList}  />

                    </div>
                    <section className='summary_finance'>
                        <div>
                            <h2>Resumo financeiro</h2>
                        </div>
                        <ul className='list_finance'>

                            < TodoList todoList={todoList}/>

                        </ul>
                    </section>
                </div>

            </main>

        </>
    )
}

export default HomePage