import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Course from './Course';
import dsato from '../../assest/img/dsa-to-development-coding-guide-thumbnail.webp';
import complete from '../../assest/img/complete-guide-to-software-testing-automation-thumbnail.webp';
import self from '../../assest/img/dsa-self-paced-thumbnail.webp';
import full from '../../assest/img/full-stack-node-thumbnail.webp';
import interview from '../../assest/img/interviewe-101-data-structures-algorithm-system-design-thumbnail.webp';

const MainCourse = () => {
    return (
        <>
            <Grid
                h='800px'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(1, 1fr)'
                m={15}
                ml={100}
                gap={4}
            >
                <GridItem colSpan={1}>
                    <Grid
                        h='800px'
                        templateRows='repeat(32, 25px)'
                        templateColumns='repeat(20, 50px)'
                        gap={4} m={20}
                    >
                        <GridItem colSpan={5} mt={7} ml={15} mr={10} mb={10} rowSpan={13} >
                            <Course title="DSA to Development" imgsrc={dsato} />
                        </GridItem>
                        <GridItem colSpan={5} mt={5} ml={15} mr={10} mb={10} rowSpan={13} >
                            <Course title="Full Stack Development with React & Node JS" imgsrc={full} />
                        </GridItem>
                        <GridItem colSpan={5} mt={5} ml={15} mr={10} mb={10} rowSpan={13} >
                            <Course title="Tech Interview 101" imgsrc={interview} />
                        </GridItem>
                        <GridItem colSpan={5} mt={5} ml={15} mr={10} mb={10} rowSpan={13} >
                            <Course title="Complete Guide to Software Testing and Automation" imgsrc={complete} />
                        </GridItem>
                        <GridItem colSpan={5} mt={5} ml={15} mr={10} mb={10} rowSpan={13} >
                            <Course title="Data Structures and Algorithms - Self Paced" imgsrc={self} />
                        </GridItem>
                        \
                    </Grid>
                </GridItem>
            </Grid>
        </>
    )
}

export default MainCourse;


{/* <Grid
h='400px'
templateRows='repeat(4, 1fr)'
templateColumns='repeat(6, 130px)'
gap={4}
>
<GridItem  ml={8} mt={8} mr={3} colSpan={2} rowSpan={3} bg='papayawhip'></GridItem>
</Grid> */}