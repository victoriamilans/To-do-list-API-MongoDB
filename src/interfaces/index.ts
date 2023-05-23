export interface ITaskRequest {
  title: string;
  description: string;
  createdAt: string;
  user?: IUserResponse;
}
export interface ITaskUpdate {
  title?: string;
  description?: string;
  createdAt?: string;
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
}

export interface IUserUpdate {
  username?: string;
  email?: string;
  password?: string;
}
