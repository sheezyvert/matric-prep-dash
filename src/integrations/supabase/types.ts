export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      answers: {
        Row: {
          answer_text: string
          created_at: string | null
          explanation: string | null
          id: string
          is_correct: boolean
          question_id: string | null
        }
        Insert: {
          answer_text: string
          created_at?: string | null
          explanation?: string | null
          id?: string
          is_correct: boolean
          question_id?: string | null
        }
        Update: {
          answer_text?: string
          created_at?: string | null
          explanation?: string | null
          id?: string
          is_correct?: boolean
          question_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      assigned_topics: {
        Row: {
          class_id: string | null
          created_at: string | null
          due_date: string | null
          id: string
          subsubtopic_id: string | null
        }
        Insert: {
          class_id?: string | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          subsubtopic_id?: string | null
        }
        Update: {
          class_id?: string | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          subsubtopic_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assigned_topics_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "teacher_classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assigned_topics_subsubtopic_id_fkey"
            columns: ["subsubtopic_id"]
            isOneToOne: false
            referencedRelation: "subsubtopics"
            referencedColumns: ["id"]
          },
        ]
      }
      class_students: {
        Row: {
          class_id: string | null
          id: string
          joined_at: string | null
          student_id: string | null
        }
        Insert: {
          class_id?: string | null
          id?: string
          joined_at?: string | null
          student_id?: string | null
        }
        Update: {
          class_id?: string | null
          id?: string
          joined_at?: string | null
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "class_students_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "teacher_classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_students_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_paper_questions: {
        Row: {
          created_at: string | null
          exam_paper_id: string | null
          id: string
          marks: number
          order_index: number
          question_id: string | null
        }
        Insert: {
          created_at?: string | null
          exam_paper_id?: string | null
          id?: string
          marks: number
          order_index: number
          question_id?: string | null
        }
        Update: {
          created_at?: string | null
          exam_paper_id?: string | null
          id?: string
          marks?: number
          order_index?: number
          question_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exam_paper_questions_exam_paper_id_fkey"
            columns: ["exam_paper_id"]
            isOneToOne: false
            referencedRelation: "exam_papers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exam_paper_questions_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_papers: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          teacher_id: string | null
          title: string
          total_marks: number
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          teacher_id?: string | null
          title: string
          total_marks: number
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          teacher_id?: string | null
          title?: string
          total_marks?: number
        }
        Relationships: [
          {
            foreignKeyName: "exam_papers_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          created_at: string | null
          difficulty_level: Database["public"]["Enums"]["difficulty_level"]
          id: string
          image_url: string | null
          question_text: string
          question_type: Database["public"]["Enums"]["question_type"]
          subsubtopic_id: string | null
        }
        Insert: {
          created_at?: string | null
          difficulty_level: Database["public"]["Enums"]["difficulty_level"]
          id?: string
          image_url?: string | null
          question_text: string
          question_type: Database["public"]["Enums"]["question_type"]
          subsubtopic_id?: string | null
        }
        Update: {
          created_at?: string | null
          difficulty_level?: Database["public"]["Enums"]["difficulty_level"]
          id?: string
          image_url?: string | null
          question_text?: string
          question_type?: Database["public"]["Enums"]["question_type"]
          subsubtopic_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "questions_subsubtopic_id_fkey"
            columns: ["subsubtopic_id"]
            isOneToOne: false
            referencedRelation: "subsubtopics"
            referencedColumns: ["id"]
          },
        ]
      }
      subjects: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: Database["public"]["Enums"]["subject_type"]
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: Database["public"]["Enums"]["subject_type"]
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: Database["public"]["Enums"]["subject_type"]
        }
        Relationships: []
      }
      subsubtopics: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          order_index: number
          subtopic_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          order_index: number
          subtopic_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          order_index?: number
          subtopic_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subsubtopics_subtopic_id_fkey"
            columns: ["subtopic_id"]
            isOneToOne: false
            referencedRelation: "subtopics"
            referencedColumns: ["id"]
          },
        ]
      }
      subtopics: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          order_index: number
          topic_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          order_index: number
          topic_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          order_index?: number
          topic_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subtopics_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_classes: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          teacher_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          teacher_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_classes_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      topics: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          name: string
          subject_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          subject_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          subject_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "topics_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      training_data: {
        Row: {
          content: string
          content_type: string
          created_at: string | null
          difficulty_level: Database["public"]["Enums"]["difficulty_level"]
          id: string
          language: Database["public"]["Enums"]["language_type"]
          subsubtopic_id: string | null
        }
        Insert: {
          content: string
          content_type: string
          created_at?: string | null
          difficulty_level: Database["public"]["Enums"]["difficulty_level"]
          id?: string
          language: Database["public"]["Enums"]["language_type"]
          subsubtopic_id?: string | null
        }
        Update: {
          content?: string
          content_type?: string
          created_at?: string | null
          difficulty_level?: Database["public"]["Enums"]["difficulty_level"]
          id?: string
          language?: Database["public"]["Enums"]["language_type"]
          subsubtopic_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "training_data_subsubtopic_id_fkey"
            columns: ["subsubtopic_id"]
            isOneToOne: false
            referencedRelation: "subsubtopics"
            referencedColumns: ["id"]
          },
        ]
      }
      user_answers: {
        Row: {
          answer_id: string | null
          created_at: string | null
          id: string
          is_correct: boolean
          question_id: string | null
          time_taken: number | null
          user_id: string | null
        }
        Insert: {
          answer_id?: string | null
          created_at?: string | null
          id?: string
          is_correct: boolean
          question_id?: string | null
          time_taken?: number | null
          user_id?: string | null
        }
        Update: {
          answer_id?: string | null
          created_at?: string | null
          id?: string
          is_correct?: boolean
          question_id?: string | null
          time_taken?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_answers_answer_id_fkey"
            columns: ["answer_id"]
            isOneToOne: false
            referencedRelation: "answers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_answers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_progress: {
        Row: {
          created_at: string | null
          id: string
          last_accessed: string | null
          percent_complete: number | null
          subsubtopic_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_accessed?: string | null
          percent_complete?: number | null
          subsubtopic_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_accessed?: string | null
          percent_complete?: number | null
          subsubtopic_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_subsubtopic_id_fkey"
            columns: ["subsubtopic_id"]
            isOneToOne: false
            referencedRelation: "subsubtopics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          grade_level: Database["public"]["Enums"]["grade_level"] | null
          id: string
          preferred_language:
            | Database["public"]["Enums"]["language_type"]
            | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          grade_level?: Database["public"]["Enums"]["grade_level"] | null
          id: string
          preferred_language?:
            | Database["public"]["Enums"]["language_type"]
            | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          grade_level?: Database["public"]["Enums"]["grade_level"] | null
          id?: string
          preferred_language?:
            | Database["public"]["Enums"]["language_type"]
            | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      difficulty_level: "level_1" | "level_2" | "level_3" | "level_4"
      grade_level: "grade_12"
      language_type: "en" | "af" | "zu" | "xh" | "st"
      question_type: "multiple_choice" | "short_answer" | "long_answer"
      subject_type: "mathematics"
      user_role: "student" | "teacher" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      difficulty_level: ["level_1", "level_2", "level_3", "level_4"],
      grade_level: ["grade_12"],
      language_type: ["en", "af", "zu", "xh", "st"],
      question_type: ["multiple_choice", "short_answer", "long_answer"],
      subject_type: ["mathematics"],
      user_role: ["student", "teacher", "admin"],
    },
  },
} as const
