import React from 'react'
import "./About.css"
import Img  from "../../assets/ama.jpg"
const About = () => {
  return (
    <>
      <div className='about'>
             <div className='row'>
               <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                 <img src={Img}alt="" />
               </div>
               <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                   <h1>About me</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis commodi illo nihil culpa voluptates! Placeat corporis pariatur laboriosam nostrum sunt, ullam necessitatibus impedit quaerat deleniti illo qui dolorem perspiciatis?

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate labore non inventore rerum obcaecati natus ratione consequuntur suscipit at nostrum delectus, maxime porro exercitationem ipsa numquam, ut itaque doloribus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum incidunt consequuntur corporis assumenda porro officia, provident iure soluta! Iusto totam laudantium vitae quibusdam facilis impedit velit ut placeat fugiat.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quasi perspiciatis laborum enim commodi quisquam voluptatibus temporibus alias voluptas obcaecati pariatur ipsa laudantium, nemo voluptate minus repellendus corrupti nihil earum!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptates consectetur laborum laudantium corporis iure magni totam at, assumenda tempore eligendi vel! Vero delectus possimus alias necessitatibus odit odio nesciunt.
                   </p>
               </div>
             </div>
      </div>
    </>
  )
}

export default About