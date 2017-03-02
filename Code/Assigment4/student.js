/*
Johnny Mendoza
CS 185
Feb 9 2017
 */


class Student {


    constructor(id, givenName, surName) {
        this.firstName = givenName;
        this.lastName = surName;
        //this.studentId =id;

        Object.defineProperty(this, 'studentId', {value: id, writeable: false});


        this.grades = [];
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    get Average() {
        let tempAverage = 0;
        for (let p in this.grades) {
            tempAverage += this.grades[p];

        }
        tempAverage = tempAverage / this.grades.length;
        return tempAverage;//.toFixed(2);
    }

    getAllLetterGrades (){
        let tempArray=[];
        for (let p in this.grades){
            tempArray[p]=this.getGrade( this.grades[p]);

        }
        return tempArray;
    }


    getAvgLetterGrade() {
        let temp = this.getGrade(this.Average);
        return temp;
    }

    getGrade(score) {
        if (score >= 90) {

            return "A";
        }
        else if (score >= 80) {

            return "B";
        }
        else if (score >= 70) {
            return "C";
        }
        else if (score >= 60) {
            return "D";
        }
        else {
            return "F";
        }
    }

    addGrade(grade) {
        this.grades.push(grade);

    }

}

export {Student}