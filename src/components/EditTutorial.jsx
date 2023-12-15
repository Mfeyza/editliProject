import React from 'react'
import { useState,useEffect } from 'react'
import  axios  from 'axios'

const EditTutorial = ({ getTutorials, selectedTutorial }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    useEffect(() => {
      if (selectedTutorial) {
        setTitle(selectedTutorial.title);
        setDescription(selectedTutorial.description);
      }
    }, [selectedTutorial]);
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      if (!selectedTutorial) return; 
  
      try {
        const res = await axios.put(`${process.env.REACT_APP_URL}${selectedTutorial.id}/`, {
          title,
          description,
        });
        console.log(res);
        getTutorials(); 
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <div>
        
        
      
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"
                ></button>
              </div>
              <div className="modal-body">
              <form onSubmit={handleUpdate} >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-danger mb-4" onClick={()=>handleUpdate(selectedTutorial.id)}>
              Submit
            </button>
          </form>
              </div>
    
            </div>
          </div>
        </div></div>
      )
    }
    
    export default EditTutorial