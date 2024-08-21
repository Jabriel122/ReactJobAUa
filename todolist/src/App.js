
import { useState } from 'react';
import './App.css';
import { Button, ButtonDelete, ButtonEdit } from './components/Button/Button';
import { CheckBox, Input } from './components/Input/Input';
import {TitleDay} from './components/Title/Title';
import { NewTask } from './Modal/NewTask';


const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <div className='container-app'>
        <section>
          <div className='todolist-box'>
            <div className='top-box'>
              <TitleDay />
              <Input placeholder="Pesquise Tarefas" />
            </div>


            <form className='form-checkBox'>
              <div className='line-checkBox'>
                <CheckBox />
                <div className='tinyButtons-Box'>
                  <ButtonDelete />
                  <ButtonEdit />
                </div>
              </div>
            </form>

          </div>

          <div className='row-button'>
            <Button onClick={() => setIsModalOpen(true)} textButton={"Nova Tarefa"} />
          </div>
          
        </section>
      </div>

      <NewTask isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      

    </>


  );
}

export default App;
