import React, { Component } from 'react';
import "./style.css";
import { connect } from "react-redux";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Modal
} from 'reactstrap';
import { getJobs } from "../../actions/jobs.action";

import AddJobModal from "../../components/Forms/AddJobModal";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ajoutationModalOpened: false,
        }
    }

    componentDidMount() {
        this.props.getJobs();
    }

    openAjoutationModal = () => {
        this.setState({
            ajoutationModalOpened: true
        })
    }

    closeAjoutationModal = () => {
        this.setState({
            ajoutationModalOpened: false
        })
    }

    render() {
        const { jobs } = this.props;
        const { ajoutationModalOpened } = this.state;

        return (
            <div>
                <h1 className="cards_title" >Jobs !</h1>
                <div className="cards_add_job_button">
                    <Button color="primary" onClick={() => this.openAjoutationModal()}>Ajouter un job</Button>{' '}
                </div>
                <div>
                    {
                        jobs !== undefined ?
                            jobs.map(data => (
                                <div className="cards_container" key={data.id}>
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
                            :
                            null
                    }
                </div>
                <div>
                    {
                        ajoutationModalOpened &&
                        <Modal isOpen={ajoutationModalOpened} toggle={this.closeAjoutationModal}>
                            <AddJobModal />
                        </Modal>
                    }
                </div>
            </div>
        );
    }
}

function mstp(state) {

    return {
        jobs: state.jobsInfo.alljobs
    };
}

function mdtp(dispatch) {
    return {
        getJobs: () => dispatch(getJobs())
    }
}

export default connect(mstp, mdtp)(Cards);