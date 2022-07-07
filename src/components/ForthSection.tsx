import Roadmap from "../assets/images/roadmap.jpg";

export default function ForthSection() {

    return (
      <div className=" w-full flex flex-col justify-center py-20 px-6 items-center">
        <p className="font-CircularStd-Medium text-xl">Roadmap</p>
        <div className="mt-8">
          <img src={Roadmap} alt="EVR roadmap" className="" />
        </div>
      </div>
    );
}
