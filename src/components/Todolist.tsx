import { ITasks } from '../types';
import style from './Todolist.module.css'

type PropsType = {
  title: string;
  tasks: Array<ITasks>;
};

export function Todolist({ title, tasks }: PropsType) {


  return (
    <div>
      <h3>{title}</h3>
      <input type="text" />
      <button>+</button>
      <ul>
        {tasks.map((task) => (
          <li className={style.task_item}>
            <input
              type="checkbox"
              name=""
              id={String(task.id)}
              checked={task.isDone}
            />
            <span>{task.title}</span>
            <button>X</button>
          </li>
        ))}
      </ul>
      <div className={style.footer_btn}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
