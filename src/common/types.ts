import { type } from "os";
import React from "react";

type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    age: number;
};

type Products = {
    id: number;
    name: string,
    price: 6,
    currency: string,
    ingredients: string [],
    type: string,
    available: true
}

type Users = Array<User>;

const users: Users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    }
];

const products = [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: "euro",
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
        type: "burger",
        available: true
    },
    {
        id: 2,
        name: "Burger Lite",
        price: 2.3,
        currency: "euro",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: "burger",
        available: true
    },
];


type GetUser = (id: number, users: Users) => User | undefined
const getUser: GetUser = (id: number, users: Users) => {
return users.find((user) => user.id === id) };
