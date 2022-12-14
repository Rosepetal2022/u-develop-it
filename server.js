const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use apiRoutes
app.use('/api', apiRoutes);


//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//start server after the DB connection 
db.connect(err => {
    if(err) throw err; 
    console.log('Database Connected.');
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});