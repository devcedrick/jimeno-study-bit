-- ============================================
-- STUDYBIT SEED DATA
-- ============================================
-- Run this AFTER the migration to populate demo data
-- Note: This uses a placeholder user_id that you should replace
-- with an actual user ID from your auth.users table

-- ============================================
-- DEMO SUBJECTS
-- ============================================

-- These will be inserted for any user who signs up (via trigger)
-- But here's sample data for manual testing with a specific user

-- To use: Replace 'YOUR_USER_ID_HERE' with actual UUID from auth.users

-- INSERT INTO subjects (user_id, name, color, icon) VALUES
-- ('YOUR_USER_ID_HERE', 'Mathematics', '#FF6B6B', 'calculator'),
-- ('YOUR_USER_ID_HERE', 'Computer Science', '#4ECDC4', 'code'),
-- ('YOUR_USER_ID_HERE', 'Physics', '#45B7D1', 'atom'),
-- ('YOUR_USER_ID_HERE', 'English Literature', '#96CEB4', 'book-open'),
-- ('YOUR_USER_ID_HERE', 'History', '#FFEAA7', 'landmark');

-- ============================================
-- ACHIEVEMENT DEFINITIONS (Reference)
-- ============================================
-- These are the achievements users can unlock:
-- 
-- STREAK ACHIEVEMENTS:
-- - first_day: Complete your first study session
-- - week_warrior: 7-day study streak
-- - month_master: 30-day study streak
-- - century_scholar: 100-day study streak
--
-- TIME ACHIEVEMENTS:
-- - hour_hero: Study for 1 hour total
-- - day_dedicator: Study for 24 hours total
-- - week_warrior_time: Study for 168 hours total
--
-- SESSION ACHIEVEMENTS:
-- - session_starter: Complete 10 sessions
-- - session_pro: Complete 100 sessions
-- - session_legend: Complete 1000 sessions
--
-- FOCUS ACHIEVEMENTS:
-- - focus_first: Achieve 90%+ focus score
-- - laser_focus: 10 sessions with 95%+ focus
-- - zen_master: 50 sessions with 100% focus
--
-- MILESTONE ACHIEVEMENTS:
-- - subject_specialist: Study 5 different subjects
-- - goal_getter: Complete your first goal
-- - goal_crusher: Complete 10 goals

-- ============================================
-- SAMPLE FUNCTION: Seed user data after signup
-- ============================================
-- This function can be called to create default subjects for a new user

CREATE OR REPLACE FUNCTION seed_user_defaults(target_user_id UUID)
RETURNS VOID AS $$
BEGIN
    -- Insert default subjects
    INSERT INTO subjects (user_id, name, color, icon) VALUES
    (target_user_id, 'General Study', '#00B4D8', 'book'),
    (target_user_id, 'Mathematics', '#FF6B6B', 'calculator'),
    (target_user_id, 'Reading', '#96CEB4', 'book-open');
    
    -- First achievement
    INSERT INTO achievements (user_id, achievement_key, category, title, description, icon)
    VALUES (target_user_id, 'welcome', 'milestone', 'Welcome!', 'Created your StudyBit account', 'sparkles');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- NOTES FOR PRODUCTION
-- ============================================
-- 1. The trigger in the migration auto-creates profiles and streaks
-- 2. Call seed_user_defaults(user_id) to add starter subjects
-- 3. For testing, manually insert a user via Supabase Auth dashboard
--    then use their UUID to insert test subjects/sessions
