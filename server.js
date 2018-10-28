const express = require('express');
const app = express();
var path = require('path');
var PORT= process.env.port || 5000
var vendor;
var pro;
var price;
var data={vendor,pro,price};

var data
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//app.use('/',express.static('./public'));
app.use('/product/add',express.static('./public1'));

//app.use('/product',express.static('./public'));


app.get('/', async (req, res) => {

	
	
	console.log(data);
	
 	await res.render('index', {data});
})


app.post('/product/add', (req,res)=>{
	data.vendor=req.body.vendor;
	data.pro=req.body.product;
	data.price=req.body.price;


	//console.log(data);

	res.redirect('/');

})


app.listen(PORT,function(){
	console.log('Server is listening on 5000');
})


