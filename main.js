//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(current_string, names_array){
    let current_lower_string = current_string.toLowerCase()
    for(i =0; i<names_array.length; i++){
        if(current_lower_string.includes(names_array[i].toLowerCase())){
            console.log(`Matched ${names_array[i]}`)
        }
        else {
            console.log(`No Matches for ${names_array[i]}`)
        }
    }
}
findWords(dog_string, dog_names)


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(i =0; i<arr.length; i++){
        if(i%2==0){
            arr[i]="even index"
        }
    }
    console.log(arr)
}
replaceEvens(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]