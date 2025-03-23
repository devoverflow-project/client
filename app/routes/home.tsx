import type { Route } from './+types/home';

import QuestionCard from '~/components/QuestionCard';
import { questions } from '~/helpers/demoData';

export function meta({}: Route.MetaArgs) {
   return [
      { title: 'New React Router App' },
      { name: 'description', content: 'Welcome to React Router!' },
   ];
}

export default function Home() {
   return (
      <div className="flex flex-col gap-2 mx-auto my-4 max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
         <h4 className="text-2xl font-semibold tracking-tight text-white sm:text-xl">
            All Question
         </h4>
         {questions.map(({ header, tags }) => {
            return <QuestionCard header={header} tags={tags}></QuestionCard>;
         })}
      </div>
   );
}
