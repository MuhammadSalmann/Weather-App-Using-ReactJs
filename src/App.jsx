// import './App.css';
import ProductTab from './props/ProductTab';
import Button from './clickEvent/Button';
import State from './hooks/usestate';
import Ludo from './obj&arrState/Ludo';
import { Todo } from './todo/Todo';
import Form from './forms/Form';
import Joke from './useEffect/Joke';
import WeatherApp from './WeatherApp/WeatherApp';
import Card from './tailwind/Card';
import {ReduxTodo} from './redux-toolkit/components/Todo';
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/app/store';

export const App = () => {
    return (
        <>
        {/* <Provider store={store}>
            <ReduxTodo />
        </Provider> */}
        <WeatherApp />
        </>
    );
}
