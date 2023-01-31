import { useState } from "react"


function BoxValue({ todoList, value }) {
    

    console.log(todoList, value)

    return (

        <>

            {
                todoList.length > 0 ? (

                    <>


                        <div className='box_value'>
                            <div>
                                <div className='description_box'>
                                    <h2>Valor total:</h2>
                                    <p>O valor se refere ao saído</p>
                                </div>
                                <div className='total_value'>
                                    <p>$ {value}</p>
                                </div>
                            </div>
                        </div>
                    </>

                    


                ) : ('')
            }



        </>


    )

}

export default BoxValue