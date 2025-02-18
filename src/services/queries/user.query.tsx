import { apiGetStudentProfile, apiGetTeacherProfile } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useTeacherProfileMutation = () => {
  return useMutation({
    mutationFn: apiGetTeacherProfile,
  });
};

export const useStudentProfileMutation = () => {
  return useMutation({
    mutationFn: apiGetStudentProfile,
  });
};
