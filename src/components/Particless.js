import React, { useEffect, useRef } from 'react';
import Particles from 'react-particles-js';

export default function  Particless() {
    const stageCanvasRef = useRef(null);

    // useEffect will run on stageCanvasRef value assignment
    useEffect( () => {

        // The 'current' property contains info of the reference:
        // align, title, ... , width, height, etc.
        if(stageCanvasRef.current){
            document.querySelector(".MuiPaper-root").height = "100vh";
        }

    }, [stageCanvasRef]);

    return (
        <Particles
            className="meghna"
            ref = {stageCanvasRef}
    
            width="100%" 
            height="100vh"
            style={{
                overflow: "hidden",
                position: "absolute",
                top: "0px",
                bottom: "0px"
            }}
            params={{
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 700
                        }
                    },
                    "color": {
                        "value": '#fff'
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.11
                    },
                    "move": {
                        "direction": "right",
                        "speed": 2
                    },
                    "size": {
                        "value": 1.1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 2,
                            "opacity_min": 0.06
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }} />
    )
}
