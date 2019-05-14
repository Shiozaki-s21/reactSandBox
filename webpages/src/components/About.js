import React from 'react'
import { Component } from 'react'

import {AboutTitle, MyPicture, AboutMeDescription, AboutLink, LinkImage} from './Util'
import MyOwnPic from '../res/myOwnImg.png'
import GitIcon from '../res/GitIcon.gif'
import LinkedInIcon from '../res/LinkedIn Icon.png'
import MediumIcon from '../res/Medium icon.png'

class About extends Component {

    render() {
        return (
            <div>
              {/*title*/}
              <AboutTitle><em>About Me</em></AboutTitle>
              {/*picture*/}
              <MyPicture src={MyOwnPic}/>
              {/*Description*/}
              <AboutMeDescription>
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
              </AboutMeDescription>
              {/* Horizontal links */}
              <div>
                {/*git*/}
                <AboutLink href="https://github.com/Shiozaki-s21" color="#ffb13d" ><LinkImage src={GitIcon}/></AboutLink> |
                {/*linkdin*/}
                <AboutLink href="https://www.linkedin.com/in/takahashi-kazuya-520347164/" color="#0067c1"><LinkImage src={LinkedInIcon}/></AboutLink> |
                {/*Medium*/}
                <AboutLink href="https://medium.com/@KazuYaTaka" color="white"><LinkImage src={MediumIcon}/></AboutLink> |

              </div>
            </div>
        );
    }

}

export default About