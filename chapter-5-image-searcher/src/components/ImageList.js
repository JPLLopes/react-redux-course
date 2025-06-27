import ImageShow from './ImageShow'
import './ImageList.css'

const ImageList = ({ images }) => {
  return <div className='image-list'>
    {images.map((image) => {
      return <ImageShow image={image} key={image.id}/>
    })}
  </div>
}

export default ImageList