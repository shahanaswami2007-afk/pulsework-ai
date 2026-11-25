import { useState } from 'react'
import './App.css'
import Button from './components/ui/Button'
import Card from './components/ui/Card'

const startingTasks = [
  { id: 1, name: 'Design the dashboard', status: 'In Progress' },
  { id: 2, name: 'Prepare project presentation', status: 'Pending' },
  { id: 3, name: 'Review team updates', status: 'Completed' },
]

function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [tasks, setTasks] = useState(startingTasks)
  const [newTask, setNewTask] = useState('')

  function addTask() {
    if (newTask.trim() === '') return

    const task = {
      id: Date.now(),
      name: newTask,
      status: 'Pending',
    }

    setTasks([...tasks, task])
    setNewTask('')
  }

  function changeStatus(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: task.status === 'Completed' ? 'Pending' : 'Completed' }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">PulseWork<span> AI</span></h2>
        <p className="menu-title">MENU</p>
        {['Dashboard', 'Projects', 'My Tasks', 'Team', 'Settings'].map((item) => (
          <button
            key={item}
            className={activePage === item ? 'menu-item active' : 'menu-item'}
            onClick={() => setActivePage(item)}
          >
            {item}
          </button>
        ))}
        <div className="sidebar-user">
          <div className="user-circle">S</div>
          <div><strong>Shahana S</strong><small>Student</small></div>
        </div>
      </aside>

      <main className="main-content">
        <nav className="navbar">
          <h3>{activePage}</h3>
          <div className="nav-right">
            <span>Welcome back!</span>
            <div className="user-circle">S</div>
          </div>
        </nav>

        <section className="page">
          <div className="page-heading">
            <div>
              <p className="small-heading">YOUR WORKSPACE</p>
              <h1>{activePage === 'Dashboard' ? 'Dashboard Overview' : activePage}</h1>
              <p className="description">Manage your work and keep track of your progress.</p>
            </div>
            <Button onClick={() => document.getElementById('task-input').focus()}>+ Add Task</Button>
          </div>

          <div className="stats">
            <div className="stat-card">
              <p>Total Projects</p><h2>08</h2><span>Projects in workspace</span>
            </div>
            <div className="stat-card">
              <p>Total Tasks</p><h2>{tasks.length}</h2><span>Tasks created</span>
            </div>
            <div className="stat-card">
              <p>Completed Tasks</p><h2>{tasks.filter((task) => task.status === 'Completed').length}</h2><span>Tasks finished</span>
            </div>
            <div className="stat-card">
              <p>Team Members</p><h2>05</h2><span>People in your team</span>
            </div>
          </div>

          <div className="content-grid">
            <Card className="projects-panel">
              <div className="panel-heading">
                <div><h2>My Projects</h2><p>Check your project progress</p></div>
                <button className="text-button" onClick={() => setActivePage('Projects')}>View all</button>
              </div>
              <div className="project-item">
                <div className="project-icon purple">P</div>
                <div className="project-info"><strong>PulseWork AI</strong><span>Dashboard development</span><div className="progress"><div style={{ width: '75%' }} /></div></div>
                <b>75%</b>
              </div>
              <div className="project-item">
                <div className="project-icon blue">W</div>
                <div className="project-info"><strong>Website Design</strong><span>College project</span><div className="progress"><div style={{ width: '50%' }} /></div></div>
                <b>50%</b>
              </div>
              <div className="project-item">
                <div className="project-icon orange">M</div>
                <div className="project-info"><strong>Mobile App</strong><span>UI planning</span><div className="progress"><div style={{ width: '30%' }} /></div></div>
                <b>30%</b>
              </div>
            </Card>

            <Card className="tasks-panel">
              <div className="panel-heading">
                <div><h2>My Tasks</h2><p>Add and update your tasks</p></div>
              </div>
              <div className="add-task">
                <input
                  id="task-input"
                  value={newTask}
                  onChange={(event) => setNewTask(event.target.value)}
                  onKeyDown={(event) => event.key === 'Enter' && addTask()}
                  placeholder="Enter a new task"
                />
                <button onClick={addTask}>Add</button>
              </div>
              <div className="task-list">
                {tasks.map((task) => (
                  <div className="task-row" key={task.id}>
                    <div><strong>{task.name}</strong><span className={task.status === 'Completed' ? 'status done' : 'status'}>{task.status}</span></div>
                    <button className="complete-button" onClick={() => changeStatus(task.id)}>
                      {task.status === 'Completed' ? 'Undo' : 'Complete'}
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="activity-panel">
            <div className="panel-heading"><div><h2>Recent Activity</h2><p>Latest updates from your workspace</p></div></div>
            <div className="activity-row"><span className="activity-dot" />You created a new workspace <small>Today</small></div>
            <div className="activity-row"><span className="activity-dot blue-dot" />PulseWork AI project was updated <small>Yesterday</small></div>
            <div className="activity-row"><span className="activity-dot green-dot" />A task was marked as completed <small>Yesterday</small></div>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App
