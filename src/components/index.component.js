import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {contacts: []};
    }

    componentDidMount(){
        axios.get('https://simple-contact-crud.herokuapp.com/contact')
            .then(response => {
                this.setState({ contacts: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        return this.state.contacts.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
            <h3 align="center">Business List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Pict</th>
                    <th colSpan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                { this.tabRow() }
                </tbody>
            </table>
            </div>
        )
    }
}