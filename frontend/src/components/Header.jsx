import React from 'react';

const Header = () => {
    return(
        <div className="header">
            <div className='heading'>
                <h1>Quizify</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href='/'>Enter Code</a></li>
                    <li><a href='/signup'>Sign up</a></li>
                    <li><a href='/login'>Log in</a></li>
                </ul>
            </nav>   
        </div>
    );
}
export default Header;