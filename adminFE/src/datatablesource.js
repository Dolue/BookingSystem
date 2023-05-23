export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "country",
    width: 100,
  },
  {
    field: "city",
    headerName: "city",
    width: 100,
  },
  {
    field: "phone",
    headerName: "phone",
    width: 100,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "id", headerName: "ID", width: 200 },
  
  {
    field: "name",
    headerName: "name",
    width: 100,
  },

  {
    field: "type",
    headerName: "type",
    width: 100,
  },
  {
    field: "title",
    headerName: "title",
    width: 230,
  },
  {
    field: "city",
    headerName: "city",
    width: 100,
  },
];

export const roomColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "title",
    width: 230,
  },

  {
    field: "desc",
    headerName: "description",
    width: 200,
  },
  {
    field: "price",
    headerName: "price",
    width: 100,
  },
  {
    field: "phone",
    headerName: "phone",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "max people",
    width: 100,
  },
];
