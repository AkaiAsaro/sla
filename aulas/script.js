document.addEventListener('DONcontentloaded',() => {
    const newtask = document.getElementById('newtask');
    const addtaskbtn = document.getElementById('addtaskbtn');
})
const addtask = () => {
    const tasktext = newtask
    if (tasktext != '') {
        const li = document.createElement('li');
        li.innerHTML = `<span>${tasktext}</span> <button class=addtaskbtn>delete</button>`;

        tasklist.appendchild(li);

        li.querySelector('addtaskbtn').addEventListener('click', () => {
            li.remove();
        })
    }
}
addtaskbtn.addEventListener(`click`, addtask);