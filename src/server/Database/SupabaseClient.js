const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ilicufzsbfeqlbzvqbbw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsaWN1ZnpzYmZlcWxienZxYmJ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTY1NzA3NCwiZXhwIjoyMDM1MjMzMDc0fQ.CxBOm86HzR3pIr1eem29_pttMYU6WBqMnUnxLyf2NiY';
const supabase = createClient(supabaseUrl, supabaseKey);

const addLostItem = async (item) => {
    const { data, error } = await supabase
      .from('LostItems')
      .insert([item]);
  
    if (error) throw error;
    return data;
  };
  
  const addFoundItem = async (item) => {
    const { data, error } = await supabase
      .from('FoundItems')
      .insert([item]);
  
    if (error) throw error;
    return data;
  };
  
  module.exports = {
    addLostItem,
    addFoundItem,
  };