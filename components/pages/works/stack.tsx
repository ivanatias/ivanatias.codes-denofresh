import type { Stack as StackType } from 'models/works.d.ts'

interface Props {
  stack: StackType[]
}

const Stack = ({ stack }: Props) => (
  <div class='flex items-center gap-3'>
    <span class='inline-block px-4 py-1 text(xs md:sm white) bg(indigo-800 dark:indigo-600) font-semibold rounded-lg'>
      Stack
    </span>
    <div class='flex(& wrap) items-center gap-1'>
      {stack.map(({ _key, tech }) => (
        <span
          key={_key}
          class='text(xs md:sm black dark:gray-300) underline'
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)

export default Stack
