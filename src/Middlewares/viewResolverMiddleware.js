import {getView} from './../Components/viewResolver'
import {actions} from './../Reducers/actionCreator'



export default function viewResolverMiddleware({getState, dispatch}){
    return next => async action => {
        switch(action.type){
            case actions.setContentMainAction:
                const view = getView(action.payload.viewEnum, action.payload.props)    
                action.payload = view;
                break;
        }

        next(action)
    }
}