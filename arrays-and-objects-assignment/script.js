//task 1
let book = {
    title: "Rich Dad Poor Dad",
    author: "Robert",
    pages: 100,
    isRead: false,
};
console.log(book.title);
console.log(book["title"]);
console.log(book.author);
console.log(book["author"]);
console.log(book.pages);
console.log(book["pages"]);
console.log(book.isRead);
console.log(book["isRead"]);
book.isRead = true;
book.genre = "personal finance";
console.log(book);

//task 2
let movies = [
    {title: "Titanic", director: "Joshua", year: 1995},
    {title: "UP", director: "Michael", year: 2003},
    {title: "AOT", director: "Isayama", year: 2005},
];
console.log(movies[1].title);
movies.push({title: "Solo Levelling", director: "Yamashita", year: 2020});
movies[0].year = 2023;
console.log(movies);

//task 3
let student = {
    name: "Mark Jason Soy",
    age: 21,
    subjects: ["Assembly", "Research", "Rizal"],
};

console.log(student.subjects[0]);
student.subjects.push("Programming");
console.log(student);

//bonus task
let recipe = {
    name: "Tonkatsu",
    ingredients: [{name: "egg", quantity: 3}, {name: "flour", quantity: "1/2 cup"}],
    isVegetarian: false,
};

recipe.ingredients.push({name: "salt", quantity: "1 teaspoon"});
console.log(recipe.ingredients[1].name);
console.log(recipe);