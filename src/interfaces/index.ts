export interface ITaskRequest {
  title: string;
  description: string;
}

export interface ITaskResponse {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
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
  password: string;
  _id: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
  tasks: ITaskResponse[];
}

export interface IUserUpdate {
  username?: string;
  email?: string;
  password?: string;
  tasks?: ITaskResponse[];
}
