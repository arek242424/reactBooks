import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


export const invokeStatusEnum = {
    NONE: Symbol("NONE"),
    PENDING: Symbol("PENDING"),
    SUCCESS: Symbol("SUCCESS"),
    FAILURE: Symbol("FAILURE"),
}

export default function UseInvokeAsyncRepoMethod(){

    const [invokeStatus, setInvokeStatus] = useState(invokeStatusEnum.NONE)
    const componentUnmounted = useRef(false)

    async function invokeAsyncMethod(asyncRepoMethod) {
        try {
            setInvokeStatus(invokeStatusEnum.PENDING)
            const status = await asyncRepoMethod();
            if (componentUnmounted === false) {
                if (status === 'ok') {
                    setInvokeStatus(invokeStatusEnum.SUCCESS)
                } else {
                    setInvokeStatus(invokeStatusEnum.FAILURE)
                }
            }
        } catch (err) {
            if (componentUnmounted === false) {
                console.trace('Error while invoking method')
                setInvokeStatus(invokeStatusEnum.FAILURE)
            }
        }
    }

    function resetinvokeStatus(){
        if (componentUnmounted === false) {
            setInvokeStatus(invokeStatusEnum.NONE)
        }
    }

    useEffect(() =>{
        return () =>{
            componentUnmounted.current = true
        }
    },[])

    return [invokeAsyncMethod, invokeStatus, resetinvokeStatus];
}