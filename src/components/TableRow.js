import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('https://simple-contact-crud.herokuapp.com/contact/'+this.props.obj.id)
            .then( res => {
              alert(res.data.message);
              window.location.reload();
              console.log('Deleted')
            })
            .catch((res, err) => {
              alert(res.data.message);
              console.log(err)
            })
    }

    render() {
        return (
            <tr>
              <td>
                {this.props.obj.firstName}
              </td>
              <td>
                {this.props.obj.lastName}
              </td>
              <td>
                {this.props.obj.age}
              </td>
              <td>
                <img className="img-responsive table-img-contact" src={this.props.obj.photo} alt="" />
              </td>
              <td>
                <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
              </td>
              <td>
                <button onClick={this.delete} className="btn btn-danger">Delete</button>
              </td>
            </tr>
        );
      }
}

export default TableRow;