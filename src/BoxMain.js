
export function BoxMain() {
  const data = [{
    name: "Primary",
    color: "#4e73df"
  },
  {
    name: "Success",
    color: "#1cc88a"
  }, {
    name: "Info",
    color: "#36b9cc"
  },
  {
    name: "Warning",
    color: "#f6c23e"
  }, {
    name: "Danger",
    color: "#e74a3b"
  }, {
    name: "Secondary",
    color: "#858796"
  }, {
    name: "Light",
    color: "#f8f9fc"
  }, {
    name: "Dark",
    color: "#5a5c69"
  }];

  return (
    <div className="tree">
      <div  className="col-md-2">
      {data.map((data) => <Box data={data} />)}
</ div >
    </div>
  );
}
function Box({ data }) {
  return (
    <div className='box' style={{ backgroundColor: data.color }}>
      <div style={{color:"white",paddingLeft:20,paddingTop:20}}>{data.name}</div>
      <div style={{color:"rgb(207, 209, 209)",fontSize:13,paddingLeft:20}}>{data.color}</div>
    </div>

  );
}
