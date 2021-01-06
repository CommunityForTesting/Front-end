import React from 'react';
import { Grid, Box } from '@material-ui/core'

const TodayTopic = (props) => {
    return (
        <Grid className = "today-topic">
            <Box className = "title">
                오늘의 주제
            </Box>
            <Box className = "versus">
                {props.todayTopic}
            </Box>
        </Grid>
    )
}

export default TodayTopic;