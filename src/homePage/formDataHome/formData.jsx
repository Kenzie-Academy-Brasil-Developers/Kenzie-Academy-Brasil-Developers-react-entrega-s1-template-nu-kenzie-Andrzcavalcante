import React from "react"
import { useState } from "react"



function Form({todoList,  addCardList, updateValue}) {

    const [formData, setFormData] = useState({
        description: '',
        value: '',
        type_value: '',
    })

    function handleSubmit(event){
        event.preventDefault();
        addCardList(formData)
    }


    return (

        <div>
            <label htmlFor="description">Descrição</label>
            <input type="text" name='description' placeholder='Digite aqui sua descrição' onChange={(event) => setFormData({...formData, description: event.target.value})} />
            <p>Ex: Compra de roupas</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='add_value'>
                        <label htmlFor="value">Valor</label>
                        <span>
                            <input type="text" name='value' onChange={(event) => setFormData({...formData, value: event.target.value})}/>
                            <p>R$</p>
                        </span>
                    </div>
                    <div className='add_type_value'>
                        <label htmlFor="type_value">Tipo de valor</label>
                        <select name="type_value" onChange={(event) => setFormData({...formData, type_value: event.target.value})}>
                            <option value="entrada">Entrada</option>
                            <option value="despesas">Despesa</option>
                        </select>
                    </div>

                </div>
                <button type='submit'>Inserir valor</button>
            </form>
        </div>

    )
}

export default Form