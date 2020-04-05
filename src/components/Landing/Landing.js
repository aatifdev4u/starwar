import React, { useState, useEffect } from 'react'
import { BASE_API_URL } from '../Config';
import './Landing.css';
import Planet from './Section/Planet';
import { useSelector } from 'react-redux';
import SearchBar from './Section/SearchBar';
import Loadmore from './Section/Loadmore';
import NoResultsFound from './Section/NoResultsFound';
import WarningMsg from './Section/WarningMsg';

function Landing() {
    const [Planets, setPlanets] = useState([])
    const [nextPage, setNextPage] = useState('')
    const [countAPI, setCountAPI] = useState(0);
    const [counter, setCounter] = useState(0);
    const [blockstatus, setBlockstatus] = useState(false)
    const [resultsfound, setResultsfound] = useState(true)

    let user = useSelector(state => state.user);
    const { username } = user;
    // Set a timer
    useEffect(() => {
      const interval = setInterval(() => {
         
        setCounter(counter => counter + 1);
      }, 1000);

      if(counter === 60){
        setCounter(0)
        setCountAPI(0)
        setBlockstatus(false)
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [counter]);
  

    // will search the planet based on the planet search term
    const searchPlanet = (endpoint, loadmore = false)=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(response =>{
            if(response.results.length && response.count > 0){

                if(loadmore){
                    setPlanets([...Planets, ...response.results]);
                }else{
                    setPlanets(response.results)
                }
                
                if(response.next){
                    setNextPage(response.next)
                }else{
                    setNextPage(null)
                }
            }else{
                setPlanets([])
                setNextPage('')
                setResultsfound(false)
            }
        })
    }

    const handleChange = (e)=>{
        setPlanets([])
        setResultsfound(true)
        if(e.target.value){

            if(username !== 'Luke Skywalker' &&  countAPI >= 15){
                setBlockstatus(true)
            }else{
                let endpoint = `${BASE_API_URL}planets/?search=${e.target.value}`;
                searchPlanet(endpoint)
            }

        }else{
            setNextPage('')
        }
    }

    const handleSearch = (searchTerm)=>{
        setPlanets([])
        setCountAPI(countAPI => countAPI + 1)
        if(searchTerm){
            
            if(username !== 'Luke Skywalker' &&  countAPI >= 15){
                setBlockstatus(true)
            }else{
                let endpoint = `${BASE_API_URL}planets/?search=${searchTerm}`;
                searchPlanet(endpoint)
            }

        }else{
            setPlanets([])
            setNextPage('')
        }
        
    }

    const handleLoadmore = ()=>{
        searchPlanet(nextPage, true)
    }

    const renderPlanet = Planets.length > 0 && Planets.map((planet, index)=>(
        <Planet                
            planet={planet}
            key={index}
        />
    ))
    return (
        <div className="landing-container">
            <WarningMsg
                blockstatus={blockstatus}
            />
            <SearchBar
                handleSearch={handleSearch}
                handleChange={handleChange}
                blockstatus={blockstatus}
            />
            <div className="flex-container">
                {renderPlanet}
            </div>
            <NoResultsFound
                resultsfound={resultsfound}
            />
            <Loadmore
                nextPage={nextPage}
                handleLoadmore={handleLoadmore}
            />
        </div>
    )
}

export default Landing
