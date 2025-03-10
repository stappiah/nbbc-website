import Banner from "../components/common/Banner";
  import Card from "../components/sermon/Card";

  export default function Sermon() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Banner
          name="Sermons"
          center_text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum atque"
        />
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }