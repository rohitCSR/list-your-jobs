import React, { useEffect, useState } from 'react';
import data from './assets/data.json';
import JobBoard from './components/JobBoard';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];
    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  };
  const handleTagClick = (tag) => {
    // avoid reading the tag

    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleClickFilter = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const filteredJobs = jobs.filter(filterFunc);

  const clearFilter = () => {
    setFilters([]);
  };
  return (
    <>
      <header className='bg-blue-700 mb-12'>
        <img
          className='w-full'
          src='/images/bg-header-desktop.svg'
          alt='header'
        />
      </header>
      <div className='container m-auto'></div>
      {filters.length > 0 && (
        <div className='flex flex-wrap bg-white shadow-md my-16 p-6 rounded'>
          {filters.map((filter) => (
            <span
              className='cursor-pointer mr-4 mb-4 rounded font-bold sm:mb-0'
              onClick={() => handleClickFilter(filter)}>
              <span className='text-blue-500 bg-blue-100 p-2'>{filter}</span>
              <span className='bg-blue-500 text-blue-100 p-2'>✕</span>
            </span>
          ))}
          <button
            onClick={clearFilter}
            className='font-bold text-gray-700 ml-auto'>
            {' '}
            Clear
          </button>
        </div>
      )}

      {jobs.length === 0 ? (
        <p>Jobs are fetching</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoard key={job.id} job={job} handleTagClick={handleTagClick} />
        ))
      )}
    </>
  );
}

export default App;
