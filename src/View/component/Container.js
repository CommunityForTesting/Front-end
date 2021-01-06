import React from 'react';
import { Grid } from '@material-ui/core';

const Contariner = ({children}) => {
    return (
        <div className="container-h">
            <Grid className="container-box">
                {children}
            </Grid>
        </div>
    );
}

export default Contariner;