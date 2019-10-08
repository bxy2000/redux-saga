import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Route} from "react-router-dom";
import Navigation from './components/Navigation';
import AddToDo from "./containers/AddToDo";
import ToDoListContainer from "./containers/ToDoListContainer";


function App() {
    return (
        <Container>
            <Row className={"row"}>
                <Col xs={12}>
                    <h1>To Do List</h1>
                    <Navigation/>
                    <Route exact path="/" component={ToDoListContainer}/>
                    <Route exact path="/new-item" component={AddToDo}/>
                </Col>
            </Row>
        </Container>
    )
}

export default App;
