const request = require('request');
const query = ''; // Set your query here
request.get({
  url: 'https://api.calorieninjas.com/v1/nutrition?query='+query,
  headers: {
    'X-Api-Key': 'CWsuyn6BhkBRkWLjPJ1l4g==yYRMnTtJ1dclYOp0'
  },
}, function(error, response, body) {
  if(error) {
    console.error('Request failed:', error);
  } else if(response.statusCode != 200) {
    console.error('Error:', response.statusCode, body.toString('utf8'));
  } else {
    const foodData = JSON.parse(body);
    const schema = {
      "type": "object",
      "properties": {
        "date": {"type": "string", "format": "date"},
        "name": {"type": "string"},
        "calories": {"type": "number"},
        "serving_size_g": {"type": "number"},
        "protein_g": {"type": "number"},
        "sodium_mg": {"type": "number"},
      },
      "required": ["date", "name", "calories", "serving_size_g"]
    };
    console.log(schema);
  }
});