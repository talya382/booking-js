class MediaItem {
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
  }
  getSummary() {
    return `${this.title} (${this.year}) - ${this.genre}`;
  }
}

class Book extends MediaItem {
  constructor(title, year, genre,author, pageCount) {
    super(title, year, genre);
    this.author = author;
    this.pageCount = pageCount;
  }
  getSummary() {
    return `${this.title} ,"by",${this.author} "," ${this.genre}`;
  }
}

class Movie extends MediaItem {
  constructor(title, year, genre,director, durationMinutes) {
    super(title, year, genre);
    this.director = director;
    this.durationMinutes = durationMinutes;
  }
  getSummary() {
    console.log(
      `${this.title} directed by ${this.director} , ${this.durationMinutes} min`,
    );
  }
}
class Library {
  constructor() {
    this.items = []; // מערך שמחזיק אובייקטים מסוג MediaItem
  }
  addItem(item){
    this.items.push(item);
  }
  search(term){
  const lowerTerm = term.toLowerCase();
return this.items.filter((item)=>
item.title.toLowerCase().includes(lowerTerm))
  }
  listByGenre(genre){
      return this.items.filter(
      (item) => item.genre.toLowerCase() === genre.toLowerCase()
    );
  }
}
const lib = new Library();
lib.addItem(new Book("Dune", 1965, "Sci-Fi", "Frank Herbert", 412))

lib.addItem(new Movie("Dune", 2021, "Sci-Fi", "Denis Villeneuve", 155));

console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci-Fi"));
