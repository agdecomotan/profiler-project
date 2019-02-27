export class Student {
    id: number;
    studentNumber: string;
    firstName: string;
    lastName: string;
    yearLevel: string;
    program: string;
    email: string;
    datecreated: string;
    grades: Grade[]
}

export class Course {
    id: number;
    number: string;
    title: string;
    specialization: string;
}

export class Grade {
    id: number;
    courseId: number;
    studentId: number;
    value: string;
}




