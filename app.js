let score=[0,1,2,3,4,5];
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
    var result=document.getElementById('result');
    result.style.visibility="";
    button.textContent = `${turn===1?team1.name: team2.name} Strike`;
    if(team1.runs.length==5 && team2.runs.length==5){
        button.remove()
    }
    else{
        result.textContent=team1.score== team2.score? `Its a draw`:`${team1.score >team2.score ? team1.name : team2.name} Wins`;
    }
   
}
updateScore =() =>{
 document.getElementById('team-1-score').textContent = team1.score;
 document.getElementById('team-2-score').textContent = team2.score;
}
updateName =() =>{
document.getElementById('team-1-name').textContent = team1.name;
document.getElementById('team-2-name').textContent = team2.name;
}
var strikeit =() =>{
    var runs=score[Math.floor(Math.random()*score.length)];
    runs= runs === 5? `f`:runs;
    if(turn===1)
    {
        team1.runs.push(runs);
        team1.score=calulateScore(team1.runs);
    }
    else{
        
        team2.runs.push(runs);
        team2.score=calulateScore(team2.runs);
    }
    updateTextButton();
    updateScore();
}

var calulateScore =() =>
{
    
        return runs.map(run =>{
            return run =='W'?0:run;
        }).reduce((total,runs)=>total + runs);
}

updateRuns =() =>{
    var team1goals=document.getElementById('team-1-score').children;
    var team1goals=document.getElementById('team-2-score').children;
    team1.runs.forEach((run,index)=> {
        team1goals[index].textContent=run;
    })
    team2.runs.forEach((run,index)=> {
        team2goals[index].textContent=run;
    });
};






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