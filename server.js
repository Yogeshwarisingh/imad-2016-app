var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articleOne={
    title: "Article-one Title",
    heading: "Article-one",
    date: "Sep 5,106",
    content:  `<p>
           The extraction process went smoothly.  I have it on my desktop ready for use.  I will let you know if I come across any issues.
           </p>
       </div>
        <div>
           <p>
           The extraction process went smoothly.  I have it on my desktop ready for use.  I will let you know if I come across any issues.
           </p>
       </div>
        <div>
           <p>
          The extraction process went smoothly.  I have it on my desktop ready for use.  I will let you know if I come across any issues.
           </p>`
    };
    
    function createtemplate(data)
    {
        tiltle=data.title;
        heading=data.heading;
        date=data.date;
        content=data.content;
        
    var htmlTemplate=` 
    <html>
<head>
    <title>
    ${title}
    </title>
    <meta name="viewport" content="width-device-width,initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
</head>
    <body>
        <div class="container">
       <div>
        <a href="/"></a>   
       </div>
       <hr/>
       <h3>
           ${heading}
       </h3>
       <div>
           ${date}
       </div>
       <div>
      ${content}
       </div>
       </div>
    </body>
</html>

    `;
    return htmlTemplate;
    }

app.get('/article-one',function(req, res)
{
  res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req, res)
{
   res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});

app.get('/article-three',function(req, res)
{
   res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});


app.get('/article-two',function(req, res)
{
   res.send("Articlie two is requested and will be send here"); 
});

app.get('/article-three',function(req, res)
{
   res.send("Articlie three is requested and will be send here"); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
