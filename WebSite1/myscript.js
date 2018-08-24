var student = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya", "Aarushi", "Alien", "Amit", "Aakash", "Arial", "Aeee"];

function cleara() {
    document.getElementById("ulist").innerHTML = '';
    document.getElementById("main").value = '';
    document.getElementById("cross").style.visibility = 'hidden';
}
var arrow = null;
var count = null;
var countup = null;
function search(event) {
    if (event.which === 38 || event.which === 40 || event.which === 13) {
        keyChange(event);
    }
    else {
        arrow = null;
        countup = null;
        count = null;
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
    //var lists = document.getelementsbytagname("li");
    //lists[0].setattribute("class", "sel");
    //arrow = 0;
}

function keyChange(event) {
    debugger;
  
    var listitem = document.getElementsByTagName("LI");//getting all the list tags
    var len = listitem.length - 1;
    var countup = 5;

    console.log("len of row");
    console.log(len);

    console.log("value of row");
    console.log(arrow);

    if (event.which === 40) {
       
        if (arrow == null) {
            listitem[0].setAttribute("class", "sel");
            arrow = 0;
            count = 0;
        }
        else {

            if (arrow != len) {
                listitem[arrow].setAttribute("class", "list-items");

                count++;
                arrow++;
            }
            if (count > 4) {
                document.getElementById("ulist").scrollBy(0, 180);
                count = 0;
            }
            listitem[arrow].setAttribute("class", "sel");

        }
        //if (listitem.length > 5) {
        //    debugger;

        //    document.getElementById("ulist").scrollBy(0, 20);
        //}

    }
    else if (event.which === 38) {
        if (arrow != 0) {
            listitem[arrow].setAttribute("class", "list-items");
            arrow--;
            countup--;
        }
        if (countup == 0) {
            document.getElementById("ulist").scrollBy(0, -180);
            countup = 5;
        }


        listitem[arrow].setAttribute("class", "sel");

    }
    else {

        document.getElementById("main").value = listitem[arrow].innerHTML;
        document.getElementById("ulist").innerHTML = " ";

    }

}


