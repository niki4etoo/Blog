import RecentPosts from '@/components/RecentPosts'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Blog - Nikolai Nanev</h1>
      <div className='text-center'>
        <h2 className='font-bold'>Recent Posts</h2>
        <RecentPosts />
      </div>
      
    </main>
  )
}
