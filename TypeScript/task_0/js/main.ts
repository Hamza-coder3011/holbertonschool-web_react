interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Hammadi",
  lastName: "Hamza",
  age: 30,
  location: "France",
};

const student2: Student = {
  firstName: "Ilyess",
  lastName: "Raiss",
  age: 20,
  location: "France",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

studentsList.forEach((student: Student) => {
const tr: HTMLTableRowElement = document.createElement("tr");
table.appendChild(tr);
const td1: HTMLTableCellElement = document.createElement('td');
td1.innerText = student.firstName;
const td2: HTMLTableCellElement = document.createElement('td');
td2.innerText = student.location;
tr.appendChild(td1);
tr.appendChild(td2);
});

document.body.appendChild(table);
