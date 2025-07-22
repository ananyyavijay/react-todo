import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Learn React",
            completed: false,
        }
    ],
    addTodo: (todo, id) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},
    updateTodo: () => {},
});

export const useTodo = () => {
    return useContext(todoContext);         
}

export const TodoProvider = todoContext.Provider;