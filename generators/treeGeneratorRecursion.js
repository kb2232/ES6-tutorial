class Comment {
  constructor(content,children)
  {
    this.content = content;
    this.children = children
  }

  *[Symbol.iterator]()
  {
    yield this.content;
    for(let child of this.children)
    {
      yield* child;
    }
  }
}
const childs = {
  child1 : new Comment('child1',[]),
  child2 : new Comment('child2',[]),
  child3 : new Comment('child3',[]),
  child4 : new Comment('child4',[]),
}

const children = ({child1,child2,child3,child4})=>
{
  return [
    child1,
    child2,
    child3,
    child4
  ];
}

const root = new Comment('test post', children(childs));

const values = [];
for( let child of root)
{
  values.push(child);
}
console.log(values);