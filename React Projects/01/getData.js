import axios from "axios";

async function getData(userId) {
  const userPromise = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const postsPromise = axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const [userResponse, postsResponse] = await Promise.all([userPromise, postsPromise]);
  const { id, name, username, email, address, phone, website, company } = userResponse.data;
  const posts = postsResponse.data;
  return { id, name, username, email, address, phone, website, company, posts };
}

export default getData;
