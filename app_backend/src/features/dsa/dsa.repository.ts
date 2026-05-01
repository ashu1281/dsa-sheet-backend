import pool from "../../config/db";

export const getDSADataRepository = async (
  userId: string
) => {
  const query = `
    SELECT
      c.id AS chapter_id,
      c.name AS chapter_name,
      c.sequence AS chapter_sequence,

      q.id AS question_id,
      q.name AS question_name,
      q.article_link,
      q.youtube_link,
      q.leetcode_link,
      q.sequence AS question_sequence,

      ql.level,

      COALESCE(
        json_agg(
          DISTINCT jsonb_build_object(
            'id', comp.id,
            'name', comp.name,
            'logo_link', comp.logo_link
          )
        ) FILTER (WHERE comp.id IS NOT NULL),
        '[]'
      ) AS companies,

      COALESCE(
        uqp.status = 'DONE',
        false
      ) AS completed

    FROM chapters c

    LEFT JOIN questions q
      ON q.chapter_id = c.id

    LEFT JOIN question_levels ql
      ON q.level_id = ql.id

    LEFT JOIN question_companies qc
      ON qc.question_id = q.id

    LEFT JOIN companies comp
      ON comp.id = qc.company_id

    LEFT JOIN user_question_progress uqp
      ON uqp.question_id = q.id
      AND uqp.user_id = $1

    GROUP BY
      c.id,
      c.name,
      c.sequence,

      q.id,
      q.name,
      q.article_link,
      q.youtube_link,
      q.leetcode_link,
      q.sequence,

      ql.level,

      uqp.status

    ORDER BY
      c.sequence ASC,
      q.sequence ASC
  `;

  const { rows } = await pool.query(query, [
    userId,
  ]);

  return rows;
};