import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: "Book 1", author: "Auth 1", id: 1 },
		{ title: "Book 2", author: "Auth 2", id: 2 },
		{ title: "Book 3", author: "auth 3", id: 3 },
	]);
	const addBook = (title, author) => {
		const newBooks = [...books];
		setBooks([...books, { title, author, id: uuid() }]);
	};
	const removeBook = (id) => {
		const newBooks = [...books];
		const newList = books.filter((book) => book.id === !id);
		setBooks([newList]);
	};
	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
