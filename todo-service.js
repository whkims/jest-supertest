const mysql = require('mysql2/promise');

async function getConnection() {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'todo', // your user name
    password: '', // your password
    database: 'todo'  // your database name
  })
}

exports.get = async function() {
  try {

    
    // const connection = await getConnection()
    // /* results: [ { id: 1, content: 'do the homework' } ] */
    // const [results, fields] = await connection.query(
    //   'SELECT * FROM `todo` WHERE `id` = 1'
    // )
    // await connection.end()

    const mockFn = jest.fn();
    const asyncMock = mockFn.mockResolvedValue([{ 'id': 1, 'content': 'do the homework' }]);
    results = await asyncMock();


    return results[0].content
  } catch (err) {
    console.error(err)
    throw err
  }
}

// post
exports.post = async function(id, content) {
  try {
    let data = [
      content,
      id
    ]
    
    const connection = await getConnection()
    const [results, fields] = await connection.query(
      'UPDATE todo.todo SET content = ? WHERE id = ?',
      data
    )
    await connection.end()

    return results.info
  } catch (err) {
    console.error(err)
    throw err
  }
}

// put
exports.put = async function(content) {
  try {
    let data = [content]
    const connection = await getConnection()
    const [results] = await connection.query(
      'INSERT INTO todo.todo (content) VALUES (?)',
      data
    )
    await connection.end()
    return results.insertId
  } catch (err) {
    console.error(err)
    throw err
  }
}

// delete
exports.del = async function(id) {
  console.log(id);
  let data = [id];
  try {
    console.log(id);
    const connection = await getConnection()
    const [results, fields] = await connection.query(
      'DELETE FROM todo.todo WHERE id = ?',
      data
    )
    await connection.end()

    return results.affectedRows
  } catch (err) {
    console.error(err)
    throw err
  }
}
