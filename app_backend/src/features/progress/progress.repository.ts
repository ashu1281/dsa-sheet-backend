import pool from "../../config/db";

export const getCountByLevelByUserId =
  async (userId: string) => {

    const query = `
      SELECT
        ql.level,

        COUNT(q.id) AS total_questions,

        COUNT(
          CASE
            WHEN uqp.status = 'DONE'
            THEN 1
          END
        ) AS completed_questions

      FROM questions q

      LEFT JOIN question_levels ql
      ON ql.id = q.level_id

      LEFT JOIN user_question_progress uqp
      ON uqp.question_id = q.id
      AND uqp.user_id = $1

      GROUP BY ql.level

      ORDER BY ql.level;
    `;

    const { rows } =
      await pool.query(query, [userId]);

    return rows;
  };

  
export const updateQuestionProgressByUserId =
  async (
    userId: string,
    questionId: string,
    status: "PENDING" | "DONE"
  ) => {

    const query = `
      INSERT INTO user_question_progress (
        user_id,
        question_id,
        status
      )
      VALUES ($1, $2, $3)

      ON CONFLICT (
        user_id,
        question_id
      )

      DO UPDATE SET
        status = EXCLUDED.status,
        updated_at = CURRENT_TIMESTAMP

      RETURNING *;
    `;

    const { rows } =
      await pool.query(query, [
        userId,
        questionId,
        status,
      ]);

    return rows[0];
  };