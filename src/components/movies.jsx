import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies: getMovies(),
     } 

     handleDelete = (movie) => {
        console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies: movies})
     }

    render() {
        
        if (this.state.movies.length === 0 ) <p>There are no movies to display</p>
        
        return (
        <div>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
            <thead>
                <tr> 
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button className='btn btn-danger btn-sm' onClick={() => this.handleDelete(movie)}>Delete</button></td>
                </tr>
                ))}
            </tbody>
        </table>    
            </div>
        );
    }
}
 
export default Movies;