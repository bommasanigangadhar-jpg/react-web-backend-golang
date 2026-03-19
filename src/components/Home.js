import Ticket from './../images/movie_tickets.jpg';

const Home = () => {
    return(
        <>
        <div className="container">
            <h2>Find a movie to watch tonight!</h2>
            <hr />
            <img src={Ticket} alt='movie tickets'></img>
        </div>
        </>
    )
}

export default Home;