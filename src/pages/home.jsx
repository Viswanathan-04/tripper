import { FaAngleDoubleRight, FaBus, FaCar, FaHome, FaHotel, FaLocationArrow, FaTrain } from 'react-icons/fa';
import {ImAirplane} from 'react-icons/im';
import './home.css';

function changeMode (mode){
    console.log(mode);
}

function Home()
{
    //const mode = "Flight";
    return(
        <>
            <div className='home-page'>
                <div className='home-page-1'>
                    <div className='travel-mode'>
                        <div className='travel-mode-1'>
                            <ImAirplane className='icon'></ImAirplane>
                            <button onClick={changeMode("Flight")}>Flight</button>
                        </div>
                        <div className='travel-mode-1'>
                            <FaTrain className='icon'></FaTrain>
                            <button onClick={changeMode("Train")}>Train</button>
                        </div>
                        <div className='travel-mode-1'>
                            <FaHome className='icon'></FaHome>
                            <button onClick={changeMode("Homestay")}>Homestay</button>
                        </div>
                        <div className='travel-mode-1'>
                            <FaBus className='icon'></FaBus>
                            <button onClick={changeMode("Bus")}>Bus</button>
                        </div>
                        <div className='travel-mode-1'>
                            <FaCar className='icon'></FaCar>
                            <button onClick={changeMode("Cabs")}>Cabs</button>
                        </div>
                        <div className='travel-mode-1'>
                            <FaHotel className='icon'></FaHotel>
                            <button onClick={changeMode("Hotels")}>Hotels</button>
                        </div>
                    </div>
                    <div className='home-1'>
                        <div className='search-div'>
                            <p>From</p>
                            <input type='text' placeholder='Delhi'required></input>
                        </div>
                        <div className='search-div-1'>
                            <p><FaAngleDoubleRight></FaAngleDoubleRight></p>
                        </div>
                        <div className='search-div'>
                            <p>To</p>
                            <input type='text' placeholder='Chennai' required></input>
                        </div>
                        <div className='search-div'>
                            <p>Date of Journey</p>
                            <input type='date' required></input>
                        </div>
                        <div className='search-div'>
                            <p>No of adults</p>
                            <input type='number' placeholder='1' required></input>
                        </div>
                        <div className='search-div'>
                            <p>No of children</p>
                            <input type='number' placeholder='1' required></input>
                        </div>
                    </div>
                    <div className='submit'>
                        <button className='submit-btn'>Submit</button>
                    </div>
                </div>

                <div className='home-page-2'>
                    <h1>Explore Loctions</h1>
                    <div className='cards'>
                        <div className='card-1'>
                            <img src='https://lp-cms-production.imgix.net/news/2019/06/taj-mahal.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>Taj Mahal</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://static.toiimg.com/photo/69144907/GettyImages-518256134.jpg?width=748&resize=4' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>Charminar</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://images.mapsofworld.com/allwonders/qutub-minar.jpg' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>Qutub Minar</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://image3.mouthshut.com/images/imagesp/925747858s.jpg' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>Lotus Temple</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://www.tripsavvy.com/thmb/D5sFa7KrCtce7Ev_4ZO4sSC_MOE=/2123x1412/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-149315271-591d7a8d3df78cf5fa007553.jpg' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>Meenakshi Amman Temple</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://th.bing.com/th/id/R.f6ed2b4b271ed5665acd7015bac6c143?rik=iuqZ1G9Q0hLSSw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-p5JzFR3AGAs%2fVjGzyredonI%2fAAAAAAAAN5I%2fTIrLe7egs7M%2fs1600%2f1538929_10203406797469740_981842042_n.jpg&ehk=%2b1ple%2fl2risAnIXFZXeAWqC45092Y0aXB%2f%2b1JGkvsCM%3d&risl=&pid=ImgRaw&r=0' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>Tada Falls</h2>
                        </div>
                    </div>
                </div>

                <div className='home-page-2'>
                <h1>Explore the World</h1>
                    <div className='cards'>
                        <div className='card-1'>
                            <img src='https://wallpapercave.com/wp/B1m4O1v.jpg' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>India</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://th.bing.com/th/id/OIP.ifiEjDhz1_JmZx0JCM08GQHaE8?pid=ImgDet&rs=1' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>United States of America</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://th.bing.com/th/id/OIP.VytlT_hrBpolVuCoeb1s8wHaE7?pid=ImgDet&rs=1' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>Australia</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://th.bing.com/th/id/R.f1d199c83abcba62c5fa7da6a50b62d7?rik=O60i0FSI81i0UA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4tx7AP70HcE%2fTVTRHo_Je2I%2fAAAAAAAAAI8%2fRK-BDMVKc14%2fs1600%2fTower_Bridge_at_Night_London_England.jpg&ehk=seIgNUOmxHIAyPkhMd5NokbuFnB6uVFcC9G%2fmdkH5E4%3d&risl=&pid=ImgRaw&r=0' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>United Kindom</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://www.frenchplanations.com/wp-content/uploads/2018/06/architecture-buildings-city-739407.jpg' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>France</h2>
                        </div>
                        <div className='card-1'>
                            <img src='https://th.bing.com/th/id/R.8367682b2b0f3de8cf9b8021960347ee?rik=ELCfersVXcbQVw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-j6CXQqwceTA%2fUuKEyoUZ7KI%2fAAAAAAAAAF8%2fQR5z6aEhMNM%2fs1600%2f%e2%80%a2Brandenburg%2bGate1.jpg&ehk=o95DLGc9hl6HplmNpmRM9%2f568mRlKdsZlLqPs0dnrLo%3d&risl=&pid=ImgRaw&r=0' alt='img-1'/>
                            <h2><FaLocationArrow className='card-land'></FaLocationArrow>Germany</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;