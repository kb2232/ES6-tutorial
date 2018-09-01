class User
{
  constructor(id)
  {
    this.id = id;
  }
  generateId()
  {
    return Math.random()*9999999;
  }
  createAdmin(userid = this.generateId(),type=0)
  {
    newuser = {
      id:userid
    };
    (type===1)?newuser.admin=true:newuser.admin = false;
    console.log(newuser);
  }
}

let newuser = new User();

newuser.createAdmin(newuser.generateId(),1);
