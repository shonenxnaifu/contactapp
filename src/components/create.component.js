import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeUrlImage = this.onChangeUrlImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            firstName: '',
            lastName: '',
            age:'',
            photo:'',
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })  
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })  
    }

    onChangeUrlImage(e) {
        this.setState({
            photo: e.target.value
        })  
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            photo: this.state.photo
        };

        axios.post('https://simple-contact-crud.herokuapp.com/contact', obj)
            .then(res => {
                alert(res.data.message);
                this.props.history.push('/index');
                console.log(res.data);
            });
        
        this.setState({
            firstName: '',
            lastName: '',
            age:'',
            photo:'',
        });
    }
      
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Contacts</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Fisrt Name:  </label>
                        <input type="text" className="form-control"
                        value={this.state.firstName}
                        onChange={this.onChangeFirstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" className="form-control"
                        value={this.state.lastName}
                        onChange={this.onChangeLastName}/>
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text" className="form-control"
                        value={this.state.age}
                        onChange={this.onChangeAge}/>
                    </div>
                    <div className="form-group">
                        <label>Url image: </label>
                        <input type="text" className="form-control"
                        value={this.state.photo}
                        onChange={this.onChangeUrlImage}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save Contact" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}