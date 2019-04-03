import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> 

                
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary static-top">
                    <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                    <i className="fa fa-shopping-cart cart-color"></i> :  {this.props.count}                                      
                                     </li>
                                     
                                </ul>
                            </div>
                        </div>
                        </nav>
                        </div>

                             
 

 
        );
    }
}



