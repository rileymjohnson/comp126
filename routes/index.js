exports.main = function(req, res){
        res.render('index.html', {
        	page: 'home'
        });
}

exports.contact = function(req, res){
        res.render('contact.html', {
        	page: 'contact'
        });
}