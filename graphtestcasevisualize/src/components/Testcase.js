import React, { useEffect, useRef, useState } from 'react';
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Eco from '@material-ui/icons/Eco';
import { useHistory } from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Parser from './Parser.js'
const data = [
    "from to weighted"
]
function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
        key: value,
        }),
    );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);


const Testcase = () => {
  
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
      if(!localStorage.getItem("text")) return false;
      
      history.push('/visualize')
  };
  const [open, setOpen] = React.useState(false);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  console.log(data)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <div className={classes.root}>
        <Card
            style={{
                width: "90vw",
                margin: "20px auto",
                padding: "10px",
                height: "80vh"
            }}
        >
            <center>
                <Typography gutterBottom variant="h5" component="h2" col>
                    TESTCASE PARSER
                    <div 
                        style={{
                            display:"inline",
                            margin: "0px 20px"
                        }}
                    >
                        <Button variant="contained" color="primary" onClick={handleClickOpen}>
                            Instructions
                        </Button>
                        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                Valid Testcases
                            </DialogTitle>
                            <DialogContent>
                            <Typography gutterBottom>
                                To visualize the graph your testcase needs to be valid.
                            </Typography>
                            <Typography gutterBottom
                                style={{
                                    fontWeight: "bolder",
                                    padding: "5px 0px",
                                    textDecoration: "underline"
                                }}
                            >
                                VALID TESTCASE:
                            </Typography>
                            <Typography gutterBottom>
                                <List>
                                    <Typography gutterBottom variant="h6" component="div"
                                                style={{
                                                    display:"block",
                                                    minWidth: "500px"
                                                }}
                                            >
                                                Weighted Graph (U, V, W)
                                    </Typography> 
                                    <div>
                                        <Paper
                                            style={{
                                            }}
                                        >
                                            <div
                                                
                                            >
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >   
                                                    0
                                                </span>
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >
                                                    1
                                                </span>
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >
                                                    12
                                                </span>
                                            </div>
                                            <div
                                                
                                            >
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >   
                                                    1
                                                </span>
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >
                                                    2
                                                </span>
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >
                                                    23
                                                </span>
                                            </div>
                                            <div
                                                
                                            >
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >   
                                                    0
                                                </span>
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >
                                                    2
                                                </span>
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >
                                                    5
                                                </span>
                                            </div>
                                        </Paper>
                                    </div>
                                </List>
                                <List>
                                    <Typography gutterBottom variant="h6" component="div"
                                                style={{
                                                    display:"block",
                                                    minWidth: "500px"
                                                }}
                                            >
                                                Unweighted Graph (U, V)
                                    </Typography> 
                                    <div>
                                        <Paper
                                            style={{
                                            }}
                                        >
                                            <div
                                                
                                            >
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >   
                                                    0
                                                </span>
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >
                                                    1
                                                </span>
                                            </div>
                                            <div
                                                
                                            >
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >   
                                                    1
                                                </span>
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >
                                                    2
                                                </span>
                                            </div>
                                            <div
                                                
                                            >
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >   
                                                    0
                                                </span>
                                                <span 
                                                    style={{
                                                        padding: "2px 5px"
                                                    }}
                                                >
                                                    2
                                                </span>
                                            </div>
                                        </Paper>
                                    </div>
                                </List>

                            </Typography>
                            </DialogContent>
                            <DialogActions>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Typography>
            </center>
            <center>
                <Parser />
            </center>
        </Card>       
      </div>
      <center style={{"paddingBottom": "5px"}}>
        <Typography variant="body2" color="textSecondary" component="p"
            style={{
                display: "inline",
                padding: "10px 20px",
                fontWeight: "bolder"
            }}
        >
            Check If The Graph Is Directed
        </Typography>
       
        <FormControlLabel
            control={
            <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
            />
            }
            label="DIRECTED"
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Eco />}
          onClick={handleClick}
        >
          Visualize
        </Button>
      </center>
    </>
  );
};

export default Testcase;


// https://visjs.github.io/vis-network/examples/