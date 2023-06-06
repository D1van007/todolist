import './App.css';
import { Todolist } from './components/Todolist';
import { ITasks } from './types';

export function App() {
  const task1: ITasks[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JavaScript', isDone: true },
    { id: 3, title: 'React', isDone: false },
  ];
  const task2: ITasks[] = [
    { id: 1, title: 'Terminator', isDone: true },
    { id: 2, title: 'Batman', isDone: false },
    { id: 3, title: 'Superman', isDone: true },
  ];

  return (
    <div className="app_container">
      <Todolist title={'What to learn'} tasks={task1} />
      <Todolist title={' Moves'} tasks={task2} />
    </div>
  );
}
