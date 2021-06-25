import React, { Component } from 'react';
import { } from 'react-bootstrap';
import '../assets/css/bootstrap.min.css';

class Registration extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" /> Remember me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Registration;