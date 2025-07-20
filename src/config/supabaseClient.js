// Import the Supabase client library
const { createClient } = require('@supabase/supabase-js');

// Read the Supabase URL and anon key from your .env file
// These are your secret keys for connecting to your Supabase project
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Create a single Supabase client for interacting with your database
// This is like your "kitchen key" for accessing the storage room
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export the client so you can use it in other parts of your backend
module.exports = supabase; 