import { getCountByLevelByUserId, updateQuestionProgressByUserId } from "./progress.repository";

export const updateQuestionProgressService = async (userId: string, questionId: string, status: "PENDING" | "DONE") => {
  const rows = await updateQuestionProgressByUserId(userId, questionId, status);
  return rows;
}

export const getLevelCountsService =
  async (userId: string) => {

    const data =
      await getCountByLevelByUserId(
        userId
      );

    return data;
  };