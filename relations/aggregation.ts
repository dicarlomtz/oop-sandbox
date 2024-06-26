// https://www.youtube.com/watch?v=0mcP8ZpUR38
// https://www.youtube.com/watch?v=8Jt9crSFd2Q
// https://medium.com/@bindubc/association-aggregation-and-composition-in-oops-8d260854a446

// Aggregation: is a relationship where one class can exist without each other
// it is a type of association

class Student {}

class Course {
  private students: Student[];
}

// if we destroy the Course, then students can still be alive
// This is a part of relationship, meaning that students are part of a course