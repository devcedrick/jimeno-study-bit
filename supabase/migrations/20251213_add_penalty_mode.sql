-- Add penalty_mode to profiles
ALTER TABLE profiles 
ADD COLUMN penalty_mode TEXT DEFAULT 'pause_timer' CHECK (penalty_mode IN ('none', 'pause_timer', 'streak_debit'));
