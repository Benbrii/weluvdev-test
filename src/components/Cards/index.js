import React, { Component } from 'react';
import { connect } from "react-redux";
import "./style.css";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class ConnectedCards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { jobs } = this.props;

        return (
            <>
                <h1 className="cards_title" >Jobs !</h1>
                {
                    jobs.length > 0 && jobs !== undefined ?
                        jobs.map(data => (
                            <div className="cards_container">
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{data.title}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Début du contrat : {data.details.start}</CardSubtitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Contrat : {data.details.contract}</CardSubtitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Années d'expérience requis : {data.details.requiredExperience}</CardSubtitle>
                                        <CardText>{data.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))
                        : null
                }
            </>
        );
    }
}

const mstp = state => {
    return {
        jobs: state.jobsInfo.jobs
    }
}

const Cards = connect(
    mstp
)(ConnectedCards)

export default Cards;