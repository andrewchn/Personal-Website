import Gallery from "react-photo-gallery";

const Interests = () => {
    const photos = [
        {
          src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
          width: 4,
          height: 3
        },
        {
          src: '../../imgs/jayz.jpg',
          width: 1,
          height: 1
        }
      ];
      
    return (
        <Gallery photos={photos} />
    );
};

export default Interests;
