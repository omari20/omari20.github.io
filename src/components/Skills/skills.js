import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I specialize in transforming data into actionable insights that drive strategic
                    decision-making and foster business growth. With extensive experience across diverse
                    industries, I bring a comprehensive understanding of how data can be leveraged to identify
                    opportunities, mitigate risks, and optimize performance. By harnessing the power of analytics,
                    I empower organizations to make informed decisions that propel them toward their goals 
                    and ensure sustained success in today's competitive landscape</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Analytics</h2>
                        <p>Using research skills, ETL processes and tools like Excel, Python libraries like Pandas, Numpy, Matplotlib, I extract valuable insights, drive informed decisions, and optimize performance </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Visualization</h2>
                        <p>With a nack for UX design, I transform data into valuable insights by creating user-friendly dashboards on BI tools like Power BI, Tableau and Looker.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Agile Product Management</h2>
                        <p>Insights are nothing without action. As a certified product owner with many years of experience, 
                        I drive the transformation of insights into action by managing the development lifecycle of applications</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Change Management</h2>
                        <p>The business landscape is continually evolving, and so should business processes. I expertly draw out current processes
                        and gather requirements to re-engineer them. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;