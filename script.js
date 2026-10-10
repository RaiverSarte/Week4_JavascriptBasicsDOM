// TASK 1: DYNAMIC HEADER UPDATE

function updateTitle() {

    let now = new Date();

    let timeString = now.toLocaleTimeString();

    document.getElementById("heading").innerText =
        `Current Time: ${timeString}`;
}

updateTitle();

setInterval(updateTitle, 1000);

// TASK 2: DARK/LIGHT MODE

let themeButton = document.getElementById("themeToggle");


// Apply saved theme when page loads

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

}


// Switch theme

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

});


// TASK 3: DYNAMIC TO-DO LIST

document.getElementById("addTask").addEventListener(
    "click",
    function () {

        let taskInput =
            document.getElementById("taskInput");

        let taskText = taskInput.value;


        // Do not add empty tasks

        if (taskText.trim() === "") {

            return;

        }


        // Create new task

        let newTask =
            document.createElement("li");


        newTask.innerHTML =
            `${taskText} <button class="removeTask">Remove</button>`;


        // Add task to the list

        document.getElementById("taskList")
            .appendChild(newTask);


        // Clear input

        taskInput.value = "";

    }
);

// Remove task

document.getElementById("taskList").addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains("removeTask")
        ) {

            event.target.parentElement.remove();

        }

    }
);

// TASK 4: KEYBOARD EVENT

document.addEventListener("keydown", function (event) {

    if (event.key.toLowerCase() === "b") {

        document.body.style.backgroundColor = "blue";

    }

});