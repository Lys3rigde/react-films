import React, {useState, useEffect} from "react"
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

function Main() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    
    const searchMovies = (str, type='all') => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?i=tt0133093&apikey=54d42248&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setMovies(data.Search)
            })
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt0133093&apikey=54d42248&s=matrix`)
        .then(response => response.json())
        .then(data =>  {
            setMovies(data.Search)
            setLoading(false)
        })
        .catch((err) => {
            console.error(err)
            setLoading(false)
        })
    }, [])

    {

        return (
            <main className="container content">
                <Search searchMovies={searchMovies} />
                {   
                    loading ? 
                    <Preloader />
                    :   
                    <Movies movies={movies} />
                }
            </main>
        )
    }

}

export {Main}