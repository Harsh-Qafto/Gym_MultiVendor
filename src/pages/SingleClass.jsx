import React from 'react'

const SingleClass = () => {
  return (
    <div>
      <div className="bg-bg_color lg:max-w-screen-2xl max-w-screen-lg mx-auto my-20 lg:px-0 px-3">
        <div className="flex items-center gap-2 justify-between">
          <h1>More Classes</h1>
          <button className="sm:border-2 border border-primary_color text-primary_color rounded py-2 px-2 font-medium w-max transition-all hover:bg-primary_color hover:text-white">
            Browse Classes
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default SingleClass