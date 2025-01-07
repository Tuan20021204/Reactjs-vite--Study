
import './style.css';
const MyComponent = () => {
  //const VAT = "Tuan"; //string
  //const VAT = 23; // number
  //const VAT = true; //boolean
  //const VAT = [1, 2, 3];// array
  const VAT = {
    name: `tuan`,
    age: 23
  };
  return (
    <>
      <div> {JSON.stringify(VAT)} & Vu Anh Tuan </div>
      <div className="child"
        style={{ borderRadius: "10px" }
        }>child</div>
    </>
  );
}

export default MyComponent;