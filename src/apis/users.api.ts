import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateUserRequest } from '../dto/create-user-request.dto';
import { User } from '../models/User';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/users',
	}),
	endpoints: (build) => ({
		createUser: build.mutation<User, CreateUserRequest>({
			query: (createUserRequest) => ({
				url: '/',
				method: 'POST',
				body: createUserRequest,
			}),
		}),
	}),
});

export const { useCreateUserMutation } = usersApi;
