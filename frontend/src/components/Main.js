import React from 'react';
import image from '../assets/pic1.png';


const Main = () => {
    return (
        <div className='page1'>
            <div className='main'>
                <div className='content'>
                    <h2>Wisdom in Waves:Dive into Quizzes</h2>
                    <p>Explore the realm of knowledge at Quizify.</p>
                    <p>Quizzes that entertain, challenge, and enlighten</p>
                    <button type='button'>Create Quiz</button>
                </div>
                <div className='image'>
                    <img src={image} alt='front pic' height={400} />
                </div>
            </div>
            <div className='page2'>
                <div className='section'>
                    <h1>Features Of Quizify</h1>
                </div>
                <div className='features'>
                    <div className='content1'>
                        <h3>User Authentication</h3>
                        <p>Allow users to create accounts or
                            log in via social media accounts to track their progress and scores.</p>
                    </div>
                    <div className='content1'>
                        <h3>Accessibility Features</h3>
                        <p>Implementing features such as screen readers and adjustable text size ensures that the app is accessible to users with disabilities,
                            promoting inclusivity and widening the app's user base.</p>
                    </div>
                    <div className='content1'>
                        <h3>Timer</h3>
                        <p> Adding a timer to quizzes adds excitement and challenge,
                            encouraging users to answer questions quickly and accurately.</p>
                    </div>
                    
                    <div className='content1'>
                        <h3>Leaderboard</h3>
                        <p>Display a leaderboard showing top scores either globally or within specific categories.
                             This encourages competition and engagement among users..</p>
                    </div>
                    <div className='content1'>
                        <h3>Multi-platform Support</h3>
                        <p>Develop the app to work seamlessly across multiple platforms 
                            such as Android, and web browsers to reach a wider audience.</p>
                    </div>
                    
                </div>

            </div>
        </div>



    );
}
export default Main;