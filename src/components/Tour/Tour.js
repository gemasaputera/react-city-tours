import React, { Component } from 'react';
import './Tour.css';

export default class Tour extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }
    render() {
        console.log('this.props', this.props)
        const { removeTour } = this.props;
        const { id, city, img, name, info } = this.props.tour;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="tour" />
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div> 
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span>
                    {this.state.showInfo && <p>{info}</p>}
                    </h5>
                </div>
            </article>
        )
    }
}
