import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    
    
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  titleBar: {
    height: '100%',
    background: 'rgba(0,0,0,.35)'
  },
  icon: {
    color: 'white',
  },
  tint: {
    background:'rgba(0,0,0,0,.5)', 
  }
});

 
 const tileData = [
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'Image',
      author: 'author',
      featured: true,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'Image',
      author: 'author',
      featured: true,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'Image',
      author: 'author',
      featured: true,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'Image',
      author: 'author',
      featured: true,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'Image',
      author: 'author',
      featured: true,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'Image',
      author: 'author',
      featured: true,
    }
  ];



function AdvancedGridList(props) {
  const { classes } = props;

  const getGridListCols = () => {
    console.log(classes)
    console.log("Triggered at getGridListCols")
    if (isWidthUp('lg', props.width)) {
      return 4;
    }

    if (isWidthUp('md', props.width)) {
      return 3;
    }

    if (isWidthUp('sm', props.width)) {
      return 2;
    }

    return 1;
  }

  const getGridListHeight = () => {
    console.log(classes)
    console.log("Triggered at getGridListCols")
    

    if (isWidthUp('md', props.width)) {
      return 3;
    }

    if (isWidthUp('sm', props.width)) {
      return 2;
    }

    return 1;
  }


  return (
    <div className={classes.root}>
      <GridList cellHeight={175} spacing={5} cols={getGridListCols()} className={classes.gridList}>
        {tileData.map(tile => (
          
            <GridListTile key={tile.img} cols={tile.featured ? 1 : 1} rows={tile.featured ? 1 : 1} className={classes.tint}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="bottom"
                className={classes.titleBar}
              />
            </GridListTile>

        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(AdvancedGridList));