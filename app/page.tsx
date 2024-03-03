"use client"

import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import Inmuebles from './Inmuebles';

interface PartialPlan {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage() {

  const partialPlansMock = {
    id: 1,
    name: 'pp1',
    username: 'username',
    email: 'email'
  }

  const partialPlans = partialPlansMock;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Inmuebles/>
    </main>
  );
}
