export class Student {
    id: number;
    studentNumber: string;
    firstName: string;
    lastName: string;
    yearLevel: string;
    program: string;
    email: string;
    dateCreated: string;
    gender: string;
    grades: Grade[]
}

export class Course {
    id: number;
    courseNumber: string;
    title: string;
    specialization: string;
    credit: string;
    active: boolean;
}

export class Setting {
    id: number;
    name: string;
    value: string;
}

export class Grade {
    id: number;
    courseId: number;
    studentId: number;
    title: string;
    value: string;
    term: string;
    year: string;
    courseSpecialization: string;
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    username: string;
    password: string;
}

export class Profile {
    id: number;
    dateCreated: string;
    initialDate: string;
    finalDate: string;
    initialResultRank: string;
    initialResult1: string;
    initialResult2: string;
    initialResult3: string;
    resultRankLabel: string;
    result1Label: string;
    result2Label: string;
    result3Label: string;
    finalResultRank: string;
    studentChoice: string;
    finalResult1: string;
    finalResult2: string;
    finalResult3: string;
    status: string;
    studentId: string;
    userId: string;
    sdExam: string;
    dsExam: string;
    msExam: string;
    sdInterview: string;
    dsInterview: string;
    msInterview: string;
    studentFirstName: string;
    studentLastName: string;
    studentNumber: string;
    grades: Grade[];
}

export class Configuration {
}



