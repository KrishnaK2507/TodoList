const cl = console.log;
const stdContainer = document.getElementById("stdContainer");
const stdForm = document.getElementById("stdForm");
const fname = document.getElementById("fname");



const stdArr = [
    {
        fname : "John",
        lname : "Doe",
        email : "johndoe56@gmail.com",
        contact : 456123,
        id : 12345
    },
    {
        fname : "Jen",
        lname : "Demark",
        email : "jendenm56@gmail.com",
        contact : 789426,
        id : 2561
    },
]

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const createStd = (arr, idContainer) => {
    let result = ``;
  arr.forEach((std, i )=>{
  result += `<tr id="${std.id}">
  <td>${i+1}</td>
  <td>${std.fname}</td>
  <td>${std.lname}</td>
  <td>${std.email}</td>
  <td>${std.contact}</td>
</tr>`
})
idContainer.innerHTML = result;
};

createStd(stdArr, stdContainer);


// idContainer.innerHTML = result;


const onStdAdd = (eve) => {
 eve.preventDefault();
 let newStd = {
    fname : eve.target['0'].value,
    lname : eve.target['1'].value,
    email : eve.target['2'].value,
    contact : eve.target['3'].value,
    id : uuidv4()
 }

 stdArr.unshift(newStd);
 createStd(stdArr, stdContainer);
 eve.target.reset();
}



stdForm.addEventListener("submit", onStdAdd);