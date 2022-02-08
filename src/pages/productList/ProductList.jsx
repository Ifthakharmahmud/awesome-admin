import "./productList.css";
import {React, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {productRows} from "./../../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Product Name', width: 200},
        { field: 'img', headerName: 'Image', width: 200,renderCell:(params) => {
            return(
                <img src={params.row.img} alt="" className="productImg" />
            );
        },},
        { field: 'stock', headerName: 'Stock', width: 100 },
        
        {
          field: 'price',
          headerName: 'Price',
          width: 90,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 80,
          },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
              return(
                  <>
                  <Link to={"/product/" + params.row.id}  >
                    <button className="productListEdit">Edit</button>
                  </Link>

                 
                    <DeleteOutlineIcon className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
                  
                    
                    
                  </>
              )
          }
        }
        
      ];
    return (
        <>
            {/* Product List */}
            <div className="productList">
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

export default ProductList;