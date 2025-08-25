let user_input = prompt("choose 'r' for rock, 'p' for paper, 's' for scissors: ")
let choices=["r","p","s"]
function computer_choice(){
    let random=Math.floor(Math.random()* choices.length)
    return choices[random]
}
function determine_winner(user_input,computer_choice){
    if (user_input===computer_choice){
        return "tie"
    }
    else if (user_input==="r" && computer_choice==="s" || user_input==="p" && computer_choice==="r" || user_input==="s" && computer_choice==="p")
        return "you win"
    else{
        return "you lose"
    }
}
console.log(user_input)
if (choices.includes(user_input)){
    let result = determine_winner(user_input, computer_choice)
    console.log('you chose ' + user_input)
    console.log('computer chose ' + computer_choice())
    console.log(result)
}
else {
    alert("Invalid choice")
}
