import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export const Welcome = () => {
    return <Jumbotron>
        <h1>Welcome to StriveBooks</h1>
        <p>
        This is the subtitle of StriveBooks.
        </p>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
}