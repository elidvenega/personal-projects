import { useState }  from 'react';

interface AddTasksProps {
    dispatch: React.Dispatch<{
        type: "added";
        id: number;
        text: string;
    }>
}

let nextId = 3;

export default function AddTask() {
  return (
    <div>AddTask</div>
  )
}
