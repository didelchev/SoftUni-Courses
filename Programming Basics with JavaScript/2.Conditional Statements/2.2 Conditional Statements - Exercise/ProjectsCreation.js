// Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.
// The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s


function projectCreations(input) {
    let name = (input[0])
    let projects = (input[1])
    let oneProjectHours = Number('3')
    let hoursNeeded = projects * oneProjectHours

    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${projects} project/s.`);

}

projectCreations(['George', '4'])