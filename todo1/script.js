document.addEventListener("DOMContentLoaded", function() {
    const savedPekerjaan = localStorage.getItem('pekerjaanList');

    if(savedPekerjaan) {
        const pekerjaanArray = JSON.parse(savedPekerjaan);
        pekerjaanArray.forEach(function(item){
            appendPekerjaanToDOM(item);
        });
    }
})

document.getElementById("addPekerjaanForm").addEventListener('submit', function(event){
    event.preventDefault();

    let addPekerjaanInput = document.getElementById("addPekerjaanInput").value;

    //cek apa input kosong
    if(addPekerjaanInput.trim() !== ""){
        
        //buat element baru misalnya contoh p untuk menampilkan pekerjaan
        const pekerjaanItem = document.createElement("p");
        pekerjaanItem.innerText = addPekerjaanInput; 
        

        // tombol edit 
        const editButton = document.createElement("button");
        editButton.innerText = "Sudah dikerjakan";
        editButton.classList.add("btn", "btn-sm", "btn-info", );
       editButton.style.marginLeft = '150px';
       editButton.onclick = function() {
        completePekerjaanlist(addPekerjaanInput);
        alert("Kamu sudah Klik ini")
        editButton.disabled = "true";
        pekerjaanItem.style.textDecorationLine = "line-through";
        
    };
       

       // tombol hapus
       const deleteButton = document.createElement("button");
       deleteButton.innerText = "Hapus";
       deleteButton.classList.add("btn", "btn-sm", "btn-danger");
       deleteButton.style.margin = "10px"
       deleteButton.onclick = function() {
        pekerjaanItem.remove();
        alert("Kamu sudah menghapus");
       }

        pekerjaanItem.appendChild(editButton);
        pekerjaanItem.appendChild(deleteButton);
      
      
    document.getElementById("beforePekeraanlist").appendChild(pekerjaanItem);
    
    //selesai pekerjaan
    function completePekerjaanlist(addPekerjaanInput){
        const selesaiButton = document.createElement("button");
        selesaiButton.innerText = "Completed";
        selesaiButton.classList.add("btn", "btn-sm", "btn-success");
       

        const selesaiPekerjaan = document.createElement("div");
        const pekerjaanText = document.createElement("span");
        pekerjaanText.style.margin = "50px";
        
        pekerjaanText.innerText = addPekerjaanInput;

        selesaiPekerjaan.appendChild(pekerjaanText);
        selesaiPekerjaan.appendChild(selesaiButton);
        localStorage.getItem(addPekerjaanInput)
        document.getElementById("completePekerjaanlist").appendChild(selesaiPekerjaan);
       }
       
    }



    




})

