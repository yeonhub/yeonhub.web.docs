import { useReducer } from "react";
const initialState  = {
    color:'tomato'
}
const reducer = ( state , action ) => {
    switch( action.type  ) {
        case 'CHANGE_COLOR' :
            return  'pink'
        default:
            return state
    }
}
const Test1 = () => {
    const [ state  , dispatch ]  = useReducer( reducer  , initialState )
    return (
        <div>
            <h2 stype={{ color:'skyblue' }}>컬러 : xxx </h2>
            <p>
                <button onClick={ () => dispatch({type:'CHANGE_COLOR', fcolor:'red'})}>red</button>
                <button onClick={ () => dispatch({type:'CHANGE_COLOR', fcolor:'green'})} >green</button>
                <button onClick={ () => dispatch({type:'CHANGE_COLOR', fcolor:'blue'})} >blue</button>
                <button onClick={ () => dispatch({type:'CHANGE_COLOR', fcolor:'pink'})} >pink</button>
            </p>
        </div>
    );
};
export default Test1;