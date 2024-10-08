import { supabase } from "../lib/supabaseClient";

export const loginAfterOAuth = async (userData: string) => {
  console.log("Login after OAuth", userData);
    try {
        const { data } = await supabase
        .from('users')
        .insert([
      { email: userData, role: 'USER', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    ])
    .select()
  
    return data;

    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getUser = async (email: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email);

  if (error) {
    console.error(error);
    return null;
  }

  if (data.length === 0) {
    return false;
  }

  return true;
};

