import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Expense Tracker',
  meta: [
    {
      name: 'description',
      content: 'Super fast expense trakcer application in the world',
    },
  ],
};
