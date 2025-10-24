// export default function ToDo({ task, isDone }) {
//   return <li>Task: {task}</li>;
// }

// export default function ToDo({ task, isDone }) {
//   if (isDone) {
//     return <li>Done: {task} </li>;
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }
export default function ToDo({ task, isDone, time = 0 }) {
  if (isDone) {
    return (
      <li>
        Done: {task} Completed in:{time} minutes.
      </li>
    );
  }
  return <li>To bo Done: {task}.</li>;
}
