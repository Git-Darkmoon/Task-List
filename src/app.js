// window.addEventListener("load", () => {
const form = document.getElementById("new-task-form")
const input = document.getElementById("new-task-input")
const list_el = document.getElementById("tasks")
// })

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const task = input.value

  if (!task) {
    alert("Please fill out the task")
    return
  }

  const task_el = document.createElement("div")
  task_el.classList.add("task")

  const task__content_el = document.createElement("div")
  task__content_el.classList.add("content")

  task_el.appendChild(task__content_el)

  const task__input_el = document.createElement("input")
  task__input_el.classList.add("text")
  task__input_el.type = "text"
  task__input_el.value = task
  task__input_el.setAttribute("readonly", "readonly")

  task__content_el.appendChild(task__input_el)

  const task__actions_el = document.createElement("div")
  task__actions_el.classList.add("actions")

  const task__edit_btn = document.createElement("button")
  task__edit_btn.classList.add("edit")
  task__edit_btn.innerHTML = "Edit"

  const task__delete_btn = document.createElement("button")
  task__delete_btn.classList.add("delete")
  task__delete_btn.innerHTML = "Delete"

  task__actions_el.appendChild(task__edit_btn)
  task__actions_el.appendChild(task__delete_btn)

  task_el.appendChild(task__actions_el)

  list_el.appendChild(task_el)

  input.value = ""

  task__edit_btn.addEventListener("click", () => {
    if (task__edit_btn.innerText.toLowerCase() == "edit") {
      task__input_el.removeAttribute("readonly")
      task__input_el.focus()
      task__edit_btn.innerText = "Save"
    } else {
      task__input_el.setAttribute("readonly", "readonly")
      task__edit_btn.innerText = "Edit"
    }
  })

  task__delete_btn.addEventListener("click", () => {
    list_el.removeChild(task_el)
  })
})
