import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { products } from "../DummyData";
import { Link } from "react-router-dom"
import { useState } from 'react';

const Container = styled.div`
    flex: 4;
    margin: 0 20px;
`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`

const ProductImage = styled.img`
  width:30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`

const Button = styled.button`
  border-radius: .7em;
  border: none;
  padding: 5px 10px;
  background-color: #3BB077;
  color: #FFF;
  cursor: pointer;
  margin-right: 20px;
`

const ProductList = () => {
  const [data,setData] = useState(products);
  const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
            <ImgContainer>
                <ProductImage src={params.row.img} alt="Product Pic"/>
                {params.row.name}
            </ImgContainer>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      renderCell: (params) => {
        return (
            <>
            <Link to={"/products/" + params.row.id}>
              <Button>Edit</Button>
            </Link>
              <DeleteOutline className="actionIcon" onClick={() => handleDelete(params.row.id)}/>
            </>
        );
      },
    },
  ];

  return (
      <Container>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick/>
      </Container>
  );
};

export default ProductList;
