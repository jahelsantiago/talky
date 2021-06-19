import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SnackBarr = ({open, setOpen, message}) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
            <Alert onClose={handleClose} style = {{backgroundColor : "#d19e6b", width : "300px"}}>
                {message}
            </Alert>
      </Snackbar>
    )
}

export default SnackBarr
