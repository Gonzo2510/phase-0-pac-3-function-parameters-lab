function introduction(name) {
    console.log(`Hi, my name is ${name}.`);
}

function introductionWithLanguage (name, language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}


function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}!`);
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

//sayHelloTo()
//introduction("Jacob")
//introductionWithLanguage("Jacob", "JavaScript")

introductionWithLanguageOptional("Jacob")
