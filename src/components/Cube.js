import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import logo from "../assets/img/icon.svg"
import menu from "../assets/img/menu.svg"
import projects from "../assets/img/projects.svg"
import footer from "../assets/img/footer.svg"
import skill from "../assets/img/skills.svg"
import contact from "../assets/img/contact.svg"
class LogoCube extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        width: 300,
                        height: 300
                    }}
                >
                    <Cube size={300} index="front">
                        <div style={{ backgroundColor: '#121212' }}>
                            <a href='#home'><img alt='front' src={menu} ></img></a>
                        </div>
                        <div style={{ backgroundColor: '#121212' }}>
                        <a href='#skills'><img alt="right" src={skill} /></a>
                        </div>
                        <div  style={{ backgroundColor: "#121212" }}>
                        <a href='#projects'><img alt="left" src={projects} /></a>
                        </div>
                        <div  style={{ backgroundColor: '#121212' }}>
                        <a href='#contact'><img alt="back" src={contact} /></a>
                        </div>
                        <div style={{ backgroundColor: '#121212' }}>
                        <a href='#footer'><img alt="top"  src={footer} /></a>
                        </div>
                        <div style={{ backgroundColor: '#121212' }}>
                        <a href='#home'><img alt='bottom' src={logo}></img></a>
                        </div>
                    </Cube>
                </div>
            </div>
        );
    }
}


export default LogoCube;