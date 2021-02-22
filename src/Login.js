import {Button,Form} from "react-bootstrap";
import "./Design.css";
function Login()
{

return(
<div >
    <div className="row">
    <div className="col-lg-4"></div>
    <div className="col-lg-4 fordiv2">
<Form.Group  >
<Form.Label>Mobile Number <span className="text-danger"> *</span></Form.Label>
<Form.Control required type="text" placeholder="Enter Your Mobile Number"></Form.Control>
</Form.Group>
<Form.Group>
<Form.Label>Password <span className="text-danger"> *</span></Form.Label>
<Form.Control required type="password" placeholder="Enter Your Password"></Form.Control>
</Form.Group>
<center><Button className="danger">LOGIN</Button></center>
</div>
</div>

<div className="col-lg-4"></div>

    </div>

);


}
export default Login;
