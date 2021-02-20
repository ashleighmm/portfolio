import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/ashleigh.png';
import Social from '../components/Social';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>

                <ReactTypingEffect className="typingeffect" text={["I'm Ashleigh More-Hattia, full-stack developer, music lover and cat enthusiast."]} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}

export default Home;