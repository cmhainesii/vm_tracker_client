import React, {useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { API_HOSTNAME } from '../config';


function CreateVM() {

    const [name, setName] = useState('');
    const [operating_system, setOperatingSystem] = useState('');
    const [purpose, setPurpose] = useState('');
    const [additional_notes, setAdditionalNotes] = useState('');



    const navigate = useNavigate();
    



    function handleSubmit(event) {
        event.preventDefault();
        
    

        
        Axios.post(API_HOSTNAME + '/vms/create', {name, operating_system, purpose, additional_notes})
        .then(res=> {
            console.log(res)
            navigate('/')
        }).catch( err => console.log(err));
    }

    function handleCancel() {
        navigate('/');
    }

    return (
            <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                <Header />
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' id='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='operating_system' className='form-label'>Operating System</label>
                        <input type='text' id='operating_system' className='form-control' value={operating_system} onChange={(e) => setOperatingSystem(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='purpose' className='form-label'>Purpose</label>
                        <input type='text' id='purpose' className='form-control' value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='additional_notes' className='form-label'>Additional Notes</label>
                        <input type='text' id='additional_notes' className='form-control' value={additional_notes} onChange={(e) => setAdditionalNotes(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-primary me-3' onClick={handleSubmit}>Create</button>
                    <button className='btn btn-danger me-3' onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>


    )
}

const Header = () => {
    return (<h2 className='mb-4'>Add Virtual Machine</h2>);
}


export default CreateVM

