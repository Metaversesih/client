import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import { Card, Form , Modal , Button, Row} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Inovation extends Component {

  constructor(props){
    super(props)
    this.state = {
              model:false,
              title:'',
              message:'',
              selectedFile :'',
              responcedata :[],
    }  
    this.onsubmithandle = this.onsubmithandle.bind(this)
    this.onsubmithandle2 = this.onsubmithandle2.bind(this)
  }

  async onsubmithandle(event){
    event.preventDefault();

    const sendData ={
      title:this.state.title,
      message:this.state.message,
      selectedFile :this.state.selectedFile,
		
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
        model:false
      })
      this.componentDidMount();
		}
    else{
      alert('Record is Not inserted ')
    }


  }
  async onsubmithandle2(event){
    event.preventDefault();

    const sendData ={
      title:this.state.title,
      message:this.state.message,
      selectedFile :this.state.selectedFile,
		
    }
    const headers ={
      'x-access-token': localStorage.getItem('token'),
    }
    
    console.log(sendData)
    axios.post('https://metaversesih.herokuapp.com/api/addinovation', sendData, { headers })
    .then(response => this.setState({ responcedata: response}));
    

	
   console.log(this.state.responcedata)
		if (this.state.responcedata.status === 'ok') {
      alert('Record is Inserted')
		}
    else{
      alert('Record is Not inserted ')
    }


  }
   
  async componentDidMount(){
    const response = await fetch('https://metaversesih.herokuapp.com/api/getinovation');

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
              <i onClick={() => this.setState({model:true})} className="mdi mdi-lightbulb"></i>

            </span>INOVATION </h3>
          <nav aria-label="breadcrumb">
            <Button onClick={() => this.setState({model:true})} >Add</Button>
          </nav>
        </div>
      
     
     <Row>
   {this.state.responcedata.map((data) =>
       <div className="col-md-4 stretch-card">
      <Card  key={data._id} style={{marginBottom:20}}>
      <Card.Img variant="top" src={data.selectedFile} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.message}
        </Card.Text>
      </Card.Body>
      <Modal.Footer>
           <button  type="button" className="btn btn-gradient-success ">Add Suggestion</button>
           <Link to='DetailsView'><button  onClick={() => localStorage.setItem('Pagename', data.title)} type="button" className="btn btn-gradient-primary btn-fw">Detailed View</button></Link>
           <button  type="button" className="btn btn-gradient-danger ">Connect</button>
           </Modal.Footer>
   
    </Card>
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
         Add Inovation
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
        <Button onClick={this.onsubmithandle} >Submit</Button>
        <Button onClick={() => this.setState({model:false})} className="btn btn-light" >Close</Button>
        
      </Modal.Footer>
    </Modal>

       


      </div> 
    );
  }
}

export default Inovation;