// alert = prompt ("What would you like to order?")


// let order = ["Burger","Pizza","Sushi","Fish","Rice"];

// switch(alert) {
//     case "1":
//       console.log(order[0])
//       break;

//     case "2":
//         console.log(order[1])
//         break;

//     case "3":
//         console.log(order[2])
//         break;

//     case "4":
//         console.log(order[3])
//         break;

//      case "5":
//         console.log(order[4])
//          break;

//     case "6":
//        console.log(order[5])

//       break;
//     default:
//       console.log("Order not found")
//   }

let number1 = prompt("Enter a number")
let number2 = prompt("Enter a second number")
let expresion = prompt("Enter an expression +,-,*,/")

switch(expresion) {
    case "*":

    alert(parseInt(number1)*parseInt(number2))
    break;

    case "/":
    alert(parseInt(number1)/parseInt(number2))

    break;

    case "+":
    alert(parseInt(number1)+parseInt(number2))

    break;

    case "-":
    alert(parseInt(number1)-parseInt(number2))

    break;

    default:
        alert("There is something wrong")
}





  


