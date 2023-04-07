import React from 'react'

const upload = () => {
  return (
    <>
    <form method="post" encType='mulitpart/form-data'>
        <div className="mx-auto justify">
        <label htmlFor="file" className="mt-2 mb-2">File</label><br />
        <input type="file" id='file' name='file' className="mb-2"/><br />
        <button className="mb-2">Upload</button>
        </div>
    </form>
    </>
  )
}

export default upload