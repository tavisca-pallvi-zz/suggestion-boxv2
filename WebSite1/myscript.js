var student = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya", "Aarushi", "Alien", "Amit", "Aakash", "Arial", "Aeee"];

function cleara() {
    document.getElementById("ulist").innerHTML = '';
    document.getElementById("main").value = '';
    document.getElementById("cross").style.visibility = 'hidden';
}
//var arrow = null;
var arrow = 0;
var count = null;
var countup = 5;
function search(event) {
    if (event.which === 38 || event.which === 40 || event.which === 13) {
        keyChange(event);
    }
    else {
        arrow = 0;
        countup = 5;
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
            var c = 0;
            for (var i = 0; i < student.length; i++) {
                elem = elem.toLowerCase();
                student[i] = student[i].toLowerCase();
                if (student[i].toLowerCase().includes(elem.toLowerCase())) {
                  
         
                    var li = document.createElement("LI");
                    li.setAttribute("class", "list-items");
                    var t = document.createTextNode(student[i]);
                    li.appendChild(t);
                    if (i == 0)
                        li.setAttribute("class", "sel");
                    
                    document.getElementById("ulist").appendChild(li);
                    li.addEventListener("click", function () {
                        document.getElementById("main").value = this.innerHTML;
                        document.getElementById("ulist").innerHTML = " ";

                    });

                    f = 1;
                }
                //listitem[0].setAttribute("class", "sel");
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
  
    var listitem = document.getElementsByTagName("LI");//getting all the list tags
    var len = listitem.length - 1;
    var countup = 5;

    console.log("len of row");
    console.log(len);

    console.log("value of row");
    console.log(arrow);

    if (event.which === 40) {
       
        //if (arrow == null) {
        //    listitem[0].setAttribute("class", "sel");
        //    arrow = 0;
        //    count = 0;
        //}
        //else {

            if (arrow != len) {
                listitem[arrow].setAttribute("class", "list-items");

                count++;
                arrow++;
            }
            if ((count) > 4) {
                document.getElementById("ulist").scrollBy(0, 35);
            //    count = 0;
            }
            listitem[arrow].setAttribute("class", "sel");

        //}
        

    }
    else if (event.which === 38) {
        if (arrow != 0) {
            listitem[arrow].setAttribute("class", "list-items");
            arrow--;
            console.log(countup);
            countup--;
        }
        //if (countup == 0) {
        //    debugger;
        //    document.getElementById("ulist").scrollBy(0, -175);
        //    countup = 5;
        //}
        if (listitem.length > 4) {


            document.getElementById("ulist").scrollBy(0, -35);
        }

        listitem[arrow].setAttribute("class", "sel");

    }
    else {

        document.getElementById("main").value = listitem[arrow].innerHTML;
        document.getElementById("ulist").innerHTML = " ";

    }

}


