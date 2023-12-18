// import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-end font-mono text-sm lg:flex">
        {/*<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">*/}
        {/*  Get started by editing&nbsp;*/}
        {/*  <code className="font-mono font-bold">app/page.tsx</code>*/}
        {/*</p>*/}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/james-langridge"
            target="_blank"
            rel="noopener noreferrer"
          >
            By James Langridge
          </a>
        </div>
      </div>

      <h1 className="text-6xl sm:text-8xl text-center">Design Patterns</h1>

      {/*<div className="min-h-full w-full bg-white dark:bg-gray-900">*/}
      {/*  <div className="container relative mx-auto flex min-h-[250px] flex-col px-6 py-8 ">*/}
      {/*    <section className="flex flex-1 items-center min-h-[250px] sm:min-h-[500px] px-6 py-8">*/}
      {/*      <div className="flex w-full flex-col">*/}
      {/*        <h1 className="text-center text-5xl font-extrabold lg:text-7xl 2xl:text-8xl flex flex-wrap justify-center sm:leading-[20rem] leading-normal">*/}
      {/*        <span className="bg-gradient-to-br from-teal-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">*/}
      {/*          Design*/}
      {/*        </span>*/}
      {/*          <span className="bg-gradient-to-tr from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-pink-300 dark:to-red-500">*/}
      {/*          Patterns*/}
      {/*        </span>*/}
      {/*        </h1>*/}
      {/*      </div>*/}
      {/*    </section>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="pub-sub"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Pub/Sub{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Demo of the Publish/Subscribe pattern.
          </p>
        </Link>

        {/*<a*/}
        {/*  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <h2 className={`mb-3 text-2xl font-semibold`}>*/}
        {/*    Learn{' '}*/}
        {/*    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
        {/*      -&gt;*/}
        {/*    </span>*/}
        {/*  </h2>*/}
        {/*  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
        {/*    Learn about Next.js in an interactive course with&nbsp;quizzes!*/}
        {/*  </p>*/}
        {/*</a>*/}

        {/*<a*/}
        {/*  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
        {/*  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <h2 className={`mb-3 text-2xl font-semibold`}>*/}
        {/*    Templates{' '}*/}
        {/*    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
        {/*      -&gt;*/}
        {/*    </span>*/}
        {/*  </h2>*/}
        {/*  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
        {/*    Explore starter templates for Next.js.*/}
        {/*  </p>*/}
        {/*</a>*/}

        {/*<a*/}
        {/*  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
        {/*  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <h2 className={`mb-3 text-2xl font-semibold`}>*/}
        {/*    Deploy{' '}*/}
        {/*    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
        {/*      -&gt;*/}
        {/*    </span>*/}
        {/*  </h2>*/}
        {/*  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
        {/*    Instantly deploy your Next.js site to a shareable URL with Vercel.*/}
        {/*  </p>*/}
        {/*</a>*/}
      </div>
    </main>
  )
}
