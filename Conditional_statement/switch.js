// switch = is a one the most effective way to write a conditional statement 
//          Switch is mostly use when we have a lot of conditional statement code to execute 

let grade = 70
let examGrade;
switch (true) {
    case grade >  90:
        examGrade = ('A')
        break;
    case grade >= 80:
        examGrade = ('B')
        break;
    case grade > 70:
        examGrade = 'C';
        break;
    case grade > 60:
        examGrade = 'D';
        break;
    case grade > 50:
       examGrade = ('E')
        break;
    
     default:
        examGrade = 'F'
     break;
}
console.log(examGrade);
 