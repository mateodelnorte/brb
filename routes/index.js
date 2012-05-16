/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log(__dirname);
  res.render('index', { title: 'Express' })
};

exports.image = function(req, res){
  console.log(__dirname);
  res.sendfile('/public/images/brb.jpeg');
};