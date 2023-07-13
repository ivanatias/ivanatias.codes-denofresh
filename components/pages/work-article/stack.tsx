import type { Stack as StackType } from 'models/works.ts'

interface Props {
  stack: StackType[]
}

const Stack = ({ stack }: Props) => (
  <div class='flex items-center gap-3'>
    <span class='inline-block px-4 py-1 text-xs md:text-sm text-white bg-indigo-800 dark:bg-indigo-600 font-semibold rounded-lg'>
      Stack
    </span>
    <ul class='flex flex-wrap items-center gap-1'>
      {stack.map(({ _key, tech }) => (
        <li
          key={_key}
          class='text-xs md:text-sm text-slate-700 dark:text-slate-300 underline'
        >
          {tech}
        </li>
      ))}
    </ul>
  </div>
)

export default Stack
