import React from 'react';

const JobBoard = ({ job, handleTagClick }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }

  if (job.tools) {
    tags.push(...job.tools);
  }
  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 ${
        job.featured && 'border-l-4 border-blue-400 border-solid'
      } sm:flex-row sm:my-4`}>
      <div>
        <img
          className='-mt-16 mb-4 w-20 h-20 sm:my-0 sm:h-24 sm:w-24'
          src={job.logo}
          alt={job.company}
        />
      </div>
      <div className=' flex flex-col justify-between ml-4'>
        <h3 className='font-bold text-xl text-blue-400'>
          {job.company}
          {job.isNew && (
            <span className='bg-blue-400 text-white font-bold m-1 px-1  py-1 rounded-full sm:m-2 sm:px-2 sm:py-2 text-sm'>
              New!
            </span>
          )}
          {job.featured && (
            <span className='bg-gray-800 text-white font-bold m-1 px-1 py-1 rounded-full sm:m-2 sm:px-2 sm:py-2 text-sm '>
              Featured
            </span>
          )}
        </h3>

        <h2 className='font-bold text-xl my-2'>{job.position}</h2>
        <p className='text-gray-700'>
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className='flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-grey-400 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className='cursor-pointer text-blue-400 bg-blue-50 font-bold mr-4 mb-4 p-2 rounded sm:mb-0'>
                {tag}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};

export default JobBoard;
