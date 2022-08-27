let body = document.querySelector("body");
let notesDisplay = document.querySelector(".notes_display");
let noteTitle = document.querySelector("#note_title");
let noteContent = document.querySelector("#note_content");
let notes = [];

noteTitle.addEventListener("click", () => {
  noteTitle.removeAttribute("readonly");
  noteContent.style.display = "block";
  noteTitle.placeholder = "Write a title..";
});

let saveNote = (event) => {
  if (event.target.localName !== "body") return;

  if (noteTitle.value === "" && noteContent.value === "") return;

  let note = {
    id: new Date().toISOString(),
    title: noteTitle.value || "Untitled",
    content:
      noteContent.value.length > 20
        ? noteContent.value.trim(0, 20).concat("...")
        : noteContent.value
  };

  notes.push(note);
  noteTitle.value = "";
  noteContent.value = "";

  displayNotes();
};

let displayNotes = () => {
  notesDisplay.innerHTML = "";
  notes.forEach((note) => {
    let noteDiv = document.createElement("div");
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");
    deleteButton.setAttribute("data-id", note.id);
    editButton.setAttribute("data-id", note.id);

    deleteButton.innerHTML = `<img data-id='${note.id}' src='https://www.veryicon.com/download/png/commerce-shopping/soft-designer-online-tools-icon/delete-77?s=256' width='20' height='20' alt='Delete'/>`;
    editButton.innerHTML = `<i class='fa fa-edit'></i>`;

    //delete
    deleteButton.classList.add("delete_float");
    noteDiv.appendChild(deleteButton);

    //edit
    editButton.classList.add("edit_float");
    noteDiv.appendChild(editButton);

    let noteHeaderDiv = document.createElement("h1");
    let noteContentDiv = document.createElement("p");

    noteDiv.classList.add("note_card");
    noteHeaderDiv.classList.add("note_header");
    noteContentDiv.classList.add("note_content");

    noteHeaderDiv.innerHTML = note.title;
    noteContentDiv.innerHTML = note.content;

    noteDiv.appendChild(noteHeaderDiv);
    noteDiv.appendChild(noteContentDiv);

    //adding random color
    notesDisplay.appendChild(noteDiv);
    let hcode = "#" + Math.random().toString(16).substring(2, 8);
    noteDiv.style.backgroundColor = hcode;
    noteDiv.style.boxShadow = "5px 10px black";
    //
    editButton.addEventListener("click", (event) => {
      noteDiv.setAttribute("contenteditable", "true");
    });
    //delete
    deleteButton.addEventListener("click", (event) => {
      let idToBeDeleted = event.target.getAttribute("data-id");

      notes = notes.filter((note) => {
        if (note.id !== idToBeDeleted) {
          return true;
        }
        return false;
      });
      displayNotes();
      console.log(notes);
    });
  });
};

body.addEventListener("click", saveNote);
