let userName = prompt('What is your name?', 'your name');
let userLastName = prompt('What is your last name?', 'your last name');
let userMiddleName = prompt('What is your middle name?', 'your middle name');
let userSex = confirm('Are you female?');
let userAge = Number(prompt('How old are you?', '18'));
let userAgeInDays = (userAge * 365);
let userAgeIn5Years = (userAge + 5);
let userRetirementStatus;

userSex == true ? userSex = 'female': userSex = 'male'

userSex == 'female' ?
       (userAge >= 58)?
       userRetirementStatus = 'yes':
       userRetirementStatus = 'no'
:
        (userAge >= 63) ?
        userRetirementStatus = 'yes':
        userRetirementStatus = 'no'




alert(`Ваше ФИО: ${userLastName} ${userName} ${userMiddleName}
ваш возраст в годах: ${userAge}
ваш возраст в днях: ${userAgeInDays}
через 5 лет вам будет: ${userAgeIn5Years}
ваш пол: ${userSex}
вы на пенсии: ${userRetirementStatus}`);