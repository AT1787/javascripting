let connection;

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    handleUserInput()
    return stdin;
  }
  
  const handleUserInput = () => {
    process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      connection.write('Move: up')
    } else if (key === 's') {
      connection.write('Move: down')
    } else if (key === 'a') {
      connection.write('Move: left')
    } else if (key === 'd') {
      connection.write('Move: right')
    } else if (key === 'q') {
      connection.write(`Say: BEWARE. I AM ANDREW'S SNAKE. I EAT STUFF`)
    } else if (key === 'z') {
      connection.write(`Say: MY SNAKE WILL EAT YOU`)
    } else if (key === 'e') {
      connection.write('Say: HONESTLY. JUST GIVE UP')
    }
  });
  }

  module.exports = { setupInput }

  /*
  let w = console.log('up');
  let a = console.log('left');
  let d = console.log('right');
  let s = console.log('down');
*/