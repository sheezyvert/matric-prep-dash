
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useSubjectsCount = () => {
  return useQuery({
    queryKey: ["subjects-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("subjects")
        .select("*", { count: "exact", head: true });

      if (error) throw error;
      return count || 0;
    }
  });
};
