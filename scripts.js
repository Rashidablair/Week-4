class Movie {
    constructor (name, category){
        this.name = name;
        this.category = category;
    }
    describe() {
        return `${this.name} is a ${this.category}.`
    }
    }


class MovieTheatre {
    constructor(name) {
        this.name = name;
        this.movies = [];
    }
addMovie(movie) {
    if(movie instanceof Movie) {
        this.movies.push(Movie);
    } else {
        throw new Error(`You can only add an instance of movie. Argument is not a movie: ${Movie}`);
    }
}
describe() {
    return `${this.name} has ${this.movies.length} movies.`;
}
}
class Menu {
    constructor() {
        this.movietheatres = [];
        this.selectedmovietheatre = null;
    }
start() {
    let selection = this.showMainMenuOptions();
    while(selection !=0) {
        switch (selection) {
            case '1':
                this.createMovieTheatre();
                break;
                case '2':
                    this.viewMovieTheatre();
                    break;
                    case '3':
                        this.deleteMovieTheatre();
                        break;
                        case '4':
                            this.displayMovieTheatres();
                            break;
                        default:
                            selection = 0;
        }
        selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
}
showMainMenuOptions() {
    return prompt(`
    0)exit
    1) create new MovieTheatre
    2) view MovieTheatre
    3) delete MovieTheatre
    4) display MovieTheatre
`);
}
showMovieTheatreMenuOptions(movieInfo) {
    return prompt(`
    0) back
    1) create movie
    2) delete movie
    --------------------
    ${movieInfo}
    `);
}

displayMovieTheatres() {
    let movietheatresString = ' ';
    for (let i = 0; i < this.movietheatres.length; i++) {
        movietheatreString += i + ')' + this.movietheatres[i].name + '\n'
    }
    alert(movietheatresString);
}
createMovieTheatre() {
    let name = prompt('Enter name for new movie theatre');
    this.movietheatres.push( new MovieTheatre(name));
}
viewMovieTheatre() {
    let index = prompt('Enter the index of the movie theatre you wish to view:');
    if (index > -1 && index < this.movietheatres.length) {
        this.selectedmovietheatre = this.movietheatres[index];
        let description = 'Movietheatre Name: ' + this.selectedmovietheatre.name + '\n';

        for(let i = 0; i < this.selectedmovietheatre.Movies.length; i++) {
            description += i + ') ' + this.selectedmovietheatre.movies[i].name + ' - ' + this.selectedmovietheatre.mvoies[i].category + '\n';
        }

    let selection = this.showMovieTheatreMenuOptions(description);
    switch (selection) {
        case '1':
            this.createMovie();
            break;
            case '2':
                this.deleteMovie();
    }
}
}
createMovie(){
    let name = prompt('Enter name for new movie:');
    let category = prompt('Enter name for new category:');
    this.selectedmovietheatre.movies.push(new Movie(name, category));
}
deleteMovie() {
    let index = prompt('Enter the movie you wish to delete:');
    if ( index > -1 && index < this.selectedmovietheatre.movies.length) {
        this.selectedmovietheatre.movies.splice(index, 1);
    }
}
}
let menu = new Menu();
menu.start();
