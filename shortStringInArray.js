/*var names = ['Maanasa','Akhil','rama','bahu','Madhuri']

function shortStringInArray(names){
for(var i=0;i<names.length+1;i++){

    console.log(names[i])
}


}

shortStringInArray('Maanasa','Akhil','rama')*/
words = ["one", "tw", "three"];

function getShortestWord(wordsArray) {
	return wordsArray.sort((a, b) => a.length - b.length)[0];
}

console.log(getShortestWord(words));