
import { useState } from 'react';
import './App.css';
import { Button, ButtonDelete, ButtonEdit } from './components/Button/Button';
import { CheckBox, Input } from './components/Input/Input';
import { TitleDay } from './components/Title/Title';
import { NewTask } from './Modal/NewTask';


const App = () => {

  // const toDoList = [{ nome: "Começar a execução do projeto" }, { nome: "Comer Banana" }, { nome: "Dar oi pra mãe" }];
  const [toDoList, setToDoList] = useState([])
  const [name, setName] = useState('')
  const [isChecked, setIsChecked] = useState(false)


  const CheckedChange = () => {
    setIsChecked(!isChecked);
    handleChange(!isChecked);
  }

  const handleChange = (newChecked) => {

    const novaTarefa = toDoList.map((toDoList) => toDoList.id === newChecked ? { ...toDoList, status: true } : toDoList);

    setToDoList(novaTarefa)
  };

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

            {
              toDoList.map((item) => {
                return (
                  <div className='form-checkBox'>
                    <div className={`line-checkBox ${isChecked ? 'checked' : ''}`}>
                      <CheckBox checked={isChecked} CheckedChange={CheckedChange} handleChange={handleChange} key={item.id} name={`${item.name}`} />
                      <div className='tinyButtons-Box'>
                        <ButtonDelete item={item} toDoList={toDoList} SetToDoList={setToDoList} />
                        <ButtonEdit />
                      </div>
                    </div>
                  </div>
                )
              })

            }


          </div>

          <div className='row-button'>
            <Button onClick={() => setIsModalOpen(true)} textButton={"Nova Tarefa"} />
          </div>

        </section>
      </div>

      <NewTask
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        SetToDoList={setToDoList}
        toDoList={toDoList}
        SetName={setName}
        name={name}
      />


    </>


  );
}

export default App;
