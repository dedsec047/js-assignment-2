// Concatinate
document.getElementById("contatinate").onclick = function () {
    let a = prompt("Enter your first string")
    let b = prompt("Enter your 2nd string")
    document.getElementById("output").innerHTML = a + b
    console.log(a.b)
}

// Asking user name
document.getElementById("nameUser").onclick = function () {
    a = prompt("What is your name?")
    document.getElementById("output").innerHTML = a
}

// comparison operator
document.getElementById("compOpe").onclick = function () {
    let a = prompt("Enter your first Value")
    let b = prompt("Enter your 2nd Value")
    document.getElementById("statement").innerHTML = a + " = " + b + " ?"
    if (a == b)
        document.getElementById("output").innerHTML = "''" + a + "''" + " is equal to " + "''" + b + "''"
    else
        document.getElementById("output").innerHTML = "''" + a + "''" + " is not equal to " + "''" + b + "''"

}

// if else-if
document.getElementById("ifi").onclick = function () {
    let a = +prompt("Enter your Mark")
    document.getElementById("statement").innerHTML = "You Achieved " + "''" + a + "''" + " Marks!"
    if (a >= 90) {
        document.getElementById("output").innerHTML = "You have Got A+"
    } else if (a >= 80) {
        document.getElementById("output").innerHTML = "You have Got A"
    } else if (a >= 70) {
        document.getElementById("output").innerHTML = "You have Got C"
    } else if (a >= 60) {
        document.getElementById("output").innerHTML = "You have Got D"
    } else if (a >= 50) {
        document.getElementById("output").innerHTML = "You have Got E"
    } else {
        document.getElementById("output").innerHTML = "You have Got F"
    }

}

// Set of Condition
document.getElementById("tsoc").onclick = function () {
    let a = +prompt("What is your age?")
    let b = +prompt("What is your Weight? (in kiloGrams)")
    document.getElementById("statement").innerHTML = "You Are " + a + "'Year Old And Weigh Over'" + b + " kg"
    if (a == 0 && b == 0) {
        alert("value cannot be 0")
    } else if (a <= 10 && b <= 25) {
        document.getElementById("output").innerHTML = "you are a baby"
    }
    else if (a <= 18 && b <= 50) {
        document.getElementById("output").innerHTML = "you are teenager and healthy"
    }
    else if (a <= 25 && b <= 60) {
        document.getElementById("output").innerHTML = "you are a youngman and fatty"
    }
    else if (a <= 30 && b <= 59) {
        document.getElementById("output").innerHTML = "you are a youngman and healthy"
    }
    else {
        document.getElementById("output").innerHTML = "you are a Senior Citizen and fatty"
    }

}


// nested if 
document.getElementById("isn").onclick = function () {
    let a = +prompt("Enter your marks")
    if (a > 39) {
        if (a > 49) {
            if (a > 59) {
                if (a > 69) {
                    if (a > 79) {
                        if (a > 89) {
                            document.getElementById("output").innerHTML = "You got A+"
                        } else {
                            document.getElementById("output").innerHTML = "You got A"
                        }
                    } else {
                        document.getElementById("output").innerHTML = "You got B"
                    }
                } else {
                    document.getElementById("output").innerHTML = "You got C"
                }
            } else {
                document.getElementById("output").innerHTML = "You got D"
            }
        } else {
            document.getElementById("output").innerHTML = "You got E"
        }
    } else {
        document.getElementById("output").innerHTML = "You Failed"
    }
}

// login
document.getElementById("login").onclick = function () {
    let a = prompt("UserName")
    let b = prompt("Password")
    document.getElementById("statement").innerHTML = "User Name = " + a + "<br>Password =" + b
    if (a == "admin" && b == "admin") {
        document.getElementById("output").innerHTML = "You are Successfully loged in"
    } else if (a !== "admin") {
        if (b !== "admin") {
            document.getElementById("output").innerHTML = "Invalid User name<br>Invalid Password"
        } else {
            document.getElementById("output").innerHTML = "Invalid Password"
        }
    }
}

// check
document.getElementById("check").onclick = function () {
    document.getElementById("output").innerHTML = "Username = admin<br>Password = admin"
}



// Clear buttons
document.getElementById("clrST").onclick = function () {
    document.getElementById("statement").innerHTML = null
}
document.getElementById("clrOP").onclick = function () {
    document.getElementById("output").innerHTML = null
}