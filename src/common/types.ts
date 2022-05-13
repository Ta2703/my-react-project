// import { type } from "os";
import React from "react";
import { ConditionalExpression } from "typescript";

// type User = {
//     id: number;
//     email: string;
//     first_name: string;
//     last_name: string;
//     avatar: string;
//     age: number;
// };

// type Products = {
//     id: number;
//     name: string,
//     price: 6,
//     currency: string,
//     ingredients: string [],
//     type: string,
//     available: true
// }

// type Users = Array<User>;

// const users: Users = [
//     {
//         "id": 7,
//         "email": "michael.lawson@reqres.in",
//         "first_name": "Michael",
//         "last_name": "Lawson",
//         "avatar": "https://reqres.in/img/faces/7-image.jpg",
//         "age": 23
//     },
//     {
//         "id": 8,
//         "email": "lindsay.ferguson@reqres.in",
//         "first_name": "Lindsay",
//         "last_name": "Ferguson",
//         "avatar": "https://reqres.in/img/faces/8-image.jpg",
//         "age": 20
//     }
// ];

// const products = [
//     {
//         id: 1,
//         name: "Burger Premium",
//         price: 6,
//         currency: "euro",
//         ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
//         type: "burger",
//         available: true
//     },
//     {
//         id: 2,
//         name: "Burger Lite",
//         price: 2.3,
//         currency: "euro",
//         ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
//         type: "burger",
//         available: true
//     },
// ];


// type GetUser = (id: number, users: Users) => User | undefined
// const getUser: GetUser = (id: number, users: Users) => {
// return users.find((user) => user.id === id) };


// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

    // 1. Создать строку из названий стран через запятую
    // 2. Посчитать общее количнство людей в данном массиве стран.
    // 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
    // 4. Получить массив валют.
    // 5. Получить массив городов, отсортированных в алвавитном порядке.
    // 5. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

    type Country = {
      country: string;
      abbreviation: string;
      city: string;
      currency_name: string;
      population: number;
    };

    type Countries = Country[];
    const countries: Countries = [
      {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959,
      },
      {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750,
      },
      {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050,
      },
    ];
    
  // 1. Создать строку из названий стран через запятую
    type StringsConcat = (countries: Country[]) => string;
    
    const stringsConcat: StringsConcat = (countries) => {
      let names = "";
      countries.forEach((i) => {
        names += `${i.country}`;
      });
      return names;
    };
    
    console.log(stringsConcat(countries));

    // 2. Посчитать общее количнство людей в данном массиве стран.

    type PopulationSum = (countries: Country[]) => number;
    const populationSum: PopulationSum = (arr) => {
        const sum =arr.reduce((acc, cur) => acc+ cur.population, 0);
        return sum };
        console.log(populationSum(countries));

      // 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
type SortByCountries = (countries: Country[]) => Countries
const sortByCountries: SortByCountries = (countries) => 
       countries.sort((a: Country, b: Country) => a.country > b.country ? 1 : -1)
console.log(sortByCountries(countries));

   // 4. Получить массив валют.
   type CurrencyArray = (countries: Country[]) => string [] 
   const currencyArray: CurrencyArray = (countries) => {
       let currency: string[] = []
       countries.forEach((item: Country) => currency.push(item.currency_name))
       return currency
   };

   console.log(currencyArray(countries))

    // 5. Получить массив городов, отсортированных в алвавитном порядке.
    type SortCity = (countries: Country[]) => string[];
    const sortCity: SortCity = (arr) => {
        let res = arr.map((a) => a.city).sort();
        return res;
    }
    console.log(sortCity(countries));

    // 5. Создать функцию, которая бы принимала массив стран 
    //и отдавала бы среднее количество людей в этих странах.
type AveragePopulation = (countries: Country[]) => number;
const averagePopulation: AveragePopulation = (arr) => {
    let res = arr.map((a) => a.population).reduce((a,b) => a + b, 0) / arr.length;
    return res;
}
console.log(averagePopulation(countries));

///////////////////////////////////////////////////////////////////////////
ДЗ:
type User = {
    name: string;
    phone: string,
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean; 
};

type Users = User[];

const users: Users = [
        {
            name: "Harry Felton",
            phone: "(09) 897 33 33",
            email: "felton@gmail.com",
            animals: ["cat"],
            cars: ["bmw"],
            hasChildren: false,
            hasEducation: true
            
        },
        {
            name: "May Sender",
            phone: "(09) 117 33 33",
            email: "sender22@gmail.com",
            hasChildren: true,
            hasEducation: true
        },
        {
            name: "Henry Ford",
            phone: "(09) 999 93 23",
            email: "ford0@gmail.com",
            cars: ["bmw", "audi"],
            hasChildren: true,
            hasEducation: false
        }
    ];

// Задачи

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

//     1. Создать строку из имен пользователей через запятую
type StringsName = (users:User[]) => string;
    
const stringsName: StringsName = (users) => {
  let names = "";
  users.forEach((i) => {
    names += `${i.name}`;
  });
  return names;
};

console.log(stringsName(users));

//2. Посчитать общее количнство машин у пользователей
type CarsSum = (users:User[]) => number;
const carsSum: CarsSum = (arr) => {
    const sumCars = arr.map((i)=> i.cars).slice();
    return sumCars.length;
}
    console.log(carsSum(users));
    // 3. Создать функцию, которая бы принимала массив пользователей 
    //и отфильтровывала пользователей на наличие образования
    type SortEducation = (users: User[]) => User[];
    const sortEducation: SortEducation = (arr) => {
        return arr.filter((i) => i.hasEducation);
    }
    console.log(sortEducation(users));

    //     4. Создать функцию, которая бы принимала массив пользователей 
    //и отфильтровывала пользователей на наличие животных
    type SortAnimals = (users: User []) => User[];
    const sortAnimals: SortAnimals = (arr) => {
        return arr.filter((i) => i.animals);
    }
    console.log(sortAnimals(users));

    //5. Создать функцию, которая бы принимала массив пользователей 
    //и отдавала бы  строку с названиями марок автомобилей через запятую

    type SortCars = (users: User[]) => string;
    const sortCars: SortCars = (users) => {
        let usersCars = "" ;
        users.forEach((i) => {
            if(i.cars) {
                i.cars.forEach((car) => {
                    usersCars += `${car}, `;
                });
            }
        });
        return usersCars;
    };
    console.log(sortCars(users));

//     ОПЦИОНАЛЬНОЕ ДЗ

//  Протипизировать данные 
// ```javascript

// 1;

type Faculty = {
    id: number;
    faculty:string;
    subjects: string[];
    countStudents: number;
};

type Faculties = Faculty [];

const faculties: Faculties = [
    {
  id: 1,
  faculty: "History department",
  subjects: ["The World History", "History of Rome"],
  countStudents: 44,
 }, 
 {
  id: 2,
  faculty: "Department of Biology",
  subjects: ["biology", "chemistry"],
  countStudents: 50,
 },
 {
  id: 3,
  faculty: "Faculty of Mathematics",
  subjects: ["mathematics", "geometry", "trigonometry"],
  countStudents: 72,
 },
 {
  id: 4,
  faculty: "Faculty of Design",
  subjects: ["ui", "ux", "graphic design"],
  countStudents: 37,
 }
];

// 2;

type Movie = {
    id: number;
    title: string;
     year: number;
     released: string;
     runtime: string;
     genre: string[];
    director: string;
     writer: string;
     actors: string [];
     plot: string;
     country: string;
     poster: string;
     imdbRating: number;
     imdbVotes: number;
     type: string;
    boxOffice: string;
     production: string;
};
type Movies = Movie[];

const movies: Movies = [
    {
      id: 1,
      title: "Black Widow",
       year: 2021,
       released: "09 Jul 2021",
       runtime: "134 min",
       genre: ["Action", "Sci-Fi", "Adventure"],
      director: "Cate Shortland",
       writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
       actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
       plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
       country: "United States",
       poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
       imdbRating: 6.9,
       imdbVotes: 121932,
       type: "movie",
      boxOffice: "$138,027,361",
       production: "Marvel Studios",
        },
    {
      id: 2,
       title: "Harry Potter and the Deathly Hallows: Part 2",
       year: 2011,
       released: "15 Jul 2011",
       runtime: "130 min",
       genre: ["Adventure", "Drama", "Fantasy"],
       director: "David Yates",
       writer: "Steve Kloves, J.K. Rowling",
       actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
       country: "United Kingdom, United States",
       poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",

       imdbRating: 8.1,
       imdbVotes: 790377,
      type: "movie",
       boxOffice: "$381,409,310",
       production: "Heyday Films, Moving Picture Company, Warner Bros.",
   },
];

