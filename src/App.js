import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'; 
import profile from './assets/profile.png'
class App extends Component {
    state = { displayBio: false };
    


toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
    // this.state.displayBio = !this.state.displayBio; do not modify state directly
}

render () {
    return (
        <div>
            <img src={profile} alt = 'profile' className='profile' />
            <h1>Hello!</h1>
            <p>My name is James. I'm a Front-end Developer</p>
            <p>I'm always looking for more meaningful projects</p>
            {this.state.displayBio ?(
        <div>
            <p>I live in San Carlos, I write code after work everyday.</p>
            <p>My favorite language is JS, I think React JS is an excellent framework to have in one's toolbelt.</p>
            <p>When I'm not coding, I'm an Electrician, Wildlife Photographer and Skateboarder.</p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
        </div>
    ) : (
        <div>
            <button onClick={this.toggleDisplayBio }>Read more</button>
        </div>
    )
    }
    <hr />
    <Projects />
    <hr />
    <SocialProfiles />
        </div>
    )
}
}

export default App;
