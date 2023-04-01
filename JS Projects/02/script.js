const taskItem = (task) => `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    ${task}
    <span class="badge rounded-pill"><button type="button" class="btn-close remove-item"></button></span>
    </li>`;
const addItemInput = document.getElementById('addItemInput');
const addItemBtn = document.getElementById('button-addon2');
const newTaskDiv = document.getElementById('newTaskDiv');
const tasksList = document.getElementById('tasksList');
const removeItemBtn = document.getElementsByClassName('remove-item');
const ifEmptyToast = (toastMsg) => {
    const toastElement = document.querySelector('#toast');
    const toastBody = toastElement.querySelector('.toast-body');
    toastBody.textContent = toastMsg;
    const toastInstance = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 2000
    });
    toastInstance.show();
};

addItemBtn.addEventListener("click", addTask);
for (let i = 0; i < removeItemBtn.length; i++) {
    removeItemBtn[i].addEventListener('click', removeTask);
  }  

function addTask() {
    if (addItemInput.value == '') {
        ifEmptyToast("Bir görev oluşturmak için en az bir harf yazınız.");
    } else {
        tasksList.innerHTML += taskItem(addItemInput.value);
        addItemInput.value = '';
    }
}
function removeTask() {
    $(this).closest('.list-group-item').remove();
}
document.querySelector('#tasksList').addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
      event.target.closest('.list-group-item').remove();
    }
  });
  