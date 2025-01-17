import React, { Component } from 'react'
import UserConsumer from '../context';
import {useParams} from 'react-router-dom';
import axios from "axios";

export function withRouter(Children) {
    return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />
    }
  }

class UpdateUser extends Component {
    state = {
        name:"",
        department:"",
        salary:"",
        error:false
    }
    componentDidMount = async()=> { 
        const id =  this.props.match.params.id;
        const response = await axios.get(`http://localhost:3004/users/${id}`);
        const {name, salary, department} = response.data;
        this.setState({
            name,
            salary,
            department
        });
    }
    changeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }   
    validateForm = () => {
        const {name,salary,department} = this.state;
        if(name ==="" || salary==="" || department==="")
        {
            return false;
        }
        return true;
    }
    updateUser = async(dispatch,e) =>{
        e.preventDefault();
        //UpdateUser
        const {name,salary,department} = this.state;
        const updatedUser = {
            name,
            salary,
            department
        };

        if(!this.validateForm())
        {
            this.setState({
                error:true
            })
            return;
        }


        const id =  this.props.match.params.id;
        const response = await axios.put(`http://localhost:3004/users/${id}`,updatedUser);
        dispatch({type:"UPDATE_USER",payload:response.data});
        
        //Redirect
        window.location.replace("/");
    }    
  render() {

    const {name, salary, department,error} = this.state;
    return <UserConsumer>
        {
            value => {
                const {dispatch} = value;
                return (
                    <div className="col-md-8 mb-4">
                        <div className="card">
                              <div className="card-header">
                                  <h4>Update User Form</h4>
                              </div>
                              <div className="card-body">
                                  {
                                      error?<div className="alert alert-danger">Lütfen bilgilerinizi kontrol edin!</div>:null
                                  }
                                  <form onSubmit={this.updateUser.bind(this,dispatch)}>
                                      <div className='form-group'>
                                          <label htmlFor='name'>Name</label>
                                          <input
                                              type="text"
                                              name="name"
                                              id="id"
                                              placeholder="Enter Name"
                                              className="form-control"
                                              value = {name}
                                              onChange = {this.changeInput}
                                          />
                                      </div>
                                      <div className='form-group'>
                                          <label htmlFor='department'>Department</label>
                                          <input
                                              type="text"
                                              name="department"
                                              id="department"
                                              placeholder="Enter Department"
                                              className="form-control"
                                              value = {department}
                                              onChange = {this.changeInput}
                                          />
                                      </div>
                                      <div className='form-group'>
                                          <label htmlFor='salary'>Salary</label>
                                          <input
                                              type="text"
                                              name="salary"
                                              id="salary"
                                              placeholder="Enter Salary"
                                              className="form-control"
                                              value = {salary}
                                              onChange = {this.changeInput}
                                          />
                                      </div>
                                      <button type='submit' className='btn btn-danger btn-block'>Update User</button>
                                  </form>
                              </div>
                        </div>
                    </div>
                  )
            }
        }
    </UserConsumer>

  
  }
}

export default withRouter(UpdateUser);