import { useState } from 'react';

import SubmitButton from '../UI/Button/SubmitButton';
import classes from './TasksInput.module.css';

const TasksInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [fullfilled, setIsFullfilled] = useState(true);

  const inputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsFullfilled(true);
    }
    setEnteredValue(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsFullfilled(false);
      return;
    }
    props.onAddTask(enteredValue);
    setEnteredValue("")
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${classes['form-control']} ${!fullfilled && classes['not-fullfilled']}`}
      >
        <label><h2>Post a Task</h2></label>
        <input type="text" onChange={inputChangeHandler} value={enteredValue}/>
      </div>
      <SubmitButton type="submit">Save</SubmitButton>
    </form>
  );
};

export default TasksInput;
