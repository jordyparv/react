import React from 'react';

export default function Form() {
  return (
    <div className='flex items-center justify-center p-12 mt-16'>
      <div className='mx-auto w-full max-w-[550px] bg-white'>
        <form className='py-6 px-9'>
          <div className='mb-5'>
            <label
              htmlFor='song_name'
              className='mb-3 block text-base font-medium text-[#07074D]'
            >
              Song name
            </label>
            <input
              type='text'
              name='song_name'
              id='song_name'
              placeholder='Blank Space'
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='artist'
              className='mb-3 block text-base font-medium text-[#07074D]'
            >
              Artist
            </label>
            <input
              type='text'
              name='artist'
              id='artist'
              placeholder='Taylor Swift'
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='genre'
              className='mb-3 block text-base font-medium text-[#07074D]'
            >
              Genre
            </label>
            <input
              type='text'
              name='genre'
              id='genre'
              placeholder='rock, pop'
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='genre'
              className='mb-3 block text-base font-medium text-[#07074D]'
            >
              Album
            </label>
            <input
              type='text'
              name='genre'
              id='album'
              placeholder='rock, pop'
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='song'
              className='mb-3 block text-base font-medium text-[#07074D]'
            >
              Upload Song
            </label>
            <input
              type='file'
              name='song'
              id='song'
              placeholder='Song'
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='song'
              className='mb-3 block text-base font-medium text-[#07074D]'
            >
              Cover Art
            </label>
            <input
              type='file'
              name='cover'
              id='song'
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div>
            <button className='hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
