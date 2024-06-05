'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [tasklist, setTasklist] = useState([
        { task: 'learn Html', completed: false },
        { task: 'learn Css', completed: false },
        { task: 'learn JavaScript', completed: false },
        { task: 'learn React', completed: false },


    ]);
    let num = 2635;

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


                <div>
                    {
                        tasklist.map((obj, index) => {
                            return <div key={index} className='p-4 mb-3 border-2 cursor-pointer hover:bg-gray-300'>
                                <div className='flex gap-4'> 
                                    <input type="checkbox" />
                                    <p>{obj.task}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default TodoList;