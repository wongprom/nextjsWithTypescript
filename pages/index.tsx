import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import HeadlessUi from '../components/HeadlessUi';

interface Person {
  name: string;
  age: number;
  isMale: boolean;
}

interface Student extends Person {
  degree?: string;
  school: string;
}
// degree?: string ? makes it optional
const Home: React.FC = () => {
  const [name, setName] = useState<string>('Jimmy');
  const [age, setAge] = useState<number>(39);
  const [person, setPerson] = useState<Person>({
    name: 'Jimmy',
    age: 39,
    isMale: true,
  });
  const [student, setStudent] = useState<Student>({
    name: 'Sean',
    age: 12,
    isMale: true,
    school: 'Ulrikshalskolan',
  });
  return (
    <div>
      <Head>
        <title>Next + Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Typescript With Next.js</h1>
      <Header title="Search" />
      <HeadlessUi />
    </div>
  );
};
export default Home;
