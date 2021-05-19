import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import Main from '../components/Main';
import resumePdf from '../data/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => (
  <Main>
    <div className="wrapper">
      <div className="container">
        <header className="major">
          <h2>Resume</h2>
        </header>
        <section>
          <a href={resumePdf} target = "_blank" rel="noreferrer">
            <Document file={resumePdf}>
              <Page pageNumber={1} />
            </Document>
          </a>
        </section>
      </div>
    </div>
  </Main>
);

export default Resume;