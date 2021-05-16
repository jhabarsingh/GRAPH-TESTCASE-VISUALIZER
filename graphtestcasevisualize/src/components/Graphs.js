import React, { useEffect, useRef } from 'react';
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Home from '@material-ui/icons/Home';

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

const Graphs = () => {
  // A reference to the div rendered by this component
  const domNode = useRef(null);

  // A reference to the vis network instance
  const network = useRef(null);

  // An array of nodes
  const nodes = new DataSet([
    { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' }
  ]);

  // An array of edges
  const edges = new DataSet([
    { from: 1, to: 3,  label: "122", font: { strokeWidth: 10 } },
    { from: 1, to: 2 , label: "12", font: { strokeWidth: 10 } },
    { from: 2, to: 4 , label: "12", font: { strokeWidth: 10 } },
    { from: 2, to: 5 , label: "12", font: { strokeWidth: 10 } }
  ]);

  const data = {
    nodes,
    edges
  };

  const options = {};

  useEffect(
    () => {
      domNode.current.style.height = '85vh';
      domNode.current.style.width = '85vw';
      domNode.current.style.border = "none !important";
      domNode.current.style.outline = 'none !important'; 
      domNode.current.style.margin = '20px auto';
      domNode.current.style.tapHighlighColor = "rgba(255, 255, 255, 0)";
      console.log(domNode.current);
      network.current = new Network(domNode.current, data, options);
    },
    [domNode, network, data, options]
  );
  
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper ref = { domNode } elevation={4} />
      </div>
      <center style={{"paddingBottom": "5px"}}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Home />}
        >
          Home
        </Button>
      </center>
    </>
  );
};

export default Graphs;


// https://visjs.github.io/vis-network/examples/