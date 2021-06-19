import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "../components/css/Card.css";
import Hlsplayer from './Hlsplayer';
import { BrowserRouter,Link,useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      width:"90%",
      height:"80%",
    backgroundColor: "#39445a",
    border: '2px solid #000',
    borderRadius:"10",
    color:"white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 1, 3),

  },
}));

export default function DetailModal({children,overview,title,poster,vote_count,release_date}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  let history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlechange=(props)=>{
    props.history.push("/Hlsplayer");

  }
  return (
    <div>
      <div type="button" className="allmovies" onClick={handleOpen}>
      {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
             <img  src={"https://image.tmdb.org/t/p/w200"+poster} alt="title"/>
            <h2 style={{marginTop:"0.7px"}} id="transition-modal-title">-{title}</h2>
            <b >Votes**- {vote_count}</b><br/>
             <b>Release-Date- {release_date}</b>
            <p id="transition-modal-description" style={{marginTop:"1px"}}> <b>
              OverView-
              {overview}
              </b>
              </p>
              <Link to={"/Hlsplayer"}>
              <Button  variant="contained" color="secondary" target="__Blank">Watch the Preview</Button>
              </Link>

          
      
          </div>
        </Fade>
      </Modal>
    </div>
  );
}