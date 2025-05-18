import AvengersCard from "@/components/AvengersCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {
  searchParams: Promise<{query?: string}>
}) {
  const query  = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id:1, name: "Peter Paker" },
    _id: 1,
    description: "this is the fucking description",
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/11990.jpeg",
    category: "Neighbourhood",
    title: "Spider Man",
  },];
  return (
    <>
      <section className="blue_container pattern">
        <h1 className="heading" style={{fontFamily:"var(--my-font)", fontWeight:800}}>be a hero !<br/> connect with avengers</h1>
        <p className="sub-heading !max-w-3xl">Attack and Run to team up with Avengers</p>
        <SearchForm query={query} />
      </section>
      
      <section className="section_container">
        <p style={{fontFamily:"var(--my-font)", fontWeight:600 , fontSize:28}}>
          {query ? `Search results for "${query}"` : 'All Avengers'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ?(
            posts.map((post: AvengersCardType)=> (
              <AvengersCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-result">No Avengers Found !!</p>
          )}
        </ul>
      </section>
    </>
  );
}
