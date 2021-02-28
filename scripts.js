// Motivational Messages
// Structure: Greeting, Message, Ending. 
// E.g. "Hey there! You're doing AMAZING. Keep it up :) " 
// Greetings: "Hey there!", "Heyaaaa" "~Greetings Summoner~"
// Message: "You only fail when you stop trying!", "Don't stop until youre proud", "Good things take time."
// Ending: "Keep it up :)", "Until next time :D", "Have a fantastic day!"

const mixMessage = {
    greeting: ["Hey there!", "Heyaaaa!", "~Greetings Summoner~"],
    message: ["You only fail when you stop trying!", "Don't stop until you're proud.", "Good things take time."],
    ending: ["Keep it up :)", "Until next time :D", "Have a fantastic day!"],

    randomNumber(list){Math.floor(Math.random() * this.list.length)},

    makeMix(){
        temp = [];
        temp.push(greeting[this.randomNumber(greeting)]);
        temp.push(message[this.randomNumber(message)]);
        temp.push(ending[this.randomNumber(ending)]);
        return temp.join("\n");
    }
}

