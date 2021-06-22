import React, { Component } from 'react';
import { connect } from "react-redux";
import "./style.css";

import {
    Button,
    ModalHeader, ModalFooter,
    Form, Label, Input,
    FormGroup
} from 'reactstrap';

import { addJobToFirebase } from "../../../actions/jobs.action";

class ConnectedAddJobModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { title, description } = this.state;

        if (title.length > 0) {
            await this.props.addJobToFirebase(title, description);
            window.location.reload(false);
        } else {
            alert("Le titre d'un job ne peut pas être vide !");
        }

        this.setState({
            title: "",
            description: ""
        });
    }

    render() {
        return (
            <div>
                <ModalHeader>
                    Ajouter un job
                </ModalHeader>
                <br />
                <Form
                    className="modal_form_container"
                    onSubmit={this.handleSubmit}
                    id="addForm"
                    encType="multipart/form-data"
                >
                    <FormGroup>
                        <Label for="exampleTitle">Job</Label>
                        <Input
                            type="title"
                            name="title"
                            id="exampleTitle"
                            placeholder="Indiquer le titre du Job à pourvoir"
                            onChange={e => {
                                this.setState({ title: e.target.value });

                                e.preventDefault();
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description du job !</Label>
                        <Input type="textarea" name="description" id="description" onChange={e => {
                            this.setState({ description: e.target.value });
                            e.preventDefault();
                        }} />
                    </FormGroup>

                    <ModalFooter>
                        <Button color="success" type="submit">Valider</Button>
                    </ModalFooter>
                </Form>
            </div>
        );
    }
}

const mdtp = dispatch => ({
    addJobToFirebase: (title, description) =>
        dispatch(addJobToFirebase(title, description)),
});

const AddPosteModal = connect(
    null,
    mdtp
)(ConnectedAddJobModal);

export default AddPosteModal;