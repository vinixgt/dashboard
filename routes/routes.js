module.exports = function (app, http, db, request) {
    function route(name, other) {
        if (name != 'routes')
        {
          return require('../app/routes/'+name+'.js')(app, db, helpers, config, request);
        }
    }

    var  city = route('cities');
    app.get('/', city.root);
    //app.post('otraRuta', city.otraRuta);

    app.get('*', function (req, res) { res.status(405).json({ message:'Invalid GET request' }) });
    app.put('*', function (req, res) { res.status(405).json({ message:'Invalid PUT request' }) });
    app.post('*', function (req, res) { res.status(405).json({ message:'Invalid POST request' }) });
    app.delete('*', function (req, res) { res.status(405).json({ message:'Invalid DELETE request' }) });
}
