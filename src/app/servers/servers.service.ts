/*In the Service, we create the logic that will be send to the component, 
* where we just handle how to show this information we receive
*/
export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 2,
      name: 'Devserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Productionserver',
      status: 'online'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
