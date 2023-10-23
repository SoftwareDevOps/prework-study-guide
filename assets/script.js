var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random()*topics.length)]
// console.log(topics);

function selectTopics(){
    
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

function listTopics(){
    for (x = 0; x < topics.length ; x++){
        console.log(topics[x]);
    }
}

listTopics();
console.log("Above are the Topics we learned in Pre-work");

selectTopics();
console.log("Above is the Topic we will be learning first");