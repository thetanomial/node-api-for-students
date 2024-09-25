const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors())

// Array of posts
const posts = [
  {
    category: 'Programming',
    author: 'Aayushi Agrawal',
    likes: 2,
    comments: 7,
    shares: 10,
    title: 'Oldschool programmers.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cumque!',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eaque voluptates? Blanditiis pariatur repellat aut. Aliquid, fugiat voluptatibus facere earum optio quasi. Minus delectus earum, alias optio libero dignissimos, soluta ipsam non nostrum magni, enim fugiat nisi. Sit, voluptate consequuntur!',
  },
  {
    category: 'Programming',
    author: 'Sameer Solanki',
    likes: 2,
    comments: 7,
    shares: 10,
    title: 'Oldschool programmers.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cumque!',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eaque voluptates? Blanditiis pariatur repellat aut. Aliquid, fugiat voluptatibus facere earum optio quasi. Minus delectus earum, alias optio libero dignissimos, soluta ipsam non nostrum magni, enim fugiat nisi. Sit, voluptate consequuntur!',
  },
  {
    category: 'Programming',
    author: 'Yash Saxena',
    likes: 2,
    comments: 7,
    shares: 10,
    title: 'Oldschool programmers.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cumque!',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eaque voluptates? Blanditiis pariatur repellat aut. Aliquid, fugiat voluptatibus facere earum optio quasi. Minus delectus earum, alias optio libero dignissimos, soluta ipsam non nostrum magni, enim fugiat nisi. Sit, voluptate consequuntur!',
  },
];

// Define the API endpoint to return the posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
