export default function BasicDragDrop() {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
      <div className="h-24 w-24 rounded-md bg-blue-500 p-4 text-white">
        Drag me
      </div>

      <div className="flex h-40 w-40 items-center justify-center rounded-md border-2 border-dashed border-gray-400">
        <span className="text-gray-500 dark:text-gray-400">Drop here</span>
      </div>
    </div>
  )
}
