/* 
 Users
 Roles
 Sessions - automatically managed by sessions-knex
 
*/
exports.up = function (knex) {
  return knex.schema
    .createTable("roles", tbl => {
      tbl.increments('id')
      tbl.string("name", 128).notNullable().unique()

      tbl.string("description", 255)
    }) // centrally managed table

    .createTable("users", tbl => {
      tbl.increments('id').primary()
      tbl.string('guid', 64).notNullable().unique() // a uuid just in case

      tbl.string("username", 255).notNullable().unique().index();
      tbl.string("password", 255).notNullable();
      tbl.string("email", 255).notNullable().unique().index();

      tbl.string("role_id")
        .references("roles.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("roles").dropTableIfExists("users");
};
