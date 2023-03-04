import React from 'react'

const MemeContent = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  })
  // console.log(meme);

  const [allMemeImages, setAllMemeImages] = React.useState([])

  React.useEffect(() => {
    console.log('Rendered');

    async function getMemes() {
      const res = await fetch(`https://api.imgflip.com/get_memes`)
      const data = await res.json()
      setAllMemeImages(data.data.memes);
    }
    getMemes()

    // fetch(`https://api.imgflip.com/get_memes`)
    // .then(res => res.json())
    // .then(data => setAllMemeImages(data.data.memes));
  }, [] )

  // console.log(allMemeImages);

  const getMemeImage = () => {
    const randomNum = Math.floor(Math.random() * allMemeImages.length)

    const url = allMemeImages[randomNum].url

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    })) 
    // console.log(url);


  }

  const handleChange = (e) => {
    const {name, value} = e.target

    console.log(value);
    
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }


  return (
    <main className='form-section'>
      <div className="input-div">
        <input 
          type="text" 
          name='topText'
          className="top-input" 
          placeholder='Top Text'
          onChange={handleChange}
          value={meme.topText}
        />
        <input 
          type="text" 
          name='bottomText'
          className="bottom-input" 
          placeholder='Bottom Text'
          onChange={handleChange}
          value={meme.bottomText}
        />
      </div>
      
      <button 
        className="meme-btn" 
        onClick={getMemeImage}>
          Get a new meme image
      </button>

      <div className="meme-div">
        <img className='meme-image' src={meme.randomImage} alt="" />
        <h1 className="meme-text top">{meme.topText}</h1>
        <h1 className="meme-text bottom">{meme.bottomText}</h1>
      </div>

    </main>
  )
}

export default MemeContent