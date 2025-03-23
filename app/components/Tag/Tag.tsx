import * as React from 'react';

function Tag({ label, className }: { label: string; className: string }) {
   const tagClassName =
      className != ''
         ? className
         : 'rounded-sm bg-gray-500 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
   return (
      <button type="button" className={tagClassName}>
         <p className="bg-white-500">{label.toUpperCase()}</p>
      </button>
   );
}

export default Tag;
