import React from 'react';
import { black } from 'ansi-colors';
export default class About extends React.Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src="images/profilepicture.jpg" alt="profile" />
            </div>
            <div className="nine columns main-col">
               <h1>About Me</h1>
               <p style={{fontSize: 18}}>
               {
                  resumeData.aboutme
               }
               </p>
               <div className="row">
                  <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span style={{fontSize: 16}}>{"If you're interested in working together you can reach me in the following:"}</span>
                    <br></br>
                    <span style={{fontSize: 16}}>{`kevin.cbdev@gmail.com`}</span>
       				</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}