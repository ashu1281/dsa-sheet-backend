/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

exports.up = (pgm) => {
  pgm.createExtension("pgcrypto", { ifNotExists: true });

  pgm.createType("user_role", ["ADMIN", "USER"]);

  pgm.createType("question_status", ["PENDING", "DONE"]);

  pgm.createType("question_level_enum", [
    "Easy",
    "Medium",
    "Hard",
  ]);

  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    name: {
      type: "varchar(255)",
      notNull: true,
    },

    email: {
      type: "varchar(255)",
      notNull: true,
      unique: true,
    },

    password: {
      type: "text",
      notNull: true,
    },

    role: {
      type: "user_role",
      notNull: true,
      default: "USER",
    },

    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },

    updated_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.createTable("chapters", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    name: {
      type: "varchar(255)",
      notNull: true,
    },

    sequence: {
      type: "integer",
      notNull: true,
    },

    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.createTable("question_levels", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    level: {
      type: "question_level_enum",
      notNull: true,
      unique: true,
    },

    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.createTable("companies", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    name: {
      type: "varchar(255)",
      notNull: true,
      unique: true,
    },

    logo_link: {
      type: "text",
    },

    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.createTable("questions", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    chapter_id: {
      type: "uuid",
      notNull: true,
      references: "chapters(id)",
      onDelete: "CASCADE",
    },

    level_id: {
      type: "uuid",
      notNull: true,
      references: "question_levels(id)",
      onDelete: "RESTRICT",
    },

    name: {
      type: "varchar(500)",
      notNull: true,
    },

    article_link: {
      type: "text",
    },

    youtube_link: {
      type: "text",
    },

    leetcode_link: {
      type: "text",
    },

    sequence: {
      type: "integer",
      notNull: true,
    },

    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },

    updated_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.createTable("question_companies", {
    question_id: {
      type: "uuid",
      notNull: true,
      references: "questions(id)",
      onDelete: "CASCADE",
    },

    company_id: {
      type: "uuid",
      notNull: true,
      references: "companies(id)",
      onDelete: "CASCADE",
    },
  });

  pgm.addConstraint(
    "question_companies",
    "question_companies_pkey",
    {
      primaryKey: ["question_id", "company_id"],
    }
  );

  pgm.createTable("user_question_progress", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    user_id: {
      type: "uuid",
      notNull: true,
      references: "users(id)",
      onDelete: "CASCADE",
    },

    question_id: {
      type: "uuid",
      notNull: true,
      references: "questions(id)",
      onDelete: "CASCADE",
    },

    status: {
      type: "question_status",
      notNull: true,
      default: "PENDING",
    },

    completed_at: {
      type: "timestamp",
    },

    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },

    updated_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.addConstraint(
    "user_question_progress",
    "unique_user_question_progress",
    {
      unique: ["user_id", "question_id"],
    }
  );

  pgm.createIndex("users", "email");

  pgm.createIndex("questions", "chapter_id");
  pgm.createIndex("questions", "level_id");

  pgm.createIndex("user_question_progress", "user_id");
  pgm.createIndex("user_question_progress", "question_id");

  pgm.createIndex("chapters", "sequence");

  pgm.createIndex("questions", "sequence");
};

exports.down = (pgm) => {
  pgm.dropTable("user_question_progress", { ifExists: true });
  pgm.dropTable("question_companies", { ifExists: true });
  pgm.dropTable("questions", { ifExists: true });
  pgm.dropTable("companies", { ifExists: true });
  pgm.dropTable("question_levels", { ifExists: true });
  pgm.dropTable("chapters", { ifExists: true });
  pgm.dropTable("users", { ifExists: true });

  pgm.dropType("question_status", { ifExists: true });
  pgm.dropType("question_level_enum", { ifExists: true });
  pgm.dropType("user_role", { ifExists: true });
};