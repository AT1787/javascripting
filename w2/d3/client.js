const net = require('net');

const connect = function() {
    const conn = net.createConnection({ 
      host: '135.23.222.148',
      port: 50541 
    });

    conn.setEncoding('utf8'); 

    conn.on('connect', () => {
        console.log("Successfully connected to game server")
    
        /*
        for (let i = 0; i < 10000; i = i + 1000)
        setTimeout(() => {
            conn.write("Move: up")
            
        }, i) */
        
        
        conn.write("Name: AND")
       
      })  
  
    conn.on('data', (data) => {
      console.log('Server says: ', data);
    });

    return conn;
  }

module.exports =  { connect }