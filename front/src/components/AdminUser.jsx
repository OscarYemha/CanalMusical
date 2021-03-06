import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotFound from './error'

function AdminUser({user, allUsers, handleDelete, handleRoles}) {
    return (<div>

{user.id && user.isAdmin == "SuperAdmin" ? 


(
    <div className="container" style={{ marginTop: "50px", width: "60%" }}>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Usuario</th>
            <th>NickName</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        {allUsers && allUsers.length > 0
          ? allUsers.map((e) => {
              return (
                <tbody key={e.id}>
                  <tr>
                    <td># {e.id}</td>
                    <td>{e.nickname}</td>
                    <td> {e.email}</td>
                    <td> {e.isAdmin} </td>
                    { e.isAdmin == "Customer" ? 
                    <td><Button onClick = {()=>{handleRoles(e, e.isAdmin)}} >Promover a Admin</Button></td> :
                    <td><Button onClick = {()=>{handleRoles(e, e.isAdmin)}} >Promover a SuperAdmin</Button></td>
                    }
                    
                    <td><Button onClick = {()=>{handleDelete(e)}}>Eliminar Usuario</Button></td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </Table>
      {/* <Button className="btn btn-dark">
        <Link to="/allproducts">Ir a Home</Link>
      </Button> */}
    </div>
  )
  :
  (<NotFound style={{ marginTop: "50px", width: "60%", marginLeft: "70px"}}/>)

}


    </div>)
   
}

export default AdminUser;
