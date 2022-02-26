import "./prodList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { prodRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProdList = () => {
  const [data, setData] = useState(prodRows);

  const handleDalate = (id) => {
    setData(data.filter((itm) => itm.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="ProductListItm">
            <img className="ProductListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
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
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>;
            </Link>
            <DeleteOutline
              className="productLisDelete"
              onClick={() => handleDalate(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="prodList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProdList;
