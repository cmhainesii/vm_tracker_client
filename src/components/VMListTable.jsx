const VMListTable = ({vms, handleDelete}) => {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table className="table">
                <thead>
                    <tr className='text-end'>
                        <th className='text-center'>Name</th>
                        <th className="text-center">Operating System</th>
                        <th className="text-center">Purpose</th>
                        <th className="text-center">Additional Notes</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vms.map((data, i) => {
                            return (
                                <tr key={i} className="text-end">
                                    <td className="text-center">{data.name}</td>
                                    <td className="text-center">{data.operating_system}</td>
                                    <td className="text-center">{data.purpose}</td>
                                    <td className="text-center">{data.additional_notes}</td>
                                    <td><button className='btn btn-danger ms-2' onClick={ () => data && handleDelete(data.id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};
export default VMListTable;