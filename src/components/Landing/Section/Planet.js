import React, { useState, useEffect } from 'react'

function Planet(props) {
    const { population, name } = props.planet;
    const [heightvalue, setHeightvalue] = useState(10);
    
    useEffect(() => {
       switch(true){
        case ( population < 1000):
            setHeightvalue(10)
            break;
        case ( population < 10000):
            setHeightvalue(20)
            break;
        case ( population < 100000):
            setHeightvalue(30)
            break;
        case ( population < 1000000):
            setHeightvalue(40)
            break;
        case ( population < 10000000):
            setHeightvalue(50)
            break;
        case ( population < 100000000):
            setHeightvalue(60)
            break;
        case ( population < 1000000000):
            setHeightvalue(70)
            break;
        case ( population < 10000000000):
            setHeightvalue(80)
            break;
        case ( population < 100000000000):
            setHeightvalue(90)
            break;  
        case ( population < 1000000000000):
            setHeightvalue(100)
            break;
        case ( population < 10000000000000):
            setHeightvalue(110)
            break;
        case ( population < 100000000000000):
            setHeightvalue(120)
            break;
        case ( population >= 100000000000000):
            setHeightvalue(130)
            break;
        default:
            setHeightvalue(10)
       }

    }, [])

    if(!name){
        return null;
    }
  
    return (
        <div className="flex-item" data-test="planet-item">
            <div className={`planet height-${heightvalue}`}>
            </div>
            <div className="planet-title" data-test="planet-title">{name}</div>
        </div>
    )
}

export default Planet
