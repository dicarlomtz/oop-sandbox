// https://www.youtube.com/watch?v=0mcP8ZpUR38
// https://www.youtube.com/watch?v=8Jt9crSFd2Q
// https://medium.com/@bindubc/association-aggregation-and-composition-in-oops-8d260854a446

// Composition: is a relationship where one class cannot exist without
// it is a type of association

class Leg {}

class Animal {
  private leg: Leg;
}

// if we destroy the animal, then the Leg will also be destroyed
// This is part of relationship meaning leg is part of an animal