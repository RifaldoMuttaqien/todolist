document.getElementById("addFormList").addEventListener("submit", function(event){
    event.preventDefault();

    let addInputListTask = document.getElementById("addInputListTask").value;

    if(addInputListTask.trim() !== ""){
        const listTask = document.createElement("li");
        listTask.className = "list-group-item";
       
      const row = document.createElement("div");
      row.className = "row align-items-center";

      const taskcol = document.createElement("div");
      taskcol.className = "col";
      taskcol.innerText = addInputListTask;

        const hapusButtoncol = document.createElement("row");
        hapusButtoncol.classList.add('col-auto');
        

       const hapusButton = document.createElement("a");
      
       hapusButton.innerText = "Hapus";
       hapusButton.classList.add("btn", "btn-sm", "btn-danger");
        hapusButton.onclick = function(){
            confirm("Yakin kamu mau hapus?");
            listTask.remove();
        }

       hapusButtoncol.appendChild(hapusButton);
       row.appendChild(taskcol);
       row.appendChild(hapusButtoncol);


    listTask.appendChild(row);

       document.getElementById("listTask").appendChild(listTask);
       document.getElementById("addInputListTask").value = "";
    }
})