import type { Route } from './+types/home';
import { Welcome } from '../components/Welcome/Welcome';
import QuestionCard from '~/components/QuestionCard';

export function meta({}: Route.MetaArgs) {
   return [
      { title: 'New React Router App' },
      { name: 'description', content: 'Welcome to React Router!' },
   ];
}

export default function Home() {
   return (
      <QuestionCard
         header={
            'The Lightning Component c:LWC_PizzaTracker generated invalid output for field status.Error How to solve this'
         }
         tags={['javascript', 'reactjs', 'invalid fields', 'saleforce']}
      ></QuestionCard>
   );
}
