import { getDSADataRepository } from "./dsa.repository";

export const getDSADataService = async (
  userId: string
) => {
  const rows =
    await getDSADataRepository(userId);

  const chaptersMap = new Map();

  rows.forEach((row) => {
    if (!chaptersMap.has(row.chapter_id)) {
      chaptersMap.set(row.chapter_id, {
        id: row.chapter_id,
        name: row.chapter_name,
        sequence: row.chapter_sequence,

        totalQuestions: 0,
        completedQuestions: 0,

        questions: [],
      });
    }

    const chapter =
      chaptersMap.get(row.chapter_id);

    if (row.question_id) {
      chapter.totalQuestions += 1;

      if (row.completed) {
        chapter.completedQuestions += 1;
      }

      chapter.questions.push({
        id: row.question_id,
        name: row.question_name,

        level: row.level,

        article_link: row.article_link,
        youtube_link: row.youtube_link,
        leetcode_link: row.leetcode_link,

        completed: row.completed,

        companies: row.companies || [],
      });
    }
  });

  return Array.from(chaptersMap.values());
};