import './UserDashboard.css';
//import mainLogo from '../asset/main-logo.png';
import {useNavigate} from 'react-router-dom';
import Banner from './Banner';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Popular from './Popular';
import TopRated from './TopRated';
import Upcoming from './Upcoming';

export const Context = createContext()
const UserDashboard = ()=>{
    const navigate = useNavigate();
    

    const [movieList, setMovieList] = useState([]);
    const [userName, setUserName] = useState("");
    const [bannerMovie, setBannerMovie] = useState({});

    

    const handleSignOut = ()=>{
        localStorage.removeItem("LoginCred")
        navigate('/signin')
    }

    useEffect(()=>{
        if(localStorage.getItem("LoginCred")){
            const res = JSON.parse(localStorage.getItem("LoginCred"))
            setUserName(res.username)
        }
        else{
            navigate('/signin')
        }
        return async()=>{
            const res = await axios.get("http://localhost:5000/movies").catch((err)=>console.log(err.message))
            console.log(res);
            setMovieList(res.data)
            setBannerMovie(res.data[0])
        }

        
    }, [])
    return (
        <>
           <div className='outer-container'>
                <div className='dashboard-header'>
                    <img src="asset/main-logo.png" alt="logo" className='top-logo'/>
                    <div className='userInfo'>
                        <p style={{'font-size':'1.2rem'}}>Welcome! {userName}</p>
                        <button type='button' className='dashboard-signout' onClick={handleSignOut}>SignOut</button>
                    </div>
                </div>
                <div className='movies-section'>
                    <div className='latest-movies'>
                        <Banner movie = {bannerMovie}/>
                    </div>
                    <Context.Provider value={movieList}>
                        <div className='popular-movies'>
                            <Popular/>
                        </div>
                        <div className='top-rated-movies'>
                            <TopRated/>
                        </div>
                        <div className='upcoming-movies'>
                            <Upcoming/>
                        </div>
                    </Context.Provider>
                </div>
           </div>
        </>
    )
}

export default UserDashboard;