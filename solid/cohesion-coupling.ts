// Coupling: how much two classes interact depend on each other


function readCsv() {

}


function calculate() {
  readCsv();
}

// these two are highly coupled


// instead we can have a class that reads csv and calculates
// like a main method to call each of the methods

// cohesion: how much a class a functions, data belongs together