//We are trying to create a function with a few conditions. 
//the fuction has 5 variables. It uses if, else if and else conditions.
function checkCreds(){
    console.log("checkCreds() started");
    var firstName;
    var lastName;
    var badgeNumb;
    var fullName;
    var fullNameLength;

    //We are wiring the firstName variable into its id in our html file.
    firstName = document.getElementById("fName").value;
    console.log("The first name is: " + firstName);
    //Now the lastName is being connected to its id that we created in our html file. 
    lastName = document.getElementById("lName").value;
    console.log("The last name is: " + lastName);
    //Add firstName and lastName together into another variable called, fullName.
    fullName = firstName + " " + lastName;
    console.log("The user's full name is: " + fullName);
    
    badgeNumb = document.getElementById("badgeID").value;
    console.log("The badge number is: " + badgeNumb);
    //.length is added to fullname and then set to its own variable. 
    fullNameLength = fullName.length
    console.log("The user's full name length is: " + fullNameLength + " characters.");

    // if fullNameLength is more than 20 characters, then print invalid. 
    if(fullNameLength > 20){
        //If I wanted to print a message on the screen, I will need the id by getElementById. 
        document.getElementById("loginStatus").innerHTML = "Invalid full name, please try again."  
    // the second condition is if badge number is more than 999 OR less than 1, print invalid.   
    } else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again."
    }else{
        //./ means same directory. Then the name of the file is the same 
        //html file that we made earlier. Else, replace the location. 
        location.replace("./uatSpace.html");
    }
}