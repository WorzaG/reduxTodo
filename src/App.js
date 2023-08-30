import logo from './logo.svg';
import './App.css';
import { Container } from '@chakra-ui/react';
// COMPONENTS
import Search from './components/Search';
import TodoAdd from './components/TodoAdd';
import TodoView from './components/TodoView';

function App() {
  return (
    <Container maxW='container.sm' my="5">
      <Search />
      <TodoAdd />
      <TodoView /> 
    </Container>
  );
}

export default App;
