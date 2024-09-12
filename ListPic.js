import { Card  ,Button} from "react-bootstrap"
function ListPic(props) {
  return (
    <>
  <Card style={{ width: '300px', height:'550px'}}>
  <Card.Img variant="top" src={props.image} style={{ width: '300px', height:'200px'}}/>
  <Card.Body>
    <Card.Title style={{color:"red",textAlign:"center"}} >{props.Title}</Card.Title>
    <Card.Text style={{textAlign:"center"}}>
    {props.Body}
    </Card.Text>
    <Button  variant="primary">Read More</Button>
  </Card.Body>
</Card>
    </>
  )
}

export default ListPic
