'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [tasklist, setTasklist] = useState([
        //{ task: 'learn Html', completed: false },
        //{ task: 'learn Css', completed: false },
        //{ task: 'learn JavaScript', completed: false },
        //{ task: 'learn React', completed: false },
    ]);
    let num = 2635;

    const addNewTodo = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);

            const newTask = {
                task: e.target.value, completed: false
            };
            setTasklist([newTask, ...tasklist]);  //(... its operater to featch the old element in array)

            e.target.value = '';

        }
    }

    const deleteTask = (index) => {
        console.log(index);

        const temp = tasklist;
        temp.splice(index, 1);
        setTasklist([...temp]);
    }

    const updateStatus = (index, value) => {
        //console.log(index, value);
        const temp = tasklist;
        temp[index].completed = value;
        setTasklist([...temp]);



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
                            return <div key={index} className='grid grid-cols-2 p-4 mb-3 border-2 cursor-pointer hover:bg-gray-300'>
                                <div className='flex gap-4 items-center'>
                                    <input type="checkbox" checked={obj.completed} onChange={(e) => { updateStatus(index, e.target.checked) }} />
                                    <p>{obj.task}</p>
                                </div>
                                <button onClick={() => { deleteTask(index) }} className='w-fit ml-auto p-2 bg-red-600 text-white rounded-lg'>delete</button>
                            </div>
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default TodoList;