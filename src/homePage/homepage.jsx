import TodoList from '../todoList'
import './homepage.css'
import { useDebugValue, useState } from "react"
import Form from './formDataHome/formData'
import { v4 as uuidv4 } from 'uuid';
import BoxValue from '../boxValue';
import { useEffect } from 'react';




function HomePage( {handleClick}) {

    const [todoList, setTodoList] = useState([])
    const [value, setValue] = useState(0)

    function addCardList(todo) {
        const newTodo = { ...todo, id: uuidv4() };

        setTodoList([...todoList, newTodo])
    }

    function removeCardList(id){
        
        const todoFilter = todoList.filter((todo)=>{
            return todo.id !== id 
        })

        setTodoList(todoFilter)
    }



    useEffect(() => {

        function updateValue() {

            const todosValue = todoList.map(todo => {
    
                const valueFloat = parseFloat(todo.value)
                return valueFloat
    
            })

            console.log('todosValue',todosValue)
          
    
            const sumValue = todosValue.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0)
            
            console.log('sumValue', sumValue)
    
            setValue(sumValue)
    
        }

        updateValue()

    }, [todoList])

    




    return (
        <>
            <header>
                <div className='container_header'>
                    <h1>Nu <span>Kenzie</span></h1>
                    <button type="button" onClick={handleClick}>Inicio</button>
                </div>
            </header>
            <main className='container_main'>
                <div>
                    <div className='box_finance'>
                        <section className='form_finance'>

                            <Form todoList={todoList} addCardList={addCardList} />

                        </section>

                        <BoxValue value={value} todoList={todoList} />

                    </div>
                    <section className='summary_finance'>
                        <div>
                            <h2>Resumo financeiro</h2>
                        </div>


                        < TodoList todoList={todoList} removeCardList={removeCardList} />


                    </section>
                </div>

            </main>

        </>
    )
}

export default HomePage