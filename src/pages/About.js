import React from 'react';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../components/Main';

const markdown = raw('../data/about.md');

const About = () => (
  <Main>
    <article id="about" className="active">
      <h2 className="major">About Me</h2>
      <section>
        <ReactMarkdown children={markdown}/>
      </section>
    </article>
  </Main>
);

export default About;