import { useState } from 'react/cjs/react.development'
import InputCategory from './InputCategory'
import InputTask from './InputTask'
import ToolsPanel from './ToolsPanel'

function CreateCategory({createCategory}) {
  const [category, setCategory] = useState(false)
  const [tasks, setTasks] = useState([])

  const create = () => {
    createCategory({
        id: 1,
        title: category,
        bg_color: "#FFEF73",
        items: tasks
    })
  }

  return (
    <div className="create-category">
      <h2>Создание новой категории</h2>
      <div className="content">
        <InputCategory setCategory={setCategory} />
        {tasks &&
          tasks.map((task, index) => {
            return (
              <div key={task.id} className="new-task">
                <span>{index + 1}. </span>
                <span>{task.value}</span>
              </div>
            )
          })}
        {category && <InputTask setTasks={setTasks} />}
        {(category && tasks && tasks.length >= 1) && (
          <>
          <ToolsPanel />
          <input 
            type={'button'} 
            value={'Создать категорию'} 
            onClick={() => create()}
          />
          </>         
        )}
      </div>
    </div>
  )
}

export default CreateCategory
