import React from 'react';
import fileType from 'file-type'

import { S3 } from 'aws-sdk'

// TODO: Reaching around Apollo right now, would like to
// move this into a query in the future if possible
//
// e is an HTML event
const uploadAsset = (file, callback) => {
  const reader = new FileReader()

  const fileRead = () => {
    const uploadFileType = fileType(reader.result)
    return fetch('/tracks/generate_signature.json', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        file: {
          extension: uploadFileType.ext,
          key: file.name
        }
      })
    }).then(resp => resp.json()
      // TODO: error handling on the client-side signature
      // gen should probably happen here
      .then(json => uploadToS3(json.key, json.url, file)
      .then(url => callback(json.key))))
  }

  reader.onload = fileRead
  reader.readAsArrayBuffer(file)
}

const uploadToS3 = (key, url, file) => {
  const options = {
    method: 'PUT',
    body: file
  }

  return fetch(url, options)
    .then(resp => {
      if (!resp.ok) { throw new Error(`${response.status}: ${response.statusText}`) }
      return key
    })
}

export { uploadAsset }
