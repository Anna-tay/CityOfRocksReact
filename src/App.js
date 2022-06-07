
import {useState} from 'react'
import Header from './conponents/Header'
import Tasks from './conponents/Tasks'

function App() {
  const  [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Original Route',
        day: 'Lost Arrow Spire',
        reminder: true,
    },
    {
        id: 2,
        text: 'Theater of Shadows',
        day: 'Jacksons Thumb',
        reminder: true,
    },
    {
        id: 3,
        text: 'Normas book',
        day: 'Parking lot rock',
        reminder: false,
    },
    {
      id: 4,
      text: 'Bat wing',
      day: 'Parking lot Rock',
      reminder: false,
    },
    {
      id: 5,
      text: 'Wheet thins',
      day: 'Elephant rock',
      reminder: false,
    },
    {
      id: 6,
      text: 'Ryecrisp',
      day: 'Elephant Rock',
      reminder: false,
    },
])

  // del tasks
  const deleteTask =(id) =>{
    setTasks(tasks.filter((task) => task.id !== id))

  }
  // add top routs 
  const toggleReminder =(id) =>{
    console.log(id)
  }

  const name = 'Top Routs at the city of rocks'
  
  return (
    <div className='container'>
      <Header title='Rock CLimbing at the City' />

      {tasks.length > 0 ? (<Tasks tasks={tasks}
       onDelete={deleteTask} 
       toggleReminder={toggleReminder}/>
      ) : ('No routes left')
      }
      
    </div>
  );
}


export default App
