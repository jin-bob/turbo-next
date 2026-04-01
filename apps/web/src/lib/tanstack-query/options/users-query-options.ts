'use client';

import { queryOptions } from '@tanstack/react-query';
import axiosInstance from '@/src/lib/axios';

type Gender = 'male' | 'female';
type Role = 'admin' | 'moderator' | 'user';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: Role;
};

export type UsersOptions = Record<
  'p' | 'pp' | 'q' | 'sb' | 'sd',
  string | null | undefined
>;

type CreateUsersQueryOptions = {
  params: UsersOptions;
};

export const createUsersQueryKey = () => ['users'] as const;

export const createUsersQueryWithParamsKey = (params: UsersOptions) =>
  [...createUsersQueryKey(), params] as const;

export default function createUsersQueryOptions({
  params,
}: CreateUsersQueryOptions) {
  return queryOptions({
    queryKey: createUsersQueryWithParamsKey(params),
    queryFn: async ({ queryKey: [path, params], signal }) => {
      const { data } = await axiosInstance.get<{
        users: User[];
        total: number;
      }>(path, {
        params: {
          limit: params.pp || '5',
          skip: Number(params.p) * Number(params.pp || 5),
        },
        signal,
      });

      return data;
    },
  });
}
