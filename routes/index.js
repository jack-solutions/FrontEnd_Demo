module.exports=function(app) {
  //FOR Index PAGE
	app.get("/",function(req,res){
		res.render('index.ejs');
	});
};
