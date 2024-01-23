export const WorkspaceItem = ({ title = 'title', description = 'desc' }: { title?: string, description?: string }) => {
  return (
    <div className='border p-4 rounded-2xl shadow-md'>
      <h3 className='text-xl font-bold'>{title}</h3>
      <hr className='my-2' />

      <p className='text-md text-pretty'>
        {description}
      </p>
    </div>
  )
}
