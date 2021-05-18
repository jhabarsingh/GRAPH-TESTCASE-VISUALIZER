import React, { useEffect, useRef } from 'react';
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Home from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';
import { LineWeightRounded } from '@material-ui/icons';

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
  
  const[graphs, setGraphs] = React.useState([]);

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

  useEffect(() => {
    if(!localStorage.getItem("text")) {
      history.push('/testcase');
      return;
    }
    let text = localStorage.getItem("text").trim();
    let n = text.length;

    if(n == 0) {
      history.push('/testcase');
    }

    let temp = text.split(/\r?\n/);
    n = temp.length;
    let flag = -1;
    let graph = [];

    for(let i=0; i<n; i++) {
      let p = temp[i].trim().split(/\s+/);
      if(temp[i].trim().length == 0) continue;
      if(p.length != 2 && p.length != 3) {
        history.push('/testcase');
        return;
      }
      else {
          if(flag != -1) {
              if(p.length != flag) {
                history.push('/testcase');
                return;
              }
              else {
                  graph.push(p);
              }
          }
          else {
              graph.push(p);
              flag = p.length;
          }
      }
    }
    setGraphs(graph);
    console.log(graphs);

    let node = [];
    let set = new Set();

    for(let i=0; i<graph.length; i++) {
      set.add(graph[i][0]);
      set.add(graph[i][1]);
    }

    let i = 1;
    let map = new Map();
    set.forEach(e => {
      let obj = {
      };
      obj.id = i;
      obj.label = e;
      node.push(obj);  
      map[e] = i;
      i++;
    })

    // { from: 1, to: 3,  label: "122", font: { strokeWidth: 10 } },

    let edge = [];
    if(graph[0].length == 2) {
      let obj = {

      }
      graph.forEach(e => {
        obj.from = map.get(e[0]);
        obj.to = map.get(e[1]);
        obj.font = {
          strokeWidth: 10
        }
        edge.push(obj);
      })
    }
    else {
      graph.forEach(e => {
        let obj = {

        }
        graph.forEach(e => {
          obj.from = map.get(e[0]);
          obj.to = map.get(e[1]);
          obj.label = e[2];
          obj.font = {
            strokeWidth: 10
          }
          edge.push(obj);
        })
      })
    }

    console.log(edge);
  }, [])


  
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push('/');
  
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
          onClick={handleClick}
        >
          Home
        </Button>
      </center>
    </>
  );
};

export default Graphs;


// https://visjs.github.io/vis-network/examples/