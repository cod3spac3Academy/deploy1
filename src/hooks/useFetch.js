import { useState } from 'react';

const useFetch = () => {
  const [tasks, setNewTask] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);


  const fetchTasksHandler = async (method = 'GET', task = { id: '', text: '' }) => {
    try {
      setPending(true);
      setError(null);
      let response = null;
      const URL = 'https://task-list-930b3-default-rtdb.europe-west1.firebasedatabase.app/';

      if (method === 'DELETE') {
        response = await fetch(URL + '/tasks/' + task.id + '.json', { method });
      } else if (method === 'PATCH') {
        response = await fetch(URL + '/tasks/' + task.id + '.json',
          {
            method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: task.text })
          }
        );
      } else {
        response = await fetch(URL + '/tasks.json',
          {
            method,
            headers: {
              'Content-Type': method !== 'GET' ? 'application/json' : ''
            },
            body: method !== 'GET' ? JSON.stringify({ title: task.text }) : null
          }
        );
      }

      if (response.ok) {
        const data = await response.json();
        if (method === 'GET') {
          setNewTask(data);
        } else {
          fetchTasksHandler();
        }
      }

    } catch (error) {
      setError({
        message: error.message || 'Something went wrong!'
      });
    }
    setPending(false);
  };

  return (
    { pending, error, tasks, fetchTasksHandler }
  );
}

export default useFetch;