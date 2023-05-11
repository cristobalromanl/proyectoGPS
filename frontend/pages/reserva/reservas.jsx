import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Input,
    Stack,
  } from '@chakra-ui/react'

const reservas= ()=> {
  return (
    <Stack>
        <Breadcrumb separator='-'>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
  
</Breadcrumb>
<Input></Input>
    </Stack>
  )
}

export default reservas