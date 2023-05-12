import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './index.css'

const style = {
    borderRadius: '12px',

    position: 'absolute',
    top: '24.5%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 113,
    height: '132px',
    boxShadow: '0px 3px 12px 3px rgba(0, 0, 0, 0.2)',
    bgcolor: '#DC0A2D',
    
    padding: '0px 4px 4px'
};

export default function ModalTypeSearch( {open, setOpen} ) {

  const handleClose = () => setOpen(false);

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <div className='radio-container'>
                <div className='title-modal'>Sort by:</div>
                <form className='form-radio' action="#" method="post">
                    <fieldset>
                        <div className='input-radio'><input type="radio" name='name' id='inumber' checked/><label htmlFor="inumber">Number</label></div>
                        <div className='input-radio'><input type="radio" name='name' id='iname'/><label htmlFor="iname">Name</label></div>
                    </fieldset>
                </form>
            </div>

        </Box>
      </Modal>
    </div>
  );
}