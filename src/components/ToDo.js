import React from "react";
import PropTypes from "prop-types";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const ToDo = ({title}) => <ListGroupItem>{title}</ListGroupItem>;

ToDo.propTypes = {
    title: PropTypes.string.isRequired
};

export default ToDo;
