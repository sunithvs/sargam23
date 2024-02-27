import { createClient } from '@supabase/supabase-js'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseKey)

export default supabase