import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../global'
import AlbumCard from '../components/albumCard'

export default function Home() {
  const [albums, setAlbums] = useState([])

  async function getAlbums() {
    const res = await axios.get(`${BASE_URL}/albums`)
    setAlbums(res.data.albums)
    console.log(res.data.albums)
    console.log('get albums function')
  }

  useEffect(() => {
    getAlbums()
  }, [])

  return (
    <div>
      <h3 className="title">New Albums</h3>
      <div className="albums">
        <AlbumCard albums={albums} />
      </div>
    </div>
  )
}
