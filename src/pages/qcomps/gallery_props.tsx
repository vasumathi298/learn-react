// Profile Component
interface ProfileProps {
  name: string;
  imageUrl: string;
  altText: string;
  profession: string;
  awards: string;
  discovery: string;
}

function Profile({ name, imageUrl, altText, profession, awards, discovery }: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt={altText}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

// Gallery Component
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="https://i.imgur.com/szV5sdGs.jpg"
        altText="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovery="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="https://i.imgur.com/YfeOqp2s.jpg"
        altText="Katsuko Saruhashi"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
