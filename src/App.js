import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/contact';
import Footer from './components/Footer';
import resume from './cv';

class App extends Component {
    render() {
        return(
            <div className="App">
                <Header resume={resume}/>
                <About resume={resume}/>
                <Resume resume={resume}/>
                <Contact resume={resume}/>
                <Footer resume={resume}/>
            </div>
        );
    };
};

export default App;

