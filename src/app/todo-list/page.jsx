'use client';
import React, { useState } from 'react'

const TodoList = () => {

const [tasklist, setTasklist] = useState([
    {task :'learn Html',completed:false },
    {task :'learn Css',completed:false },
    {task :'learn JavaScript',completed:false },
    {task :'learn React',completed:false },
    
    
]);


    const addNewTodo = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);

            

            e.target.value = '';

        }
    }

    return (
        <div className='mx-64'>
            <h1 className='text-3xl font-bold text-center my-5'>Todo List</h1>
            <div className='border-2 shadow-lg rounded-lg p-5'>
                <input
                    onKeyDown={addNewTodo}
                    type="text"
                    className='w-full border border-blue-500 px-4 py-2 rounded-md'
                    placeholder='Add a New ToDo ' />

            </div>

        </div>
    )
}

export default TodoList;