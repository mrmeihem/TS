import { APIResponce } from './interface.js'

async function getTodo(id:number): Promise<APIResponce> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (response.status == 200) {
    const todo = await response.json();
    return todo as APIResponce;
  }

  console.log('Something went wrong here');
}

console.log(getTodo(1));

async function fetchTodoList (count:number): Promise<APIResponce[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
  const todos: unknown = await response.json()
  if (todos && Array.isArray(todos)) {
    return todos as APIResponce[]
  }
  console.log('Something went wrong here')
}

console.log(fetchTodoList(5))
