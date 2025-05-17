import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading" style={{fontFamily:"var(--my-font)", fontWeight:800}}>pitch your startup <br/> connect with avengers</h1>
        <p className="sub-heading !max-w-3xl">Attack and Run to team up with Avengers</p>
        <SearchForm />
      </section>
      
    </>
  );
}
