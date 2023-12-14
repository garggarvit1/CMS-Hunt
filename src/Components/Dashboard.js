import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import DashProfile from './DashboardCon/DashProfile';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs';
import './Dashboard.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';

const Dashboard = () => {
  // bg='papayawhip'
  // bg='tomato' 

  const data = [
    {
      name: 'Page A',
      time: 4000,
      course: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      time: 3000,
      course: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      time: 2000,
      course: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      time: 2780,
      course: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      time: 1890,
      course: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      time: 2390,
      course: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      time: 3490,
      course: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <Grid
        h='700px'
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={1}
      >
        <GridItem rowSpan={1} colSpan={5} >
          <Grid
            h='800px'
            templateRows='repeat(5, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={9}
          >
            <GridItem mt={10} rowSpan={4} colSpan={4}  >
              <Grid
                h='420px'
                templateRows='repeat(9, 70px)'
                templateColumns='repeat(12, 1fr)'
                gap={9}
                mt={30}
                pr={20}
              >
                <GridItem ml={20} rowSpan={2} colSpan={4} >
                  <div className='cardsdash bg-red-500'>
                    <div className='card-inner'>
                      <h3>Courses</h3>
                      <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>300</h1>
                  </div>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} >
                  <div className='cardsdash bg-[#222221]'>
                    <div className='card-inner'>
                      <h3>Categories</h3>
                      <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>300</h1>
                  </div>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} >
                  <div className='cardsdash bg-red-500'>
                    <div className='card-inner'>
                      <h3>PRODUCTS</h3>
                      <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>300</h1>
                  </div>
                </GridItem>
                <GridItem ml={50} mt={40} colSpan={10} rowSpan={6} >

                  <div className='charts'>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="course" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="time" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem ml={10} colSpan={2} mt={10} rowSpan={4}>
              <DashProfile />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  )
}

export default Dashboard;