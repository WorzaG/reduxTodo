import { Box, Button, Container, Textarea } from '@chakra-ui/react'
import React , {useState} from 'react'
//component
import ColorCategory from './ColorCategory'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todo/todoSlice'
import { nanoid } from '@reduxjs/toolkit'


export default function TodoAdd() {
  const [text,setText] = useState("")
  const [color , setColor] = useState("green")
  const dispatch = useDispatch()

  const handleAdd = () => {
    if(text !== ''){
      dispatch(addTodo({id:nanoid() , text , color}))
      setText("")
    }else{
      window.alert("lütfen boş bırakmayın")
    }
  }

  return (
    <Container>
        <Box p={10} borderRadius={10}>
        <Textarea placeholder='write Todo' value={text} onChange={(e)=> setText(e.target.value) } color={color}/>
        <ColorCategory color={color} setColor={setColor} />    
        <Button float={'right'} m={2} colorScheme='facebook' onClick={() => handleAdd() }> Add </Button>
        </Box>
    </Container>
  )
}
 