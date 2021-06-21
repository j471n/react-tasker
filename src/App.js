import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Task from "./components/Task";
import React from "react";
import "./App.css";

function App() {
    var data = JSON.parse(localStorage.getItem("tasker"));

    if (data === null) {
        localStorage.setItem("tasker", JSON.stringify([]));

        data = JSON.parse(localStorage.getItem("tasker"));
    }
    const [tasks, setTasks] = React.useState(data);
    const [taskValue, setTaskValue] = React.useState("");
    var isEmpty = false;

    if (data.length === 0) {
        isEmpty = true;
    }

    function changingValue(e) {
        setTaskValue(e.target.value);
        e.preventDefault();
    }

    function addTask() {
        if (taskValue === "") {
            alert("All Fields Are required.");
        } else {
            let len = data.length;
            let newId = 0;
            if (len === 0) {
                newId = 1;
            } else {
                newId = data[len - 1].id + 1;
            }
            let newTask = {
                id: newId,
                task: taskValue,
            };
            data.push(newTask);
            localStorage.setItem("tasker", JSON.stringify(data));
            setTasks(data);
            setTaskValue("");
        }
    }

    function deleteTask(e, id) {

        const element = e.target;
        
        // Its svg so the user can click on the path tag so it checks that condition
        // if the parent element contain hide class then user clicked the svg otherwise he clicked the path
        if (element.parentElement.classList.contains("task")) {

            element.parentElement.classList.add("hide");
        } else {
            element.parentElement.parentElement.classList.add("hide");
        }

        // Setting timeout to delay in deleting the element and delay == animation duration of class "hide"
        setTimeout(() => {
            const newTasks = tasks.filter((task) => task.id !== id);
            localStorage.setItem("tasker", JSON.stringify(newTasks));
            setTasks(newTasks);

            if (newTasks.length === 0) {
                isEmpty = true;
            }
        }, 1000);
    }

    return (
        <React.Fragment>
            <Navbar />
            <section className="container">
                <div className="input__tasks">
                    <input
                        className="input__field"
                        type="text"
                        placeholder="New Task"
                        value={taskValue}
                        onChange={changingValue}
                    />
                    <button className="btn add" type="submit" onClick={addTask}>
                        Add
                    </button>
                </div>

                <div className="tasks">
                    {tasks.map((note) => {
                        return (
                            <Task
                                key={note.id}
                                id={note.id}
                                task={note.task}
                                deleteTask={deleteTask}
                            ></Task>
                        );
                    })}
                </div>
            </section>
            {isEmpty && <h1 className="empty">No Tasks</h1>}
            <Footer />
        </React.Fragment>
    );
}

export default App;
