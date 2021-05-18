import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push('/testcase');


  return (
      <Card
        style={{
            background: "transparent",
            boxShadow: "none",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            paddingTop: "100px"
        }}
      >
          <center>
            <img 
                className="logohaimera"
                src="./graph_testcase_visualizer.png"  
                style={{
                    borderRadius: '20px',
                    width: '300px',
                    margin: "auto"
                }}
            />
            <br />
            <br />
            
            <Button
                variant="contained"
                color="primary"
                size="Large"
                className={classes.button}
                onClick={handleClick}

                style={{
                  position: "relative",
                  zIndex: 2,
                  borderRadius: "20px"
                }}
            >
                Get Started
            </Button>
        </center>
      </Card>
  );
}
