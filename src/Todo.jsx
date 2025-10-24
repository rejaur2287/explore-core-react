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
// export default function ToDo({ task, isDone, time = 0 }) {
//   if (isDone) {
//     return (
//       <li>
//         Done: {task} Completed in:{time} minutes.
//       </li>
//     );
//   }
//   return <li>To bo Done: {task}.</li>;
// }

// conditional rendering option 3 ternary operator
// condition ? true : false

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>
//       Done: {task} Completed in:{time} minutes.
//     </li>
//   ) : (
//     <li>To bo Done: {task}.</li>
//   );
// }

// conditional rendering 4 &&
// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone && (
//       <li>
//         Done Task: {task} time: {time}
//       </li>
//     )
//   );
// }

// conditional rendering 4 ||
// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone || (
//       <li>
//         Not Done Task: {task} time: {time}
//       </li>
//     )
//   );
// }

// conditional rendering 5 null
// export default function ToDo({ task, isDone }) {
//   if (isDone) {
//     return null;
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

// conditional rendering 6 use variable
export default function ToDo({ task, isDone, time }) {
  const displayTime = time ? time : 100;
  let listItem;

  if (isDone) {
    listItem = (
      <li>
        Done: {task} {displayTime}
      </li>
    );
  } else {
    listItem = <li>Pending: {task}</li>;
  }
  return listItem;
}
