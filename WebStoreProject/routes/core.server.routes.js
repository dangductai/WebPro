"user strict";
 const Sanpham = require("../model/sanpham");

module.exports = function(app) {
  app.route('/').get(function(req, res) {
	  res.render('trangchu');
	});

  app.get('/sanpham.ejs',function renderSanPham(req, res) {
  		Sanpham.find({}, function(err,sanpham ){  
  			if(err){
  				console.log(err,);
  			}else{
  				res.render('sanpham',{
  				title : 'San pham',
  				sanpham : sanpham
  				});
  			}	
  		});
	});

  app.get('/thuonghieu.ejs',function renderThuongHieu(req, res) {
  		res.render('thuonghieu');
	}); 

  app.get('/lienhe.ejs',function renderLienHe(req, res) {
  		res.render('lienhe');
	});

  app.get('/dangnhap.ejs',function renderDangNhap(req, res) {
 		 res.render('dangnhap');
	});

  app.get('/dangki.ejs',function (req, res) {
      res.render('dangki');
  });

  app.get('/giohang.ejs',function renderGioHang(req, res) {
  		res.render('giohang');
	});
  app.route('/sg-sanpham.:id').get(function renderSingleSanPham(req, res) {
  		const xid = req.params.id;
  		Sanpham.findById(xid).then(function(sanpham){
  				res.render('sg-sanpham',
  				{sanpham : sanpham});
  		});  		
	});

  app.get('/admin',function (req, res) {
      res.render('admin/main/index');
  });

};