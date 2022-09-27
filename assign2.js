const express = require('express');

const app = express();

app.get("",(req,res)=>{
    res.send('<h1>Hello this is my first server using node.js</h1><ul><li><a href="/home">Home</a></li> <li><a href="/photos">Photos</a></li> <li><a href="/songs"> Songs </a></li> <li><a href="/lastpage">last rough </a></li></ul>');
});

app.get('/home', (req,res)=>{
    res.send('<h2>Welcome to home page of my first server.</h2><p>Pls enjoy a few <em>photos</em></p><img src="https://bit.ly/3r89xrM" alt="photo of man and sun set."/><button><a href="/photos">Next</a></button>');
})
app.get('/photos',(req,res)=>{
    res.send('<img src="https://bit.ly/3UJA63Y" alt="photos of man and stars" width="1000px"/><img src="https://bit.ly/3raNOiV" alt="photos of man and stars" width="1000px"/><button><a href="/songs">next</a></button>')
})
app.get('/songs',(req,res)=>{
    res.send('<h2>Here is a few of my favorite songs</h2> <img src="https://bit.ly/3rdhjkm" alt="We will rock you! by Queen" width="700px"/> <img src="https://bit.ly/3xXmGHX" alt="I want to break free by Queen" width="700px"height="1000px"/> <img src="https://bit.ly/3StYMMk" alt="We are the champions by Queen" width="700px"/><button><a href="/lastpage">last page</a></button> ')
})
app.get('/lastpage',(req,res)=>{
    res.send('<h3>This is the last page of my first server.</h3> <em><p>So enjoy the video</p></em><video  controls> <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4"></video')
})
app.listen(5000, () => {
    console.log('Server starting up at prot:5000;')
})