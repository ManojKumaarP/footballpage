let score=[0,1,2,3,4,5,6];
var turn;
var team1 ={
    name:"RealMadrid",
    goal:[],
    score:0
};
var team2 ={
    name:"Huesca",
    goal:[],
    score:0
};
window.onload =() =>{
    slectTurn();
    updateTextButton();
   updateScore();
   updateName();
};
slectTurn =() =>{
    turn=Math.round(Math.random())+1;  
   
};
updateTextButton =() =>{
    var button =document.getElementById('strike');
    button.textContent = `${turn===1?team1.name: team2.name} Strike`;
   
}
updateScore =() =>{
// document.getElementById('team-1-score').textContent = team1.score;

 //document.getElementById('team-2-score').textContent = team2.score;
}
updateName =() =>{
document.getElementById('team-1-name').textContent = team1.name;
document.getElementById('team-2-name').textContent = team2.name;
}
//container 1
var team3 ={
    name:"Arsenal",
    goal:[],
    score:0
};
var team4 ={
    name:"chelsea",
    goal:[],
    score:0
};
//conatiner 2
var team5 ={
    name:"FCB",
    goal:[],
    score:0
};
var team5 ={
    name:"LiverPool",
    goal:[],
    score:0
};