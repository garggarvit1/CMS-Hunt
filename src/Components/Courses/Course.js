import React from 'react';
import { Card, CardBody, CardFooter,Image,Stack,Button,ButtonGroup,Text,Heading,Box } from '@chakra-ui/react';

const Course = (props) => {
    return (
        <div>
           
            <Card maxW='sm' bgColor={'#232323'} h={300} borderRadius={8} color={'white'} borderColor={'white'} pl={8} pr={5} pb={14}>
                <CardBody >
                    <Image
                        src={props.imgsrc}
                        alt='Green double couch with wooden legs'
                        borderRadius='8'
                        w={220}
                        ml={4}  
                        mt={8}
                    />
                    <Stack mt='6' spacing='1'>
                        <Heading pr={10} fontSize={14}>{props.title}</Heading>
                        {/* <Text>
                        </Text> */}
                        <Text color='green' ml={5} fontSize='2xl'>
                            $10
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                        <Button variant='solid' bg={'green'} w={140} h={30} borderRadius={7} fontSize={16}>
                            Buy now
                        </Button>
                   
                </CardFooter>
            </Card>
         
        </div>
    )
}

export default Course;