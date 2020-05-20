/* 
 Users
 Roles
 Sessions - automatically managed by sessions-knex
 
*/
exports.up = function (knex) {
  return knex.schema
    .createTable("roles", tbl => {
      tbl.string("name", 128).notNullable().unique().primary();

      tbl.string("description", 255);
    })

    .createTable("users", tbl => {
      tbl.increments();

      tbl.string("username", 255).notNullable().unique().index();
      tbl.string("password", 255).notNullable();
      tbl.string("email", 255).notNullable().unique().index();

      tbl.string("role_name")
        .references("roles.name")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("roles").dropTableIfExists("users");
};
