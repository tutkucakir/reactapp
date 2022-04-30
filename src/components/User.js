import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserConsumer from '../context';
import axios from 'axios';
import {Link} from 'react-router-dom'

class User extends Component {
    state = {
        isVisible:false
    }
    /*constructor(props){
        super(props);

        this.state={
            isVisible : true
        }
    }*/

    /*
    constructor(props)
    {
        super(props);
        this.onClickEvent = this.onClickEvent.bind(this);
    }*/

    
    //onClickEvent(e){
        /*console.log(e.target);
        console.log("test");*/
        /*console.log(this);
            bind(this) => linkteki onclick içine eklemiştik
        */

        //console.log(this)
    //}
/*
    onClickEvent = (number,e) =>
    {
        //console.log(this);
        console.log(number);
    }
     <h4 className='d-inline' onClick={this.onClickEvent.bind(this,34)}>{name}</h4>
    */

     onClickEvent = (e) =>
     {
         this.setState({
             isVisible:!this.state.isVisible
         })
     } 

     onDeleteUser = async(dispatch,e) =>
     {
         const {id} = this.props;
         //DELETE Request
         await axios.delete(`http://localhost:3004/users/${id}`);
         //Consumer Dispatch
         dispatch({type:"DELETE_USER", payload:id})
     }

     componentWillUnmount()
     {
         console.log("Component Will Unmount");
         //bir şeyi kaldırmadan önce gelir. Delete userdan hemen önce gelir. ilişkili servisler kaldırılabilir vs.
     }

  render() {      
      //Destructiong
      const{id,name,department,salary}=this.props;
      const{isVisible}=this.state;
      return(
          <UserConsumer>
              {
                  value => {
                      const {dispatch} = value;
                      return (
                        <div className='col-md-8 mb-4'>
                            <div className='card' style={isVisible?{backgroundColor:"#62848d", color:"white"}:null}>
                              <div className='card-header d-flex justify-content-between'>
                                  <h4 className='d-inline' onClick={this.onClickEvent.bind(this,34)}>{name}</h4>
                                  <i onClick={this.onDeleteUser.bind(this,dispatch)} className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
                              </div>
                              {
                                  isVisible?
                                  <div className='card-body'>
                                  <p className='card-text'>Maaş: {salary}</p>
                                  <p className='card-text'>Departman: {department}</p>        
                                  <Link to={`edit/${id}`} className="btn btn-sm btn-dark btn-block">Edit User Data</Link>        
                                  </div>:null
                              }
                            </div>
                        </div>
                      )
                  }
              }
          </UserConsumer>
      )
/*     return (
      <div className='col-md-8 mb-4'>
          <div className='card'>
            <div className='card-header d-flex justify-content-between'>
                <h4 className='d-inline' onClick={this.onClickEvent.bind(this,34)}>{name}</h4>
                <i onClick={this.onDeleteUser} className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
            </div>
            {
                isVisible?
                <div className='card-body'>
                <p className='card-text'>Maaş: {salary}</p>
                <p className='card-text'>Departman: {department}</p>                
                </div>:null
            }
          </div>
      </div>
    ) */
  }
}



User.propTypes={
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default User;
