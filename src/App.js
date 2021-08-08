import './App.css';

import React, {useState, useEffect} from 'react';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [posts, setPosts ] = useState([]);

useEffect(async () => {
  try{
    const response = await fetch('https://www.reddit.com/r/ProgrammerHumor/top/.json?t=all&limit=20');
    const data = await response.json();
    const item = data.data.children;
    setPosts(item);
  }catch(error){
    console.error('The following error occurred: ' + error);
  }
  
  
}, [])

  return (
        <>
        <h1 id="tableTitle">Reddit r/ProgrammingHumor API Data</h1>
        <Container>
      <Row>
        <Col className="header"><b>Title</b></Col>
        <Col className="header"><b>Author</b></Col>
        <Col className="header"><b>Score</b></Col>
        <Col className="header"><b>Number of Comments</b></Col>
      </Row>
      </Container>
        {
          posts.sort((a,b) => a.data.num_comments < b.data.num_comments ? 1: -1).map((post, index) => 
          <Container key= {index}>
      <Row>
        <Col className="data"><a href={'https://www.reddit.com/' + post.data.permalink}>{post.data.title}</a></Col>
        <Col className="data">{post.data.author}</Col>
        {post.data.score % 2 == 0 ? <Col style={{background: '#cd5700'}} className="data">{post.data.score}</Col> 
        :<Col style={{background: '#99bdff'}} className="data">{post.data.score}</Col>}
        <Col className="data">{post.data.num_comments}</Col>
      </Row>
    </Container>)
        }
      </>
  );
}

export default App;
