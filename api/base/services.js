export class BaseService {
  constructor(request) {
    this.request = request;
    this.data = null;
    this.status = 200;
    this.page = request.query.page || 1;
    this.perPage = request.query.perPage || 20;
    this.count = null;
  }

  list = async () => {
    throw new Error("'list' not implemented!");
  };

  create = async (data) => {
    throw new Error("'create' not implemented!");
  };

  retieve = async (id) => {
    throw new Error("'retieve' not implemented!");
  };

  update = async (id, data) => {
    throw new Error("'update' not implemented!");
  };

  delete = async (id) => {
    throw new Error("'delete' not implemented!");
  };

  response = async () => {
    return { data: this.data, status: this.status };
  };
}
