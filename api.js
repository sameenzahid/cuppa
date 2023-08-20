fetch('https://chat.openai.com/share/7f9ac67d-9dc8-4539-a34b-a725384264f4', {
  headers: {
    'Cache-Control': 'no-cache'
  }
})
  .then(response => {
    console.log('Response status:', response.status);
    return response.text();
  })
  .then(data => {
    console.log('Response data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });