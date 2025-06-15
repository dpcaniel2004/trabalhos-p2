function AdicionarTarefa() {
    let tarefa = document.getElementById("tarefa").value.trim();

    if (tarefa === "") {
        alert("Poxa, você não digitou nada! Esperava mais...")
    } else {
        let li = document.createElement("li");
        li.textContent = tarefa;

        let button = document.createElement("button");
        button.textContent = "Remover";
        button.onclick = function() {
            li.remove();
        }

        li.appendChild(button);
        document.getElementById("lista_tarefas").appendChild(li);

        document.getElementById("tarefa").value = "";
    }
}