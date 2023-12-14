import React, { useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Box, Image, Stack, Heading, Text, Button, Input, Center } from '@chakra-ui/react';

const DashProfile = () => {

    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImage = () => {
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e;
        console.log(file);
        setImage(e.target.files[0]);
        
        // const file = event.target.files[0];
        // const imgname = event.target.files[0].name;
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //   const img = new Image();
        //   img.src = reader.result;
        //   img.onload = () => {
        //     const canvas = document.createElement("canvas");
        //     const maxSize = Math.max(img.width, img.height);
        //     canvas.width = maxSize;
        //     canvas.height = maxSize;
        //     const ctx = canvas.getContext("2d");
        //     ctx.drawImage(
        //       img,
        //       (maxSize - img.width) / 2,
        //       (maxSize - img.height) / 2
        //     );
        //     canvas.toBlob(
        //       (blob) => {
        //         const file = new File([blob], imgname, {
        //           type: "image/png",
        //           lastModified: Date.now(),
        //         });
    
        //         console.log(file);
        //         setImage(file);
        //       },
        //       "image/jpeg",
        //       0.8
        //     )
        //   };
        // };
    }

    return (
        <div>
            <Card w={["sm", "md", "lg"]} h={"500px"} mt={40} mr={28} pt={35} bg={'#222221'}   boxShadow='White' borderRadius={10}  >
                <CardBody   >
                    <Box display="flex"
                        justifyContent='center'
                        alignItems="center" >
                        {image ?
                            <Image
                                src={URL.createObjectURL(image)}
                                alt='Green double couch with wooden legs'
                                borderRadius='100px'
                                w="180px"
                                h='175' objectFit
                                onClick={handleImage}
                                bgColor={'white'}
                            />
                            :
                             <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Green double couch with wooden legs'
                                onClick={handleImage}
                                borderRadius='100px'
                                w="180px"
                                h='175'
                            />
                         }
                        <Input type='file' ref={inputRef} display={'none'} onChange={handleImageChange} />
                    </Box>
                    <Stack mt='6' spacing='3' color='white'  >
                        <Heading display="flex"  alignItems="center" justifyContent={'center'} size='md'>Profile</Heading>
                       
                        <Box spacing='3' display="flex" justifyContent='space-around' >                       
                        <Text >Name:- Garvit</Text>
                        <Text>D:O:B:- 29/03/2003</Text>
                        </Box>
                        <Text ml={50}>University: Chitkara</Text>
                    </Stack>
                </CardBody>

                <CardFooter display="flex"
                    justifyContent='center'
                    alignItems="center" color='white'>
                    <Button variant='solid' w={"140px"} h={40} fontSize={20} borderRadius={5} colorScheme='blue' bg='green' >
                        Edit Info
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default DashProfile;