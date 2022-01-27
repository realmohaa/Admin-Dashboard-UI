import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Users } from "../DummyData";
import { Link } from "react-router-dom"
import { useState } from "react";

const Container = styled.div`
    flex: 4;
    margin: 0 20px;
`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`

const ProfileImage = styled.img`
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
const UsersList = () => {
  const [data, setData] = useState(Users); 
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'user', headerName: 'User', width: 150, renderCell: (params)=>{ 
          return (
              <ImgContainer>
                  <ProfileImage src={params.row.avatar} alt="Profile Pic"/>
                  {params.row.user}
              </ImgContainer>
          );
      }},
      { field: 'email', headerName: 'Email', width: 160},
      { field: 'transactions', headerName: 'Transactions', type: 'number', width: 160},
      { field: 'firstName', headerName: 'First name', width: 140},
      { field: 'lastName', headerName: 'Last name', width: 140},
      { field: 'age', headerName: 'Age', type: 'number', width: 100},
      { field: 'actions', headerName: 'Actions', width: 150, sortable: false, renderCell: (params)=>{
        return (
          <>
          <Link to={"/users/" + params.row.id}>
            <Button>Edit</Button>
          </Link>
            <DeleteOutline className="actionIcon" onClick={() => handleDelete(params.row.id)}/>
          </>
        )
      }}
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

export default UsersList;
