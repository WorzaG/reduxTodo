import { AbsoluteCenter, Button, Center, Container,Box,Text, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoDelete } from '../redux/todo/todoSlice'

export default function TodoView() {
  const todos = useSelector(state => state.todo.items)
  const search = useSelector(state => state.todo.search)
  const dispatch = useDispatch()
  
    return (
    <Container>
        {
            todos.filter((item) => item.text.includes(search)).map((item)=>(
                <Flex bgColor={item.color} my={5} h={10} borderRadius={10} fontWeight={'bold'} p={5} alignItems={'center'} justifyContent={'space-between'} >
                  <Text>{item.text}</Text>  
                <Button float={'right'} h={6} w={6} borderRadius={'full'} m={2} onClick={() => dispatch(todoDelete(item.id))}>X</Button>
                </Flex>
            ))
        }
    </Container>
  )
}
