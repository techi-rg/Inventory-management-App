const express = require( 'express' );

const app = express();

app.get( '/', ( req, res ) => {
    return res.send("Welcome to Inventory Management App");
} );


app.listen( 3400, () =>
{
    console.log( "Server is running on port 3400" );
} );