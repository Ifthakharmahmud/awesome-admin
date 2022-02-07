import {React, useState} from 'react';
import "./UserList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from "./../../dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id));
    }
     const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'username', headerName: 'User name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transection',
          headerName: 'Transection',
          width: 150,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
              return(
                  <>
                  <Link to={"/user/" + params.row.id}  >
                    <button className="userListEdit">Edit</button>
                  </Link>

                 
                    <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
                  
                    
                    
                  </>
              )
          }
        }
        
      ];
      
    return (
        <>
            {/* User List Page   */}
            <div className="user-list">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
            </div>
        </>
    );
};

export default UserList;