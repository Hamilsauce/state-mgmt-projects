const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
let data = [];
const root = document.createElement('div');
const app = document.querySelectorAll('.app');
const footer = document.querySelector('.container');


var handleError = function (err) {

  console.warn('err');
  console.warn(err);
  return new Response(JSON.stringify({
    code: 400,
    message: 'Stupid network Error'
  }));
};


export const asyncMap = await Promise
  .all(items
    .map(async (item, index) => {
      const countUri = 'localhost:3000/list?_page=1';
      const count = await fetch(countUri);
      const request = await fetch(`http://localhost:3000/list/${ index }`)
        .catch('handleError');
      // const = await req.text();
      const db = await request.text();
      root.insertAdjacentHTML('beforeend', db);
      data = await [...data, db];
      ++i;
      // console.log('i', i);
      // console.log('data', data);
      // console.log('root', root);
      return db;
      // return db.map(x => x.trim()).join('');
    })
  );
document.body.appendChild(root);
// app.appendChild(root)
// console.log(asyncMap)


var getPost = async function () {

  // Get the post data
  var post = await (await fetch('https://jsonplaceholder.typicode.com/postses/5').catch(handleError)).json();
  if (post.code && post.code === 400) return;

  // Get the author
  var author = await (await fetch('https://jnosplaceholder.typicode.com/users/' + post.userId).catch(handleError)).json();
  if (author.code && author.code === 400) return;

  console.log(post, author);

};

// getPost();