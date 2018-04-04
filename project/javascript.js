var Recipient = function (Name, Email, Relation) {

    this.Name = Name, this.Email = Email, this.Relation = Relation;

};

Recipient.prototype.Display = function () {
    return (alert("I have seen everthing " + this.Email + " " + this.Relation + " " + this.Name));

};
PrintList = function () {

    alert(JSON.stringify(recipient_list));


};
var recipient_list = [];

function addRecipientInfo(Sel_Email, Sel_relation) {


    var Name = prompt("Enter the new Contact Name");


       var Email = Sel_Email;//sent from the function  myFunction.
       var Relation = Sel_relation;


       AddToList(Name, Email, Relation);

};
/*function prettyPrompt(){
    var box = document.getElementById("pretty");

    box.innerHTML = "<input"+"id ="+ "'prompter'" +" type="+"'text'"+" name='prompter'>" +
        "<button type="+ "button" +"onclick ="+"setName()" +">"+"Submit" + "</button"+ ">";


};
function setName(){

    var newname = document.getElementById('prompter').value;

    return newname;
};*/
var AddToList = function (Name, Email, Relation) {

    NewRecipient = new Recipient(Name, Email, Relation);
//for(var i = 0, j = recipient_list.length; i<j; i++){
  if(recipient_list.length>-1){
    recipient_list.push(NewRecipient);
    setStorage("recipients", NewRecipient);}
    //};


};
/*Recipient.prototype.setName=function(f_name) {
 alert("here");
 return   this.Name = f_name;
 alert( this.Name );
 //  RecipientList[1] = NewRec;
 };
 Recipient.prototype.setRelation=function(relation){

 };
 */


function checkAll(source) {
    checkboxes = document.getElementsByName('checkbox2');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function checkAll2(source) {
    checkboxes = document.getElementsByName('checkbox4');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function checkAll3(source) {
    checkboxes = document.getElementsByName('checkbox6');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}


//Adding emails and checkboxes to friends
function myFunction() {

    var checkbox = this.checkbox;
    var AddEmail = this.AddEmail;
    var email = this.email;
    var selectedValue = this.selecetdValue;

    checkbox = document.createElement('input');
    AddEmail = document.getElementById("groupList");
    email = document.getElementById("email").value;
    selectedValue = AddEmail.options[AddEmail.selectedIndex].value;
    email = checkRepeat(email);

    if ((email !== '') || (email !== "" ) || (selectedValue !== "")) {


        if (selectedValue === "Friends") {
            selectedValue = 1;
        }
        else if (selectedValue === "Business") {
            selectedValue = 2;
        }
        else if (selectedValue === "Other") {
            selectedValue = 3;
        }

	}
        //alert("Email value : " + email);
        if (selectedValue !== "" && email!== "") {
            addRecipientInfo(email, selectedValue);
			clear();
			localStorage["recipients"] = JSON.stringify(recipient_list);
        

        switch (selectedValue) {

            case 01:

          //      alert("case 01");
                AddFriends();
                break;


            case 02:
            //    alert("case 02");
                AddBusiness();
                break;

            case 03:
              //  alert("case 03");
                AddOther();
                break;
            default :
                alert("something went wrong");
        }

    } else {
        alert("something went wrong,\n try again");
    }
    function AddFriends() {
        //  email = document.getElementById("email");
        //  document.getElementById("table1").value = document.getElementById("email").value;
        document.getElementById("table1").value = email;
        var table1 = document.getElementById("table1");
        var row = table1.insertRow(1);
        var cell = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell.className = "cells";
        cell.Name = "cellName";

        checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox2";
        checkbox.id = "checkbox2";
        checkbox.className = "test";


        cell2.appendChild(checkbox);

        cell.innerHTML = document.getElementById("table1").value;


    }

    //Adding emails and checkboxes to Business

    function AddBusiness() {
        email = document.getElementById("email");
        document.getElementById("table2").value = document.getElementById("email").value;

        var table2 = document.getElementById("table2");
        var row2 = table2.insertRow(1);
        var cell = row2.insertCell(0);
        var cell2 = row2.insertCell(1);
        cell.className = "cells";
        cell.Name = "cellName";

        checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox4";
        checkbox.id = "checkbox4";
        checkbox.className = "test";


        cell2.appendChild(checkbox);

        cell.innerHTML = document.getElementById("table2").value;


    } // Adding emails and checkboxes to Other

    function AddOther() {
        email = document.getElementById("email");
        document.getElementById("table3").value = document.getElementById("email").value;

        var table3 = document.getElementById("table3");
        var row3 = table3.insertRow(1);
        var cell = row3.insertCell(0);
        var cell2 = row3.insertCell(1);
        cell.className = "cells";
        cell.Name = "cellName";

        checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox6";
        checkbox.id = "checkbox6";
        checkbox.className = "test";


        cell2.appendChild(checkbox);

        cell.innerHTML = document.getElementById("table3").value;


    }


}

/*function deleteRow(source) {

 if (source.checked){
 for(var i=0, n=checkboxes.length;i<n;i++) {
 document.getElementById("table1").deleteRow(0);
 checkboxes[i].checked = source.checked;
 }
 }
 */

function deleteRow(source) {


    var e = document.getElementsByClassName("test");
    var message = 'Are you sure you want to delete?';
    var row_list = {length: 0};

    for (var i = 0; i < e.length; i++) {
        var c_box = e[i];

        if (c_box.checked == true) {
            row_list.length++;

            row_list[i] = {};
            row_list[i].row = c_box.parentNode.parentNode;
            row_list[i].tb = row_list[i].row.parentNode;
        }
    }
//    if(cells === recipient_list[i]){


    //      var key;
//        var index = recipient_list.indexOf(cells[i].innerHTML);

//        if(index!==-1){

    //   recipient_list.splice(index, 1); // delete item from array

    //key = localStorage.getItem(cells);
    //localStorage.removeItem(key);


    //localStorage.removeItem(c.toString());


    if (row_list.length > 0 && window.confirm(message)) {
        for (i in row_list) {
            if (i == 'length') {
                continue;
            }

            deleteStorage();
            var r = row_list[i];
            r.tb.removeChild(r.row);

        }
    } else if (row_list.length == 0) {
        alert('You must select an email address to delete');
    }
}


// copying emails from checked list into sendTo email box.

function Copy() {

    var sendTo = this.sendTo;
    var checkbox = document.getElementsByClassName("test");
    var cells = document.getElementsByClassName("cells");
    sendTo = document.getElementById("emailSendTo");
    var selectedData = " ";


    for (var i = 0; i < checkbox.length; i++) {
        var listElement = checkbox[i];

        if (listElement.checked) {
            cells[i] = document.getElementsByClassName("cells").value;
            //alert("cell value" + cells[i].innerHTML)
            selectedData = selectedData + cells[i].innerHTML + ", ";


        }
    }

    sendTo.value = selectedData;
    sendTo.value = (sendTo.value.slice(0, -1) );
    // cutting last comma becouse more than one email was unable to validate.

   // alert("You have just added these recipients: " + sendTo.value);
}

Copy.prototype.mailTo = function (sendTo) {

    var msg = "You should enter at least one email";
    sendTo = document.getElementById("emailSendTo");
    var form = document.getElementById("form1");
    var mail = "mailto: ";
    var details;
    var subj = document.getElementById("mySub");
    var sub = "?subject=";

    if (sendTo.value === '') {
        alert(msg);
    }

    if (subj.value == '') {
        alert("Please enter a subject :)");
    }
    else if (sendTo.value !== "" || subj.value !== "") {
     //   alert(sendTo.value + subj.value);
        details = mail + sendTo.value + sub + subj.value;

        var Send = form.setAttribute("action", details);
    }


};


function AllowMultipleEmails() {

    document.getElementById("emailSendTo").multiple = true;

}


function checkRepeat(email_val) {//will check the email that has been inputed and if it already exists i will as for another


    if (recipient_list.length > 0) {


        for (var repeats = 0, time = recipient_list.length; repeats < time; repeats++) {
            //  alert("Repeats : " + repeats );


            if (email_val === recipient_list[repeats].Email) {


                var newMail = prompt("Can you please enter an email that \n is not already in use ");
                document.getElementById("email").value = newMail;

                newMail = checkRepeat(newMail);//searches itself again to see if it is correct and should
                // keep doing so until email_val no longer is equal to the list

                // alert("new Mail value : "+newMail);
                return newMail;

            }
        }

    } else {
        return email_val;
    }
    // alert("email value : " +  email_val);
    return email_val;
};

function setStorageRows(N_Email, N_name, N_relation) {
    var selectedValue = N_relation;
    var email = N_Email;


    if (selectedValue === "Friends") {
        selectedValue = 1;
    }
    else if (selectedValue === "Business") {
        selectedValue = 2;
    }
    else if (selectedValue === "Other") {
        selectedValue = 3;
    }


//    alert("Email value :" + email);
     if (selectedValue !== "") {
            
			
			
        
    switch (selectedValue) {

        case 01:

      //      alert("case 01");
            AddFriendsN(email);
            break;


        case 02:
        //    alert("case 02");
            AddBusinessN(email);
            break;

        case 03:
          //  alert("case 03");
            AddOtherN(email);
            break;
        default :
            alert("something went wrong");
    }}


    function AddFriendsN(email) {
        //  email = document.getElementById("email");
        //  document.getElementById("table1").value = document.getElementById("email").value;
        document.getElementById("table1").value = email;
        var table1 = document.getElementById("table1");
        var row = table1.insertRow(1);
        var cell = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell.className = "cells";
        cell.Name = "cellName";

        checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox2";
        checkbox.id = "checkbox2";
        checkbox.className = "test";


        cell2.appendChild(checkbox);

        cell.innerHTML = document.getElementById("table1").value;


    }

    //Adding emails and checkboxes to Business

    function AddBusinessN(email) {

        document.getElementById("table2").value = email;

        var table2 = document.getElementById("table2");
        var row2 = table2.insertRow(1);
        var cell = row2.insertCell(0);
        var cell2 = row2.insertCell(1);
        cell.className = "cells";
        cell.Name = "cellName";

        checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox4";
        checkbox.id = "checkbox4";
        checkbox.className = "test";


        cell2.appendChild(checkbox);

        cell.innerHTML = document.getElementById("table2").value;


    } // Adding emails and checkboxes to Other

    function AddOtherN(email) {

        document.getElementById("table3").value = email;

        var table3 = document.getElementById("table3");
        var row3 = table3.insertRow(1);
        var cell = row3.insertCell(0);
        var cell2 = row3.insertCell(1);
        cell.className = "cells";
        cell.Name = "cellName";

        checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox6";
        checkbox.id = "checkbox6";
        checkbox.className = "test";


        cell2.appendChild(checkbox);

        cell.innerHTML = document.getElementById("table3").value;


    }
};


function setStorage(KeyInt, newObject) {
    if (typeof(Storage) !== "undefined") {

// the keyemail is the selector that applies to the
// Local storage and will select the objects saved
// here, much like a primary key in a relation
        // referenc of knowledge w3schools

        localStorage.setItem(KeyInt.toString(), JSON.stringify(newObject));

    }
    else {
        alert("Your browser does not support \n local storage, use a better one.\n (please :3)");
    }


}
function getStorage() {
    if (localStorage.length != 0) {
 
        
		
		var a = [];
        a.push(JSON.parse(localStorage.getItem('recipients')));
        //localStorage.setItem('recipients', JSON.stringify(a));
		  
             
			  a = JSON.parse(localStorage.getItem('recipients'));
    
	     //   alert(JSON.stringify(a));
	
              //PrintList();
	          //list.push(receipent_list);
			  
			  for (var i=0, iLen=a.length; i<iLen; i++) {
  
	   // alert(JSON.stringify(a[i].Email));
  
var N_Email = a[i].Email;
var N_name = a[i].Name;
var N_relation = a[i].Relation;
			  
   
    //localStorage.setItem('recipient', JSON.stringify(list));
			 //setStorageRows(N_Email, N_name, N_relation);
			 setStorageRows(N_Email, N_name, N_relation);
			  }
			  recipient_list =a;
		//	   alert(JSON.stringify(recipient_list));
			 
			 
          
            
          
			
			
        

    }

}

 //not compatible with firefox
//window.onload = function () {alert("hey");
  //  getStorage();


//};
// used to clear the storage quickly because its less writing if i use this
function clear() {
    localStorage.clear();

}


function deleteStorage() {

    var checkbox = document.getElementsByClassName("test");
    var cells = document.getElementsByClassName("cells");

    for (var i = 0; i < checkbox.length; i++) {
        var listElement = checkbox[i];

        if (listElement.checked) {
            cells[i] = document.getElementsByClassName("cells").value;
            //alert("cell value" + cells[i].innerHTML);

            var value = cells[i].innerHTML;
          //  alert(cells[i].innerHTML);

            removeFromArray(recipient_list, value);

        }

    }
}
function removeFromArray(recipient_list, value) {
   for (var i = 0; i < recipient_list.length; i++){
    if ( recipient_list[i].Email &&  recipient_list[i].Email === value) { 
         recipient_list.splice(i, 1);
        
		 clear();
	localStorage["recipients"] = JSON.stringify(recipient_list);
		break;
   
	 
	 }
    
  // for(var j=0; j<recipient_list.length; j++){
   //localStorage[i] = JSON.stringify(recipient_list);
 //  }
   }
    return  recipient_list;
}

/*if(values in localStorage){
 alert('yes');
 } else {
 alert('no');
 }
 }
 */


/*for(var d=0; d<checkbox.length; d++) {
 var listElement = checkbox[d];

 if(listElement.checked) {
 cells[d]=document.getElementsByClassName("cells").value;
 alert("cell value" + cells[d].innerHTML);}}



 if(cells[d].value in localStorage){
 alert('yes');
 } else {
 alert('no');
 }*/

function eraseCache(){
  window.location = window.location.href+'?eraseCache=true';
}
	
	
	
 


