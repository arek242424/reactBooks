import {useState, useEffect, useRef} from 'react'



export default function UseWaitingDotsAnimation(maxDotsCount, msDotAppearingInterval){

    const [dots, setDots] = useState("");
    const [start, setStart] = useState(false);     
    let dotsInternalRef = useRef("");
    let intervalRef = useRef(undefined);
    

    function getDots(){
        if(dotsInternalRef.current.length === maxDotsCount){
            dotsInternalRef.current = "";
            return dotsInternalRef.current;
        }
        else{
            return dotsInternalRef.current += '.'
        }
    }

    useEffect(() =>{        
        if(start === true){
           intervalRef = setInterval(() => {
              let d = getDots()
              setDots(d)    
           }, msDotAppearingInterval);
        }      
        else{
            setDots("");
            dotsInternalRef.current = "";
            clearInterval(intervalRef);  
        } 

        return () =>{
            dotsInternalRef.current = "";
            clearInterval(intervalRef);            
        }
    }, [start])


    return [dots, setStart]
}