const db = require('../database');

const user_table = {
  getById: function(id, callback) {
    return db.query('select * from user_table where id_user_table=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from user_table', callback);
  },
  add: function(user_table, callback) {
    return db.query(
      'insert into user_table (id_user,username,password) values(?,?,?)',
      [user_table.id_user, user_table.username, user_table.password],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from user_table where id_user_table=?', [id], callback);
  },
  update: function(id, user_table, callback) {
    return db.query(
      'update user_table set id_user=?,username=?, password=? where id_user_table=?',
      [user_table.id_user, user_table.username, user_table.password, id],
      callback
    );
  }
};
module.exports = user_table