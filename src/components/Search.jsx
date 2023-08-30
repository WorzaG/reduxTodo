import { Button, Flex, Input } from '@chakra-ui/react'
import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {search} from '../redux/todo/todoSlice'

export default function Search() {
  const [searching,setSearching] = useState("")
  const dispatch = useDispatch()


  return (
<Flex>
<Input placeholder='Search' value={searching} onChange={(e)=> setSearching(e.target.value)}/>
<Button onClick={()=> dispatch(search(searching)) } mx={2}>Search</Button>
<Button onClick={()=> {dispatch(search("")) ; setSearching("")}} >Listeye Dön</Button>
</Flex>
  )
}
