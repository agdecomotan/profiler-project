export class Student {
    id: number;
    number: string;
    firstName: string;
    lastName: string;
    yearLevel: string;
    program: string;
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
