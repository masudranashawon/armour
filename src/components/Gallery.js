import GalleryItem from "./GalleryItem";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1666873575273-fea57e0ae9ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Arcade playtime for 90's kids",
    category: "Arcade Games",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1476058262011-9a78b43bb832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    title: "No signal - no transmission",
    category: "TV",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/flagged/photo-1560177776-295b9cd779de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1pbGl0YXJ5JTIwZXF1aXBtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Retro Closures",
    category: "Boombox",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/76959/supersonic-fighter-aircraft-jet-jet-fighter-76959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Vinyl Loveless Happiness",
    category: "fighter plane",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3706650/pexels-photo-3706650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Vinyl Loveless Happiness",
    category: "cannon",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/87011/helicopter-army-military-war-87011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Vinyl Loveless Happiness",
    category: "Helicopter",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/3706572/pexels-photo-3706572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "A soldier stands in the forest with a sniper",
    category: "Army",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/12487996/pexels-photo-12487996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Green and Black Battle Tank",
    category: "Tank",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/5767952/pexels-photo-5767952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "The army is ready for action at any time",
    category: "Army Team",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/11517333/pexels-photo-11517333.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Back View of an Old Cannon",
    category: "Cannon",
  },
];

const Gallery = () => {
  return (
    <section className='gallery'>
      <h2 className='section-title'>Gallery</h2>
      <div className='gallery-wrapper'>
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
