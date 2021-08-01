var no1,no2,number;

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");    

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("Question").innerHTML = "Question - "+player1_name;
document.getElementById("Answer").innerHTML = "Answer - "+player2_name;

function send(){
no1 = document.getElementById("no1").value;
no2 = document.getElementById("no2").value;

number = no1*no2;

var question = no1 + "x" + no2;
question_word = "<h4 id='word_display'> Q. "+ question+"</h4>"
input_box = "<br><br> <input id='input_box' type='text' placeholder='Answer'>"
check_button = "<br><br> <button class= 'btn btn-info' onclick='check()'>Check</button>"
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("no1").innerHTML = "";
document.getElementById("no2").innerHTML = "";
}

question = "player1";
answer = "player2";

function check()
{
ans = document.getElementById("input_box").value;
console.log(number);
if (ans == number) {
    if (answer == "player1") 
    {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
     else
    {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
if(question == "player1")
{
    question = "player2";
    document.getElementById("Question").innerHTML = "Question - "+player2_name;
}
else
{
    question = "player1";
    document.getElementById("Question").innerHTML = "Question - "+player1_name;
}

if(answer == "player1")
{
    answer = "player2";
    document.getElementById("Answer").innerHTML = "Answer - "+player2_name;
}
else
{
    answer = "player1";
    document.getElementById("Answer").innerHTML = "Answer - "+player1_name;
}
document.getElementById("output").innerHTML = "";
document.getElementById("no1").innerHTML = "";
document.getElementById("no2").innerHTML = "";
}
