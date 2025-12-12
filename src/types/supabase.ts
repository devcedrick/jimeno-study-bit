/* eslint-disable @typescript-eslint/no-empty-object-type */
export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export type Database = {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string;
                    full_name: string | null;
                    avatar_url: string | null;
                    timezone: string;
                    daily_goal_minutes: number;
                    preferred_session_duration: number;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id: string;
                    full_name?: string | null;
                    avatar_url?: string | null;
                    timezone?: string;
                    daily_goal_minutes?: number;
                    preferred_session_duration?: number;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    full_name?: string | null;
                    avatar_url?: string | null;
                    timezone?: string;
                    daily_goal_minutes?: number;
                    preferred_session_duration?: number;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            subjects: {
                Row: {
                    id: string;
                    user_id: string;
                    name: string;
                    color: string;
                    icon: string;
                    is_archived: boolean;
                    total_minutes: number;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    name: string;
                    color?: string;
                    icon?: string;
                    is_archived?: boolean;
                    total_minutes?: number;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    name?: string;
                    color?: string;
                    icon?: string;
                    is_archived?: boolean;
                    total_minutes?: number;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            study_sessions: {
                Row: {
                    id: string;
                    user_id: string;
                    subject_id: string | null;
                    started_at: string;
                    ended_at: string | null;
                    planned_duration_minutes: number | null;
                    actual_duration_minutes: number | null;
                    focus_score: number | null;
                    honesty_score: number | null;
                    source: Database["public"]["Enums"]["session_source"];
                    notes: string | null;
                    is_completed: boolean;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    subject_id?: string | null;
                    started_at: string;
                    ended_at?: string | null;
                    planned_duration_minutes?: number | null;
                    actual_duration_minutes?: number | null;
                    focus_score?: number | null;
                    honesty_score?: number | null;
                    source?: Database["public"]["Enums"]["session_source"];
                    notes?: string | null;
                    is_completed?: boolean;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    subject_id?: string | null;
                    started_at?: string;
                    ended_at?: string | null;
                    planned_duration_minutes?: number | null;
                    actual_duration_minutes?: number | null;
                    focus_score?: number | null;
                    honesty_score?: number | null;
                    source?: Database["public"]["Enums"]["session_source"];
                    notes?: string | null;
                    is_completed?: boolean;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            distraction_events: {
                Row: {
                    id: string;
                    session_id: string;
                    user_id: string;
                    distraction_type: Database["public"]["Enums"]["distraction_type"];
                    duration_seconds: number | null;
                    notes: string | null;
                    occurred_at: string;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    session_id: string;
                    user_id: string;
                    distraction_type: Database["public"]["Enums"]["distraction_type"];
                    duration_seconds?: number | null;
                    notes?: string | null;
                    occurred_at?: string;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    session_id?: string;
                    user_id?: string;
                    distraction_type?: Database["public"]["Enums"]["distraction_type"];
                    duration_seconds?: number | null;
                    notes?: string | null;
                    occurred_at?: string;
                    created_at?: string;
                };
            };
            goals: {
                Row: {
                    id: string;
                    user_id: string;
                    subject_id: string | null;
                    title: string;
                    description: string | null;
                    target_minutes: number;
                    current_minutes: number;
                    status: Database["public"]["Enums"]["goal_status"];
                    deadline: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    subject_id?: string | null;
                    title: string;
                    description?: string | null;
                    target_minutes: number;
                    current_minutes?: number;
                    status?: Database["public"]["Enums"]["goal_status"];
                    deadline?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    subject_id?: string | null;
                    title?: string;
                    description?: string | null;
                    target_minutes?: number;
                    current_minutes?: number;
                    status?: Database["public"]["Enums"]["goal_status"];
                    deadline?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            streaks: {
                Row: {
                    id: string;
                    user_id: string;
                    current_streak: number;
                    longest_streak: number;
                    last_study_date: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    current_streak?: number;
                    longest_streak?: number;
                    last_study_date?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    current_streak?: number;
                    longest_streak?: number;
                    last_study_date?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            achievements: {
                Row: {
                    id: string;
                    user_id: string;
                    achievement_key: string;
                    category: Database["public"]["Enums"]["achievement_category"];
                    title: string;
                    description: string | null;
                    icon: string | null;
                    unlocked_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    achievement_key: string;
                    category: Database["public"]["Enums"]["achievement_category"];
                    title: string;
                    description?: string | null;
                    icon?: string | null;
                    unlocked_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    achievement_key?: string;
                    category?: Database["public"]["Enums"]["achievement_category"];
                    title?: string;
                    description?: string | null;
                    icon?: string | null;
                    unlocked_at?: string;
                };
            };
            report_snapshots: {
                Row: {
                    id: string;
                    user_id: string;
                    report_date: string;
                    report_type: string;
                    total_minutes: number;
                    session_count: number;
                    avg_focus_score: number | null;
                    avg_honesty_score: number | null;
                    subjects_studied: Json;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    report_date: string;
                    report_type?: string;
                    total_minutes?: number;
                    session_count?: number;
                    avg_focus_score?: number | null;
                    avg_honesty_score?: number | null;
                    subjects_studied?: Json;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    report_date?: string;
                    report_type?: string;
                    total_minutes?: number;
                    session_count?: number;
                    avg_focus_score?: number | null;
                    avg_honesty_score?: number | null;
                    subjects_studied?: Json;
                    created_at?: string;
                };
            };
        };
        Views: {};
        Functions: {
            seed_user_defaults: {
                Args: { target_user_id: string };
                Returns: undefined;
            };
        };
        Enums: {
            session_source: "manual" | "timer" | "quick_start";
            distraction_type: "phone" | "social_media" | "conversation" | "daydreaming" | "food" | "other";
            goal_status: "active" | "completed" | "abandoned";
            achievement_category: "streak" | "time" | "sessions" | "focus" | "milestone";
        };
        CompositeTypes: {};
    };
};

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R;
        }
    ? R
    : never
    : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R;
        }
    ? R
    : never
    : never;

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I;
    }
    ? I
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
    }
    ? I
    : never
    : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U;
    }
    ? U
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
    }
    ? U
    : never
    : never;

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
