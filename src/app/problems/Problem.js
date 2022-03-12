import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import { Form , Modal , Button, Row} from 'react-bootstrap';


export class Problem extends Component {

  constructor(props){
    super(props)
    this.state = {
              model:false,
              title:'',
              message:'',
              selectedFile :'',
              problemID :'',
              responcedata :[],
    }  
    this.onsubmithandle = this.onsubmithandle.bind(this)
    this.addsolution = this.addsolution.bind(this)
  }

  async onsubmithandle(event){
    event.preventDefault();

    const sendData ={
      message:this.state.message,
    }
    console.log(sendData)
    const response = await fetch('https://metaversesih.herokuapp.com/api/addproblem', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify(sendData),
		})

		const data = await response.json()

		if (data.status === 'ok') {
      this.setState({
        model:false
      })
      this.componentDidMount();
		}
    else{
      alert('Record is Not inserted ')
    }


  }
 
   

  async addsolution(event){
    event.preventDefault();

    const sendData ={
      title:this.state.title,
      message:this.state.message,
      selectedFile :this.state.selectedFile,
		  type:"SOLUTION",
      problemID:this.state.problemID
    }
    console.log(sendData)
    const response = await fetch('https://metaversesih.herokuapp.com/api/addinovation', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify(sendData),
		})

		const data = await response.json()

		if (data.status === 'ok') {
      this.setState({
        model2:false
      })
      this.componentDidMount();
		}
    else{
      alert('Record is Not inserted ')
    }


  }
 
   
  async componentDidMount(){
    const response = await fetch('https://metaversesih.herokuapp.com/api/getproblem');

		const data = await response.json();
    this.setState({
      responcedata:data
    })
    console.log(this.state.responcedata);
  }

  onChangehandler = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
     
  }




  render () {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i onClick={() => this.setState({model:true})} className="mdi mdi-comment-question-outline"></i>

            </span> PROBLEMS </h3>
          <nav aria-label="breadcrumb">
            <Button onClick={() => this.setState({model:true})} >Add</Button>
          </nav>
        </div>
      
     
     <Row>
   {this.state.responcedata.map((data) =>
         <div key={data._id} className="col-md-6 grid-margin stretch-card">
         <div className="card">
           <div className="card-body">
             <p>{data.message} </p>
           </div>
           <Modal.Footer>
           <button onClick={() => this.setState({model2:true , problemID:data._id})} style={{maxWidth:50}} type="button" className="btn btn-gradient-success btn-fw">Solution</button>
           </Modal.Footer>
           
         </div>
 </div> 
    )}
      
    
    </Row> 

  
       

       <Modal
     
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={this.state.model}
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
         Add Problems
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
        
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Description</label>
                    <textarea onChange={this.onChangehandler} name="message" placeholder='Description' className="form-control" id="exampleTextarea1" rows="4"></textarea>
                  </Form.Group>
                       
                </form>
              </div>
            </div>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.onsubmithandle} >Submit</Button>
        <Button onClick={() => this.setState({model:false})} className="btn btn-light" >Close</Button>
        
      </Modal.Footer>
    </Modal>

    <Modal
     
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
     show={this.state.model2}
   >
     <Modal.Header >
       <Modal.Title id="contained-modal-title-vcenter">
        Add Solution
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <div className="col-12 grid-margin stretch-card">
           <div className="card">
             <div className="card-body">
       
               <form className="forms-sample">
                 <Form.Group>
                   <label htmlFor="exampleInputName1">Title</label>
                   <Form.Control onChange={this.onChangehandler} name="title" type="text" className="form-control"  id="exampleInputName1" placeholder="Title" />
                 </Form.Group>
                 <Form.Group>
                   <label htmlFor="exampleTextarea1">Description</label>
                   <textarea onChange={this.onChangehandler} name="message" placeholder='Description' className="form-control" id="exampleTextarea1" rows="4"></textarea>
                 </Form.Group>
                 <Form.Group>
                   <label>File upload</label>
                   <div className="custom-file">
                   <FileBase64
                   type="file"
                   multiple={false}
                   onDone={({ base64 }) => this.setState({selectedFile:base64})}
       />
                     </div>
                 </Form.Group>                
               </form>
             </div>
           </div>
         </div>
     </Modal.Body>
     <Modal.Footer>
       <Button onClick={this.addsolution} >Submit</Button>
       <Button onClick={() => this.setState({model2:false})} className="btn btn-light" >Close</Button>
       
     </Modal.Footer>
   </Modal>

       


      </div> 
    );
  }
}

export default Problem;