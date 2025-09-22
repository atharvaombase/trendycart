const Skeleton = () => {
  return (
    <div className="p-4 md:w-1/4">
      <div className="group h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm animate-pulse">
        {/* Image Skeleton */}
        <div className="relative overflow-hidden">
          <div className="w-full h-64 bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* Content Skeleton */}
        <div className="p-6">
          <div className="mb-4">
            <div className="h-5 bg-gray-200 rounded-md w-2/3 mb-3"></div>
            <div className="h-3 bg-gray-200 rounded-md w-4/5 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded-md w-3/4"></div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="h-6 bg-gray-200 rounded-md w-1/4"></div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-5/12 bg-gray-200 rounded-lg"></div>
            <div className="h-10 w-1/4 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
