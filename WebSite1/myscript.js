var student = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya", "Aarushi", "Alien", "Amit", "Aakash", "Arial", "Aeee"];

function cleara() {
    document.getElementById("ulist").innerHTML = '';
    document.getElementById("main").value = '';
    document.getElementById("cross").style.visibility = 'hidden';
}

var arrow = null, prevevent = 0, f = 0;
function search(event) {
  if (event.which === 38 || event.which === 40 || event.which === 13) {
        keyChange(event);

    }
    else {
        var ll = document.getElementById("main");

        document.getElementById("cross").style.visibility = 'visible';
        console.log(" ");
        student.sort();
        var f = 0;
        var c = 1;

        document.addEventListener("click", function (e) {
            document.getElementById("ulist").innerHTML = '';
        });

        var elem = document.getElementById("main").value;
        document.getElementById("ulist").innerHTML = '';

        if (elem == "") {
            document.getElementById("ulist").innerHTML = '';
        }

        else {

            document.getElementById("ulist").style.overflowX = 'hidden';
            document.getElementById("ulist").style.overflowY = 'auto';

            for (var i = 0; i < student.length; i++) {
                elem = elem.toLowerCase();
                student[i] = student[i].toLowerCase();
                if (student[i].toLowerCase().includes(elem.toLowerCase())) {
                    var li = document.createElement("LI");
                    li.setAttribute("class", "list-items");
                    var t = document.createTextNode(student[i]);
                    li.appendChild(t);
                    document.getElementById("ulist").appendChild(li);
                    li.addEventListener("click", function () {
                        document.getElementById("main").value = this.innerHTML;
                        document.getElementById("ulist").innerHTML = " ";

                    });

                    f = 1;
                }
            }
            if (f == 0) {
                var list = document.getElementById("ulist");
                var li = document.createElement("LI");
                var t = document.createTextNode("No Record Found");
                li.appendChild(t);
                document.getElementById("ulist").appendChild(li);
                li.addEventListener("click", function () {
                    document.getElementById("main").value = this.innerHTML;
                    document.getElementById("ulist").innerHTML = " ";
                });
            }
        }

    }
}

function keyChange (event) {
    //console.log(event.which)
        console.log(1);
        var listitem = document.getElementsByTagName("LI");//getting all the list tags
        console.log(event);
        if (event.which === 40) {
            if (arrow === null) {
                listitem[0].setAttribute("class", "sel");
                arrow = 0;
            }
            else {
                listitem[arrow].setAttribute("class", "list-items");
                arrow++;
                listitem[arrow].setAttribute("class", "sel");

                console.log(arrow);
            }
            //if (listitem.length > 5) {
            //    document.getElementById("ulist").scrollBy(0, 20);
            //}
        }
        else if (event.which === 38) {
            listitem[arrow].setAttribute("class", "list-items");
            console.log(arrow)
            arrow--;
            console.log(arrow)
            listitem[arrow].setAttribute("class", "sel");
            console.log(arrow);

        }
        else {
            arrow--;
            document.getElementById("main").value = listitem[arrow].innerHTML;
            document.getElementById("ulist").innerHTML = " ";

        }

    }

