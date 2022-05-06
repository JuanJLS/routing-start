export class UsersService {
  private users = [
    {
      id: 1,
      firstName: "Paco",
      lastName: "Mer-Melada",
    },
    { 
      id: 2,
      firstName: "Antonia",
      lastName: "Koplovich",
    },
  ];

  //return the list of users
  getUsers() {
      return this.users;
  }
  //return a single user from the user array
  getUser(id: number) {
    const user = this.users.find(
        (u) => { 
            return u.id === id;
        }
    );
    return user;
  }
}
