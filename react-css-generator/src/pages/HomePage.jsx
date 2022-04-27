import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css'
const Homepage = () => {
    return (
        <div className='home'>
            <Link to={'/borderRadius'}>Radius</Link>
            <Link to={'/widthheight'}> Width Height</Link>
            <Link to={'/boxShadow'}>Box Shadow</Link>
            <Link to={'/textShadow'}>Text Shadow</Link>
            <Link to={'/font'}>Font</Link>
            <Link to={'/flexBox'}>Flex Box</Link>
            <Link to={'/transform'}>Transform</Link>
            <Link to={'/gradient'}>Gradient</Link>
        </div>
    );
}

export default Homepage;
