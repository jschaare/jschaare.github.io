import React from 'react';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../components/Main';

const markdown = raw('../data/about.md');

const About = () => (
    <Main>
        <div className="wrapper">
            <div className="container">
                <header className="major">
                    <h2>About Me</h2>
                </header>
                <section>
                    <ReactMarkdown children={markdown}/>
                </section>
            </div>
        </div>
    </Main>
);

export default About;

/*
<p>
                        My name is Justin, and I'm a software engineer. BLAH BLAH BLAH
                        BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH 
                        BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH 
                        BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH 
                        BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH 
                    </p>
*/