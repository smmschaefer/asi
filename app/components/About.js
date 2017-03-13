import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {lightGreen500} from 'material-ui/styles/colors'
import {cyanA400} from 'material-ui/styles/colors'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const pathToImg = "/public/../../../img/";

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: `${pathToImg}/deck1.jpg`,
    title: 'Example',
    author: 'ASI',
  },
  {
    img: `${pathToImg}/deck2.png`,
    title: 'Example 2',
    author: 'ASI',
  },
  {
    img: `${pathToImg}/deck3.jpg`,
    title: 'Example 3',
    author: 'ASI',
  },
];

const HomeGrid = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

const divStyle = {
	height: 200,
	backgroundColor: cyanA400,
};


class About extends Component {
	render() {
		return (
			<div>
				<HomeGrid />
			</div>
		)
	}
}

export default About;