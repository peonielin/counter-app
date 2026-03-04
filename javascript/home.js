function changeToCross(x) {
  x.classList.toggle("change");
}

const retrievedObject = localStorage.getItem('result');

const importArray = JSON.parse(retrievedObject);

/*const importArray = [
    { newGoalName: "bike" ,
     newTargetNum: 1200 ,
    newStartingNum: 1000 ,
    newGoalUnits: "km" ,
    newGoalIncrement: 1 },
        { newGoalName: "bike" ,
     newTargetNum: "1200" ,
    newStartingNum: 160 ,
    newGoalUnits: "km" ,
    newGoalIncrement: "1" },
        { newGoalName: "bike" ,
     newTargetNum: "1200" ,
    newStartingNum: 400 ,
    newGoalUnits: "km" ,
    newGoalIncrement: "1" }]*/
    
const goalListContainer = document.querySelector(".goals-container");

for(let i =0; i<importArray.length;i++){
  const item = importArray[i];
  const newDiv = document.createElement('div');
  newDiv.className = "singular-goal";
  newDiv.innerHTML = item.newGoalName +" "+ item.newStartingNum +"/" +item.newTargetNum+ item.newGoalUnits + " "+ ((item.newStartingNum/item.newTargetNum)*100)+ "%" 
  goalListContainer.appendChild(newDiv);
}


