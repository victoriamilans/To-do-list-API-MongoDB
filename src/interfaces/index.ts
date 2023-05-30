export interface ITaskRequest {
  title: string;
  description: string;
}

export interface ITaskResponse {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  isDone: boolean;
}

export interface ITaskUpdate {
  title?: string;
  description?: string;
  isDone?: boolean;
}

export interface IUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  username: string;
  email: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  tasks: ITaskResponse[];
}

export interface IUserResponseArray extends Array<IUserResponse> {}

export interface IUserUpdate {
  username?: string;
  email?: string;
  password?: string;
  tasks?: ITaskResponse[];
}

export interface IUserLogin {
  email: string;
  password: string;
}
