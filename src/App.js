
import {Form,Button} from "react-bootstrap";
import "./Design.css";

function App() {
  return (
  
    <div className="fordiv " >
  

     <center> <h3 className="text-info ">Registration Form</h3></center>
      
<Form className="col-lg-6">
<Form.Group>
<Form.Label>Name<span className="text-danger"> *</span></Form.Label>
<Form.Control  required type="text" placeholder="Enter Your Full Name">
  </Form.Control>
  </Form.Group>
<Form.Group>
<Form.Label>Mobile Number <span className="text-danger"> *</span></Form.Label>
<Form.Control required type="text" placeholder="Enter Your Mobile Number"></Form.Control>
</Form.Group>
<Form.Group>
<Form.Label>Date Of Birth</Form.Label>
<Form.Control type="date" placeholder="Enter Your Birth Date"></Form.Control>
</Form.Group><Form.Group>
<Form.Label>Education <span className="text-danger">*</span></Form.Label>
    <Form.Check type="checkbox" label="SSC" />
     <Form.Check type="checkbox" label="HSC" /> 
     <Form.Check type="checkbox" label="UG" />
    <Form.Check type="checkbox" label="PG" />
  </Form.Group>

<Form.Group>
<Form.Label>City</Form.Label>
<Form.Control required as="select" placeholder="Select Your City">
  <option>Pune</option> 
  <option>Amravati</option>
  <option>Mumbai</option>
  <option>Pusad</option>
  <option>Hyderabad</option>
  <option>Delhi</option>
</Form.Control>
</Form.Group>
<Form.Group>
<Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
<Form.Control  required type="email" placeholder="Enter Your Email Address"></Form.Control>
</Form.Group>
<Form.Group>
<Form.Label>Password<span className="text-danger"></span></Form.Label>
<Form.Control required type="password" placeholder="Enter Your Password"></Form.Control>
</Form.Group>
<Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Upload You ID Proof" />
  </Form.Group>
</Form>

<Button variant="outline-success">SUBMIT</Button>

</Form>
</div>

  );
}

export default App;
