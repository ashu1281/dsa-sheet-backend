import axiosInstance from "../api/axios";
import type { LevelProgress } from "../types/dsa.types";

export const updateQuestionProgress =
  async (
    questionId: string,
    status: "DONE" | "PENDING"
  ) => {

    const response =
      await axiosInstance.patch(
        `/progress/question/${questionId}`,
        {
          status,
        }
      );

    return response.data;
  };

export const getLevelCounts =
  async (): Promise<{
    data: LevelProgress[];
  }> => {

    const response =
      await axiosInstance.get(
        "/progress/levels"
      );

    const updatedData =
      response.data.data.map(
        (
          item: LevelProgress
        ) => ({
          ...item,

          total_questions:
            Number(
              item.total_questions
            ),

          completed_questions:
            Number(
              item.completed_questions
            ),
        })
      );

    return {
      ...response.data,

      data: updatedData,
    };
  };