console.log ("Here are the well known letter grades and their associated averages.")

let average = 55

if (average >= 90) {
    console.log ("You got a A. Great job!")
} else if (average < 90  && average >= 80) {
    console.log ("You got a B. Pretty good!")
} else if (average < 80 && average >= 70) {
    console.log ("You got a C. Thats an okay grade.")
} else if (average < 70 && average >= 60) {
    console.log ("You got a D. Could be better, but it also could be worse.")
} else {
    console.log ("You got an F. Try again next time!")
}