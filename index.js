// code your solution here
function saturdayFun(sentence = "roller-skate"){   
    return `This Saturday, I want to ${sentence}!`;
}
saturdayFun()
saturdayFun("pay football")

function mondayWork( myActivity = 'go to the office'){
    return `This Monday, I will ${myActivity}.`
}
mondayWork();
mondayWork("go to school")

function wrapAdjective(visualFl = "*"){
    return function(msg = "a hard worker"){
        return `You are ${visualFl}${msg}${visualFl}!`
    }  
}
wrapAdjective()