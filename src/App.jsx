import './App.css';
import ProductTab from './props/ProductTab';
import Button from './clickEvent/Button';
import State from './hooks/usestate';
import Ludo from './obj&arrState/Ludo';
import { Todo } from './todo/Todo';
import Form from './forms/Form';
import Joke from './useEffect/Joke';

export const App = () => {
    return (
        <>
        <Joke/>
        {/* <Form/> */}
        {/* <Todo/>
        <Ludo/>
        <State/>
        <Form/>
        <Button/>
        <ProductTab /> */}
        </>
    );
}