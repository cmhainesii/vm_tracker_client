import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { API_HOSTNAME } from '../config';
import VMListTable from './VMListTable';
function VMList() {

    const [vms, setVms] = useState([]);
    const [error, setError] = useState(false);

    const fetchData = useCallback(() => {
        console.log(API_HOSTNAME + '/vms');
        axios.get(API_HOSTNAME + '/vms')

        .then( res => {
            setVms(res.data);
            setError(false)
        })
        .catch( err => {
            console.error(err);
            if(err.response && err.response.status === 403) {
                setError('Access Denied');
            } else {
                setError('An error occurred.');
            }
        }) 


    }, []);

    function handleDelete(id) {
        axios.delete(API_HOSTNAME + '/vms/delete/' + id)
        window.location.reload()
    }
    

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, (60 * 1000));
        return () => { clearInterval(interval);}
    }, [fetchData])

    useEffect(() => {
        document.title = "Crono's Virtual Machines";
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return ( 
        vms.length > 0 &&
        <div className='d-flex min-vh-100 bg-secondary justify-content-center align-items-center'>
            <div className="w-75 bg-white rounded p-5 m-5">
                <Header />
                <Actions />
                <VMListTable vms={vms} handleDelete={handleDelete} />
            </div>
        </div>
    )
};


const Header = () => {
    return (
        <>
            <h1 className='p-3 text-center'>Virtual Machines</h1>
        </>
    )
};

const Actions = () => {
    return (
        <>
            <div className="row">
                <div className='col-auto mb-3'>
                    <h4>Actions:</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-auto mb-3">
                    <Link to="/create" className='btn btn-success me-5 mb-2'>+ Add VM</Link>
                </div>
            </div>
        </>
        
    );
}

export default VMList;