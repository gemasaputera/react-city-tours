import React, { Component } from 'react'
import Tour from './../Tour';
import './TourList.css';
import { tourData } from './../../tourData';

export default class TourList extends Component {
    state = {
        tours: tourData
    };

    handleRemoveTour = id => {
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours:sortedTours
        });
    };

    render() {
        const { tours } = this.state;

        return (
            <section className="tourList">
                {
                    tours.map(tour => (
                    <Tour 
                        key={tour.id} 
                        tour={tour}
                        removeTour={this.handleRemoveTour}/>
                    ))
                }
            </section>
        )
    }
}
