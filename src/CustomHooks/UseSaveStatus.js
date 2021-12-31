import {useSelector} from 'react-redux'

export default function UseSaveStatus(){
    const saveStatus = useSelector((state) => state.appState.saveStatus); 
    
    return saveStatus;
}