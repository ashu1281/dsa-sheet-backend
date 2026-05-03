import axiosInstance from "../api/axios";

export const getDSASheet =
  async () => {

    const response =
      await axiosInstance.get(
        "/dsa-sheet"
      );

    return response.data;
  };