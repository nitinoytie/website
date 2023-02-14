function Student(id,nm,add)
{
    var stud=document.createElement("h2");
    stud.innerHTML="Id "+id+" Name "+nm+" Address "+add;
    document.getElementById("show").appendChild(stud);
}