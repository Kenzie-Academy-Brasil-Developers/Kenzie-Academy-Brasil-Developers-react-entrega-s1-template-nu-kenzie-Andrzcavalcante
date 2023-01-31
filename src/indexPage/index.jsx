import Img from '../image.svg';
import './indexPage.css'

function IndexPage({handleClick}){


    return(
       <main className='main_index_page'>
         <div className='container'>
            <div className='header'>
                <h1>Nu <span className='span_index'>Kenzie</span></h1>
                <p>Centralize o controle das suas finanças</p>
                <span className='span_index'>de forma rápida e segura</span>
                <button type="button" onClick={handleClick}>Iniciar</button>
            </div>
            <div>
                <img className='image_index' src={Img} alt="" />
            </div>
        </div>
       </main>
    )

}

export default IndexPage