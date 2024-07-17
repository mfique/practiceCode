import React from "react";
import fique from "./main";
function Todo(props) {
  const currentDate = new Date(). toDateString();
  const taskTitle = props.title;
  const taskStarDate = new Date(props.start).toDateString();
  const TaskEndDate = new Date(props.end).toDateString();
  const numberPersonnel = props.personnel;
  const isToolLate = taskStarDate < currentDate;


return (
  <div>
    <h1>
      Tasks
    </h1>
    <ol>
      <li>Tak title: <fique taskTitle/></li>
      <li>Task Start: <fique taskStarDate/></li>
      <li>Task end:<fique TaskEndDate/></li>
      <li>Number Personnel:<fique numberPersonnel/></li>
    </ol>
    {isToolLate ? (<p> This task was started.</p>) : (<p>This task wasn't yet finished</p>)}
  </div>
);
}
export default Todo;
