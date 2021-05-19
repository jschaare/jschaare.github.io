import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import Main from '../components/Main';
import resumePdf from '../data/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => (
  <Main>
    <article id="resume" className="active">
      <h2 className="major">Resume</h2>
      <span>
        <a href={resumePdf} target = "_blank" rel="noreferrer">
          <Document file={resumePdf}>
            <Page pageNumber={1} />
          </Document>
        </a>
      </span>
    </article>
  </Main>
);

export default Resume;