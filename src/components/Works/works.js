import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/mkm.jpg';
import Portfolio2 from '../../assets/economical-research.jpg';

const Works = () => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">Below is a list of some projects that reflect my skills in Business Intelligence. To see the full process flow, please follow my GitHub link.</span>
            <div className="worksImgs">
                <div className="worksImgContainer">
                    <img src={Portfolio1} alt="Marketing Campaign Report" className="worksImg" />
                    <div className="btn-container">
                        <h3>Marketing Campaign Report</h3>
                        <button
                            className="btn btn-color-2 project1-btn"
                            onClick={() => openInNewTab('https://app.powerbi.com/view?r=eyJrIjoiMmU5YjY3YzQtMTI3YS00MjI5LWI2MmMtYmFiZWRlMGJhOWMwIiwidCI6ImM5ZmRhYmU1LTllZWQtNDY1ZC1hY2RmLWMyMjc2YzEyYTBjNiJ9')}
                        >
                        View
                        </button>
                        <button
                                className="btn btn-color-3 project1-btn"
                                onClick={() => openInNewTab('https://github.com/omari20/marketing_campaign_integrated_report/blob/main/README.md')}
                            >
                            GitHub
                        </button>
                    </div>
                </div>
                <div className="worksImgContainer">
                    <img src={Portfolio2} alt="Bank Loan Report" className="worksImg" />
                    <div className="btn-container">
                        <h3>Bank Loan Report</h3>
                        <button
                            className="btn btn-color-2 project1-btn"
                            onClick={() => openInNewTab('https://app.powerbi.com/view?r=eyJrIjoiZjllMGY1MGEtYmUxOC00MTAwLWFlNjgtOTQ2NGE5NzRkNzJhIiwidCI6ImM5ZmRhYmU1LTllZWQtNDY1ZC1hY2RmLWMyMjc2YzEyYTBjNiJ9&pageName=ReportSection]')}
                        >
                        View
                        </button>
                        <button
                                className="btn btn-color-3 project1-btn"
                                onClick={() => openInNewTab('https://example.com/another-report')}
                            >
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;