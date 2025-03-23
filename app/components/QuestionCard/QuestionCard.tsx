import * as React from 'react';
import Tag from '../Tag';

function QuestionCard({ header, tags }: { header: string; tags: string[] }) {
   return (
      <div className="flex flex-col gap-2 mx-auto my-2 max-w-7xl px-4 py-8 bg-gray-900 sm:px-6 lg:px-8">
         <h4 className="text-xl font-semibold tracking-tight text-white sm:text-xl">
            {header}
         </h4>
         <ul className="flex gap-4">
            {tags.map((label) => {
               return <Tag label={label} className="" key={label} />;
            })}
         </ul>
      </div>
   );
}

export default QuestionCard;
