export class Student {
    id: number;
    studentNumber: string;
    firstName: string;
    lastName: string;
    yearLevel: string;
    program: string;
    email: string;
    dateCreated: string;
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

export class Grade {
    id: number;
    courseId: number;
    studentId: number;
    value: string;
    term: string;
    year: string;
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
    stageOneDate: string;
    stageTwoDate: string;
    stageOneResult: string;
    stageTwoResult: string;
    finalResult: string;
    status: string;
    studentId: string;
    userId: string;
}

export class Configuration {
}



