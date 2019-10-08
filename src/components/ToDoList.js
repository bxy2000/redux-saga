import React from "react";
import PropTypes from 'prop-types';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Jumbotron from "react-bootstrap/Jumbotron";
import ToDo from "./ToDo";

const ToDoList = ({toDoList}) => (
    <Jumbotron>
        <ListGroupItem>
            {toDoList.map((toDo, index) => (
                <ToDo key={index} {...toDo} />
            ))}
        </ListGroupItem>
    </Jumbotron>
);

ToDoList.propTypes = {
    toDoList: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default ToDoList

