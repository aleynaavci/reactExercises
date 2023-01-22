import axios from "axios"


const getUser = async(user_id) => {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    console.log(user);
};


const getPost = async(user_id) => {
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    console.log(post);
};


function getData(user_id) {

    try {
        const user = getUser(user_id);
        const post = getPost(user_id);
    } catch (e) {
        return e;
    }

}
export default getData;