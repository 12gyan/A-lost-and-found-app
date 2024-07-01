const fetch = require('node-fetch');

const supabaseUrl = 'https://ilicufzsbfeqlbzvqbbw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsaWN1ZnpzYmZlcWxienZxYmJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2NTcwNzQsImV4cCI6MjAzNTIzMzA3NH0.AUDNWolMf5pPUMXNLHfdqEvfkzR0PFoMsb1aYNUigxE';

(async () => {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/LostItems`, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
})();
