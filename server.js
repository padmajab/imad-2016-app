var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles={
    'article-one':{
    title:'article-one',
    heading:'article one',
    date:'sep 5 2016',
    content:`
            <P>  THIS IS MY FIRST ARTICLETHIS IS MY FIRST ARTICLETHIS IS MY FIRST ARTICLETHIS IS MY FIRST ARTICLETHIS IS MY FIRST ARTICLETHIS IS MY FIRST ARTICLETHIS IS MY FIRST ARTICLETHIS IS MY FIRST ARTICLETHIS IS MY FIRST ARTICLETHIS IS MY FIRST ARTICLE
            </P>`},
    'article-two':{
    title: 'article-two',
    heading:'article two',
    date:'sep 10 2016',
    content:`
            <P>  THIS IS MY SECOND ARTICLE
            </P>`},
    'article-three':{
    title: 'article-three',
    heading:'article three',
    date:'sep 15 2016',
    content:`
            <P>  THIS IS MY third ARTICLE
            </P>`}
};
function createTemplate(data)
{
    var title= data.title;
    var heading=data.heading;
    var content=data.content;
    var date=data.date;
var htmltemplate=`
<html>
<head>
    <title> 
    ${title}
    </title>
    <meta name='vimport' content="width-device-width, init[0]-scale-1"/>
<link href="/ui/style.css" rel="stylesheet" />

</head>
<BODY>
    <div class="container">
    <DIV>
        <A HREF='/'>HOME</A>
        <HR/>
    </DIV>
    <H3>${heading} </H3>
    
    <DIV>
        ${content}
    </DIV>
    <DIV>
        <P> ${date}
        </P>
    </DIV>
    </div>
</BODY>
</html>
`;
return htmltemplate;
}
app.get('/:articleName', function (req, res) {
var articleName=req.param.articleName;    
res.send(createTemplate(articles[articleName]));    
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
